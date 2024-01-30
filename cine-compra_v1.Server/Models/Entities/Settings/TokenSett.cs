using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace cine_compra.Server.Models.Entities.Settings
{
    public class TokenSett : IEntityTypeConfiguration<Token>
    {
        public void Configure(EntityTypeBuilder<Token> builder)
        {
            builder.Property(tok => tok.IsActive).HasComputedColumnSql("(case when [Expired]<getdate() then CONVERT([bit],(0)) else CONVERT([bit], (1)) end)", false);
        }
    }
}
