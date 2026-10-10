using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/contact")]
public class ContactController : ControllerBase
{
    [HttpGet]
    public ActionResult<ContactContent> GetContactInfo()
    {
        return Ok(PortfolioContent.Contact);
    }
}
