document.addEventListener("DOMContentLoaded", function(){    
    const skills = [
        "HTML/CSS/JavaScript",
        "Native Android",
        "Java",
        "C#",
        "SQL Server",
        "C/C++",
        "Python"
    ];

    window.Typed.new(".typedSkills", {
        strings: skills.map(skill => skill.concat('.')),
        typeSpeed: 35,
        backSpeed: 0,
        backDelay: 1500,
        loop: true
    });
});