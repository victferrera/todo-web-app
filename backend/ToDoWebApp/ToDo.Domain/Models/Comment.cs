namespace ToDo.Domain.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int TodoId { get; set; }
    }
}
