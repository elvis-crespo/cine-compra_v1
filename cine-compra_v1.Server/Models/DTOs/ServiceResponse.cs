namespace cine_compra.Server.Models.DTOs
{
    public class ServiceResponse
    {
        public record class GeneralResponse(bool Flag, string Message);
        public record class LoginResponse(bool Flag, string Token, string Message);
        public record class RegisterResponse(bool IsSuccess,int StatusCode, string Message);
    }
}
