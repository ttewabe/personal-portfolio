using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SkillsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetSkills()
    {
        var skills = new[]
        {
            "React",
            "Angular",
            "TypeScript",
            "JavaScript",
            "C#",
            ".NET",
            "ASP.NET Core",
            "Java",
            "REST APIs",
            "PostgreSQL",
            "Git"
        };

        return Ok(skills);
    }
}