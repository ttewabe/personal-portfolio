namespace Portfolio.Api.Models;

public sealed record ProfileContent(
    string Name,
    string JobTitle,
    string ImageUrl,
    string GithubUrl,
    string ResumeUrl,
    string[] PersonalityTraits,
    string AboutTitle,
    string AboutRole,
    string[] AboutParagraphs);

public sealed record SkillCategoryContent(string Name, int Proficiency);

public sealed record SkillsContent(
    string Heading,
    string ProficiencyLabel,
    string ResumeUrl,
    SkillCategoryContent[] Categories);

public sealed record ProjectContent(
    string Name,
    string Description,
    string ImageUrl,
    string ImageAlt,
    string? WebsiteUrl,
    string[] Technologies);

public sealed record ContactLinkContent(string Name, string Url, string IconClass);

public sealed record ContactContent(string Intro, ContactLinkContent[] SocialLinks);

public static class PortfolioContent
{
    public static readonly ProfileContent Profile = new(
        "Tewabe",
        "Software Developer",
        "./assets/images/img.jpg",
        "https://github.com/ttewabe",
        "https://ttewabe.github.io/html-j",
        [
            "optimist 🍀",
            "motivated 🏃‍♂️",
            "disciplined 🤵‍♂️",
            "sociable 😁",
            "team player 👫",
            "bookworm 📚",
            "trilingual ✋🏽",
            "goal-oriented 🎯",
            "resilient 💪",
            "creative 🎨",
            "focused 🔍",
            "dream chaser 🌟",
            "problem solver 🧩",
            "adaptable 🌱",
            "leader 🏆",
            "visionary 🌅",
            "hard worker 🛠️"
        ],
        "Who is Tewabe?",
        "Software Developer",
        [
            "I'm passionate about bringing both the technical and visual aspects of digital products to life.User experience with strong organization, time management & communication skills. I'm able to work independently & collaboratively with a meticulous attention to detail.",
            "I have a Degree in Engineering, and Computer Science.I'm happiest when I'm creating, learning, exploring and thinking about how to make things better."
        ]);

    public static readonly string[] Skills =
    [
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
    ];

    public static readonly SkillsContent SkillsDetails = new(
        "My toolbox for Full Stack Development magic employs a full compliment of technologies!",
        "PROFICIENT",
        "https://ttewabe.github.io/html-js/",
        [
            new("Frontend Development Skills", 100),
            new("Backend Development Skills", 100),
            new("Cloud Computing Skills", 100),
            new("Development Tools and Methodologies", 100),
            new("Soft Skills & Collaboration", 100)
        ]);

    public static readonly ProjectContent[] Projects =
    [
        new(
            "Coffee Affection",
            "This is responsive website that shows our organic coffee products/Coffee Affection accessible shop in USA. The tool I used for this project, HTML, CSS ,JAVA SCRIPT, REACT, REDUX,NODE JS.",
            "./assets/images/affection1.jpeg",
            "Coffee Affection website",
            "https://teff.ttadege.com",
            ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"]),
        new(
            "Ethio Tour",
            "This is a published Tour Guid Website. If you want to travel to Ethiopia and needed my website to help you navigate the best place. The tool I used for this project, HTML, CSS ,JAVASCRIPT, Bootstrap.",
            "./assets/images/tour1.jpeg",
            "Ethio Tour website",
            "https://tour.ttadege.com",
            ["HTML", "CSS", "JavaScript", "Bootstrap"]),
        new(
            "Accounting service",
            "In this digital era, having an online presence is not just an advantage it’s an absolute necessity. Our website as the mirror of our service such as Tax filing, Auditing and other accounting service. The tool I used for this project, HTML, CSS ,JAVASCRIPT, REACT, and REDUX.",
            "./assets/images/timetax2.jpeg",
            "Accounting service website",
            "https://www.mb.ttadege.com",
            ["HTML", "CSS", "JavaScript", "React", "Redux"]),
        new(
            "Vending Machine Simulator",
            "This project is used to select item and get price; accept coins; dispense items purchased and return change.The tool I am using for this project,Java ",
            "./assets/images/vms.jpeg",
            "Vending Machine Simulator",
            null,
            ["Java"])
    ];

    public static readonly ContactContent Contact = new(
        "Dropping a line to say good day, see if we can build something amazing together? I’d love to hear from you!",
        [
            new("LinkedIn", "https://www.linkedin.com/in/ttewab/", "fa-linkedin"),
            new("GitHub", "https://githu.com/ttewabe", "fa-github"),
            new("Twitter", "http://twitter.com/", "fa-twitter"),
            new("YouTube", "https://ww.youtube.com/channel/UCB7pGlj43FBV5KSQjmxIjIw", "fa-youtube")
        ]);
}
