using Microsoft.AspNetCore.Mvc;
using ToDo.Domain.DTO;
using ToDo.Domain.Interfaces;
using ToDo.Domain.Models;

namespace ToDo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly ITodoRepository _repo;
        public TodoController(ITodoRepository repo)
        {
            _repo = repo;
        }

        [HttpPost]
        public async Task<ActionResult<Todo>> Create(Todo todo)
        {
            await _repo.Add(todo);

            return CreatedAtAction(nameof(Create), todo);
        }

        [HttpGet]
        public async Task<IEnumerable<Todo>> GetAllTaks()
        {
            Thread.Sleep(3000);
            return await _repo.GetAllTodos();
        }

        [HttpGet("{id}")]
        public async Task<Todo> GetTodoById(int id)
        {
            return await _repo.GetTodoById(id);
        }

        [HttpDelete("{id}")]
        public async Task Remove(int id)
        {
            await _repo.Remove(id);
        }

        [HttpPut]
        public async Task UpdateStatus(UpdateStatusDto dto)
        {
            await _repo.UpdateStatus(dto);
        }
    }
}
