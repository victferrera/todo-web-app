
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ToDo.Domain.Database;
using ToDo.Domain.Interfaces;
using ToDo.Infra;

namespace ToDo.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            // Add Services
            builder.Services.AddDbContextPool<TodoContext>(opt => opt.UseNpgsql(builder.Configuration.GetConnectionString("TodoContext")));
            builder.Services.AddScoped<ITodoRepository, TodoRepository>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddSwaggerGen(opt =>
            {
                opt.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "ToDo API",
                    Description = "An ASP.NET Core API for managing a ToDo list",
                    TermsOfService = new Uri("https://www.google.com.br"),
                    Contact = new OpenApiContact
                    {

                    },
                    License = new OpenApiLicense
                    {

                    }
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
