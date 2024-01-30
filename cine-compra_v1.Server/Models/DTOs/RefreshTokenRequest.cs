namespace cine_compra.Server.Models.DTOs
{
    public class RefreshTokenRequest
    {
        public string RefreshToken { get; set; } = string.Empty;
        public string ExpirationToken { get; set; } = string.Empty;
    }

}
