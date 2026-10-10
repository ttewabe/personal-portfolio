using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/skills")]
public class SkillsController : ControllerBase
{
    [HttpGet]
    public ActionResult<IReadOnlyList<string>> GetSkills()
    {
        return Ok(PortfolioContent.Skills);
    }

    [HttpGet("categories")]
    public ActionResult<SkillsContent> GetSkillCategories()
    {
        return Ok(PortfolioContent.SkillsDetails);
    }
}