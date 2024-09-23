using ToDo.Domain.Enums;

namespace ToDo.Domain.DTO
{
    public class UpdateStatusDto
    {
        public int TodoId { get; set; }
        public TodoStatusType Status { get; set; }
    }
}
