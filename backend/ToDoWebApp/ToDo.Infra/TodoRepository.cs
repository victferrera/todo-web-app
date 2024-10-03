using Microsoft.EntityFrameworkCore;
using ToDo.Domain.Database;
using ToDo.Domain.DTO;
using ToDo.Domain.Interfaces;
using ToDo.Domain.Models;


namespace ToDo.Infra
{
    public class TodoRepository : ITodoRepository
    {
        private readonly TodoContext _ctx;

        public TodoRepository(TodoContext ctx)
        {
            _ctx = ctx;
        }

        #region Todo
        public async Task Add(Todo todo)
        {
            await _ctx.AddAsync(todo);
            await SaveChanges();
        }

        public async Task<IEnumerable<Todo>> GetAllTodos()
        {
            return await _ctx.Todos.Include(c => c.Comments).ToListAsync();
        }

        public async Task<Todo> GetTodoById(int todoId)
        {
            return await _ctx.Todos.Include(c => c.Comments).FirstOrDefaultAsync(todo => todo.Id == todoId);
        }

        public async Task Remove(int todoId)
        {
            Todo todo = await GetTodoById(todoId);
            _ctx.Todos.Remove(todo);
            await SaveChanges();
        }

        public async Task UpdateStatus(UpdateStatusDto dto)
        {
            Todo todo = await GetTodoById(dto.TodoId);
            todo.Status = dto.Status;
            todo.UpdatedOn = DateTime.UtcNow;
            _ctx.Todos.Update(todo);
            await SaveChanges();
        }
        #endregion

        #region Comment
        public async Task AddComment(CommentDto dto)
        {
            var todo = await GetTodoById(dto.TodoId);

            if (todo != null)
            {
                todo.Comments.Add(new Comment { Text = dto.Text, TodoId = dto.TodoId });
                await SaveChanges();
            }
        }

        public async Task RemoveComment(int todoId, int commentId)
        {
            var todo = await GetTodoById(todoId);

            if (todo != null)
            {
                var comment = todo.Comments.FirstOrDefault(c => c.Id == commentId);
                
                if(comment != null)
                {
                    todo.Comments.Remove(comment);
                }

                await SaveChanges();
            }
        }

        #endregion

        private async Task SaveChanges()
        {
            await _ctx.SaveChangesAsync();
        }

        public async Task UpdateDescription(DescriptionDto dto)
        {
            var todo = await GetTodoById(dto.TodoId);

            if(todo != null)
            {
                todo.Description = dto.Text;
                _ctx.Update(todo);
            }

            await SaveChanges();
        }
    }
}
