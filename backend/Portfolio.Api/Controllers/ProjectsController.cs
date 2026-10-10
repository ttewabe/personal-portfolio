using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<ProjectContent>> GetProjects()
    {
        return Ok(PortfolioContent.Projects);
    }
}