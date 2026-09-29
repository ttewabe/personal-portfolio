var builder = WebApplication.CreateBuilder(args);

// Add controller support
builder.Services.AddControllers();

var app = builder.Build();

app.UseHttpsRedirection();

// Map controller routes
app.MapControllers();

app.Run();