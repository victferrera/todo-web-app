﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ToDo.Domain.Models;

namespace ToDo.Domain.Database.Configuration
{
    public class TodoConfiguration : IEntityTypeConfiguration<Todo>
    {
        public void Configure(EntityTypeBuilder<Todo> builder)
        {
            builder.ToTable("Todos");

            builder.HasKey(t => t.Id);

            builder.Property(p => p.Title)
                .IsRequired(true)
                .HasMaxLength(140);

            builder.Property(p => p.Description)
                .IsRequired(true);

            builder.Property(p => p.Status)
                .IsRequired(true)
                .HasConversion<int>();

            builder.Property(p => p.TimeTracking)
                .IsRequired(false);
        }
    }
}
