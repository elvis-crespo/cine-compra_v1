using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace cine_compra.Server.Models.Entities.Settings
{
    public class UserSett : IEntityTypeConfiguration<User>
    {

        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasIndex(us => us.UserName).IsUnique();
            builder.HasIndex(us => us.Password).IsUnique();
            builder.HasIndex(us => us.Email).IsUnique();
            //builder.HasIndex(us => us.ConfirmPassword).IsUnique();

            builder.Property(us => us.UserName).HasMaxLength(50).IsRequired();
            builder.Property(us => us.Password).IsRequired();

        }
    }
}
