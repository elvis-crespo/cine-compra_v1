using cine_compra.Server.Models.DTOs;
using Microsoft.IdentityModel.Tokens;

namespace cine_compra.Server.Services
{
    public interface IAuthorizationService
    {
        Task<ServiceResponse.LoginResponse> Login(LoginDTO authorization);
        Task<ServiceResponse.RegisterResponse> Register(UserDTO userDTO);
        Task<ServiceResponse.LoginGoogle> LoginGoogle();
        Task<AuthorizationResponse> ReturnRefreshToken(RefreshTokenRequest refreshTokenRequest, int idUser);
        string GenerateToken(string idUser);
        TokenValidationResult TokenValidation(string token);
    }
}
