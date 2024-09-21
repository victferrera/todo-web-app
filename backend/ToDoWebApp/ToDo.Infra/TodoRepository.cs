using Microsoft.EntityFrameworkCore;
using ToDo.Domain.Database;
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

        public Task Remove(int todoId)
        {
            throw new NotImplementedException();
        }

        private async Task SaveChanges()
        {
            await _ctx.SaveChangesAsync();
        }
    }
}
