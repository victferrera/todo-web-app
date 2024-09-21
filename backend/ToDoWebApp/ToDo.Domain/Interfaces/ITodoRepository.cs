using ToDo.Domain.Models;

namespace ToDo.Domain.Interfaces
{
    public interface ITodoRepository
    {
        Task Add(Todo todo);
        Task<IEnumerable<Todo>> GetAllTodos();
        Task<Todo> GetTodoById(int todoId);
        Task Remove(int todoId);
    }
}
