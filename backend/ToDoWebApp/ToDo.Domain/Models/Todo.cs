using ToDo.Domain.Enums;

namespace ToDo.Domain.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public TodoStatusType Status { get; set; }
        public string? TimeTracking { get; set; }
        public ICollection<Comment>? Comments { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }

        public Todo()
        {
            CreatedOn = DateTime.UtcNow;
            UpdatedOn = DateTime.UtcNow;
            Status = TodoStatusType.Active;
        }
    }
}
