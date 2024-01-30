using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace cine_compra.Server.Models.Entities.Settings
{
    public class PersonSett : IEntityTypeConfiguration<Person>
    {
        public void Configure(EntityTypeBuilder<Person> builder)
        {
            builder.Property(pe => pe.FullName).HasMaxLength(60);
            builder.Property(pe => pe.FullSurname).HasMaxLength(60);
            builder.Property(pe => pe.NumberPhone).HasMaxLength(10);
        }
    }
}
