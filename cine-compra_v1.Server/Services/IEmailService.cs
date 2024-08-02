namespace cine_compra_v1.Server.Services
{
    public interface IEmailService
    {
        Task SendEmail(string to, string subject, string message);
    }
}
