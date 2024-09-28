using Microsoft.EntityFrameworkCore;
using ToDo.Domain.Models;

namespace ToDo.Domain.Database
{
    public class TodoContext: DbContext
    {
        public DbSet<Todo> Todos { get; set; }

        public TodoContext(DbContextOptions<TodoContext> opt) 
            : base(opt)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(TodoContext).Assembly);
        }
    }
}
