using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/profile")]
public class PortfolioProfileController : ControllerBase
{
    [HttpGet]
    public ActionResult<ProfileContent> GetProfile()
    {
        return Ok(PortfolioContent.Profile);
    }
}
