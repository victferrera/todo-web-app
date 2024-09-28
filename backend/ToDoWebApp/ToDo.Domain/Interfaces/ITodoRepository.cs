using ToDo.Domain.DTO;
using ToDo.Domain.Enums;
using ToDo.Domain.Models;

namespace ToDo.Domain.Interfaces
{
    public interface ITodoRepository
    {
        Task Add(Todo todo);
        Task<IEnumerable<Todo>> GetAllTodos();
        Task<Todo> GetTodoById(int todoId);
        Task Remove(int todoId);
        Task UpdateStatus(UpdateStatusDto dto);
    }
}
