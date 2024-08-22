namespace cine_compra.Server.Models.DTOs
{
    public class ServiceResponse
    {
        public record class GeneralResponse(bool Flag, string Message);
        public record class LoginResponse(bool IsSuccess, int StatusCode, string Message, string Token = "", string RefreshToken = "");
        public record class RegisterResponse(bool IsSuccess,int StatusCode, string Message);
    }
}
