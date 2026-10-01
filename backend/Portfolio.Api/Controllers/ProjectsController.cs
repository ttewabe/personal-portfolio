using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetProjects()
    {
        var projects = new[]
        {
            new
            {
                Name = "My Portfolio",
                Description = "A full-stack portfolio application built with React, .NET and PostgreSQL.",
                Technologies = new[]
                {
                    "React",
                    "TypeScript",
                    ".NET",
                    "PostgreSQL"
                }
            }
        };

        return Ok(projects);
    }
}