namespace cine_compra.Server.Models.DTOs
{
    public class AuthorizationResponse
    {
        public string Token { get; set; } = string.Empty;
        public string RefrestToken { get; set; } = string.Empty;
        public bool Result { get; set; }
        public string Message { get; set; } = string.Empty;
    }
}
