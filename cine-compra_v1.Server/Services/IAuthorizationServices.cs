using cine_compra.Server.Models.DTOs;
using cine_compra.Server.Models.Entities;
using static cine_compra.Server.Models.DTOs.ServiceResponse;

namespace cine_compra.Server.Services
{
    public interface IAuthorizationServices
    {
        Task<AuthorizationResponse> ReturnToken(LoginDTO authorization);
        Task<AuthorizationResponse> ReturnRefreshToken(RefreshTokenRequest refreshTokenRequest, int idUser);

    }
}
