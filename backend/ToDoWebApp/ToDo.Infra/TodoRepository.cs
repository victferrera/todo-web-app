using Microsoft.EntityFrameworkCore;
using ToDo.Domain.Database;
using ToDo.Domain.DTO;
using ToDo.Domain.Enums;
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

        public async Task Add(Todo todo)
        {
            await _ctx.AddAsync(todo);
            await SaveChanges();
        }

        public async Task<IEnumerable<Todo>> GetAllTodos()
        {
            return await _ctx.Todos.ToListAsync();
        }

        public async Task<Todo> GetTodoById(int todoId)
        {
            return await _ctx.Todos.FirstOrDefaultAsync(todo => todo.Id == todoId);
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

        private async Task SaveChanges()
        {
            await _ctx.SaveChangesAsync();
        }
    }
}
