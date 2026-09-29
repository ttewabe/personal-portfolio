using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExperienceController : ControllerBase
{
    [HttpGet]
    public IActionResult GetExperience()
    {
        var experience = new[]
        {
            new
            {
                Company = "CVS",
                Position = "Software Engineer / Full Stack Developer",
                StartYear = 2022,
                EndYear = "Present",
                Description = "Developing and supporting modern web applications using React, Angular, .NET and Java."
            }
        };

        return Ok(experience);
    }
}