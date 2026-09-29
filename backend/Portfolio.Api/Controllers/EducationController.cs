using Microsoft.AspNetCore.Mvc;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EducationController : ControllerBase
{
    [HttpGet]
    public IActionResult GetEducation()
    {
        var education = new[]
        {
            new
            {
                Degree = "Your Degree",
                School = "Your University",
                Year = "Your Graduation Year"
            }
        };

        return Ok(education);
    }
}