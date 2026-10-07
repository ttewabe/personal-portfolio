
var builder = WebApplication.CreateBuilder(args);

// Add controller support
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();

// Configure CORS for the React app
app.UseCors("AllowReact");

// Map controller routes
app.MapControllers();

app.Run();