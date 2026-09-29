using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProfileController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProfile()
    {
        var profile = new
        {
            Name = "Tad",
            Title = "Software Engineer | Full Stack Developer",
            Location = "Texas",
            Summary = "Full Stack Developer specializing in React, .NET and modern web applications."
        };

        return Ok(profile);
    }
}