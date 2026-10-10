using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api")]
public class SkillsController : ControllerBase
{
    [HttpGet("skills")]
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