namespace ToDo.Domain.DTO
{
    public class CommentDto
    {
        public int CommentId { get; set; }
        public int TodoId { get; set; }
        public string Text { get; set; }
    }
}
