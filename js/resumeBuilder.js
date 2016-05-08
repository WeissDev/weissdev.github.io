// Bio Section
var bio = {
    "name": "Valentin Weiss",
    "role": "Student",
    "contacts": {
        "email": "valentin.weiss@hotmail.com",
        "github": "WeissDev",
        "location": "Zurich, Switzerland"
    },
    "welcomeMessage": "Hi, I'm Valentin. Nice to meet you!",
    "skills": [
        "HTML, CSS & JavaScript",
        "Java",
        "C",
        "self-motivated learning",
        "languages"
    ],
    "bioPic": "images/biopic.jpg"
}

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for(i in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
}

bio.display();

//Skillset Section
var object = [

    {
        "headline":"HTML & CSS (8/10)",
        "value":8,
        "length":10,
        "description":"Pretty straightforward concept. Although CSS layout techniques can be quite tricky."

    },
    {
        "headline":"JavaScript (7/10)",
        "value":7,
        "length":10,
        "description": "My first experience with a programming language. Still need to improve but I\'m having a lot of fun with it!."

    },
    {
        "headline": "Java (5/10)",
        "value": 5,
        "length": 10,
        "description": "I've learnt Java as an introductory language to Object-Oriented Programming at the University of Zurich in my first semester. I am already very familiar with its basic key concepts."
    },
    {
        "headline": "C (4/10)",
        "value": 4,
        "length": 10,
        "description": "I was introduced to the C programmming language in the course Algorithms and Data Structures at UZH. The course mostly focuses on manipulating and searching given data structures using C."
    },
    {
        "headline": "Python (2/10)",
        "value": 2,
        "length": 10,
        "description": "Just started out with Python. Don't really know a lot about it yet except how the syntax looks like."
    }
]

$(document).ready(function(){

    $("#skillset").skillset({

    object:object,
    duration:150

    });

});


// Education Section
var education = {
    "schools": [
        {
            "name": "University of Zurich",
            "degree": "Bsc. in Computer Science",
            "dates": "September 2015 - future",
            "location": "Zurich, Switzerland",
            "major": "Software Systems"
        },
        {
            "name": "Kantonsschule Zurich Nord",
            "degree": "High School Degree",
            "dates": "2009 - 2013",
            "location": "Oerlikon, Switzerland",
            "major": "Modern Languages"
        }
    ],
    "onlineCourses": [
        {
            "school": "Udacity Inc.",
            "title": "Front-End Web Development Nanodegree",
            "dates": "January 2015 - July 2015",
            "url": "udacity.com"
        },
        {
            "school": "Treehouse Island Inc.",
            "title": "Front-End Web Development Track",
            "dates": "2015",
            "url": "teamtreehouse.com"
        },
        {
            "school": "Treehouse Island Inc.",
            "title": "Web Design Track",
            "dates": "2014",
            "url": "teamtreehouse.com"
        }
    ]
}

education.display = function() {
    if(education.schools.length > 0) {
        for (i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor)
        }
    }

    if(education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for(i in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}

education.display();
// Work Section
var work = {
    "jobs": [
        {
          "employer": "Udacity Inc.",
          "title":  "Front-End Nanodegree Code Reviewer",
          "dates": "July 2015 - Present",
          "location": "Zurich, Switzerland (Home Office)",
          "description": "I am one of the very first Udacity Code Reviewers, where I review student project submissions. For each submission, I do both a thorough code review and project evaluation. I strive to give actionable and helpful feedback to students while also improving my code reviewing skills at the same time."
        },
        {
            "employer": "Teleperformance SCMG AG",
            "title": "Client Representative",
            "dates": "November 2014 - July 2015",
            "location": "Wallisellen, Switzerland",
            "description": "I used to work in this Customer Service position for a variety of client companies. This position required fluent knowledge in German, French, Italian and English since I got to deal with people from all over Switzerland."
        },
        {
            "employer": "Interdiscount",
            "title": "Sales Assistant",
            "dates": "December 2013",
            "location": "Zurich, Switzerland",
            "description": "My first job after high school graduation. I had to help customer\'s who had questions or wanted to buy all kinds of electronic goodies."
        }
    ]
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedWorkInfo = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedWorkInfo);
    }
}

work.display();

// Projects Section
var projects = {
    "projects": [
        {
          "title": "Mataram Tour & Travel, Travel Business Website",
          "dates": "2016",
          "description": "A Simple Website I made for my friends travel business in Indonesia. It was my first \"real\" Website project and was very challenging and fun to plan and implement everything on my own. Find the website here: <a href=\"https://mataramtours.co.id/en/\">Mataram Tour & Travel Website</a>",
          "images": ["images/mataram-tours.png", "images/mataram-tours2.png"]
        },
        {
          "title": "Health Tracker Web App",
          "dates": "2015",
          "description": "A Single Page Web-App which lets you search for food items querying the Nutritionix API. Results can be added to a list which lets you then see your total calorie consumption of all the items added together. Find the project here: <a href=\"http://weissdev.github.io/health-tracker\">Health Tracker Project Site</a><a href=\"https://github.com/WeissDev/health-tracker\">Health Tracker Github Repo</a>",
          "images": ["images/health-tracker.png"]
        },
        {
          "title": "Zurich Neighborhood Map",
          "dates": "2015",
          "description": "An interactive Neighborhood Map which uses the Google Maps, OpenWeatherMap and Wikimedia API showing information about a few notable places in Zurich. Since it was my first time working with external data API\'s, the app\'s overall look and design still needs some improvement. Find the project here: <a href=\"http://weissdev.github.io/neighborhood-map-p5/\">Neighborhood Map Project Site</a><a href=\"<a href=\"http://weissdev.github.io/neighborhood-map-p5/\">Neighborhood Map Github Repo</a>",
          "images": ["images/neighborhood-map.png"]
        },
        {
          "title": "Arcade Game Clone",
          "dates": "2015",
          "description": "As my first deep dive into Object-Oriented Programming in JavaScript, I programmed a clone of the classic arcade game Frogger at Udacity. Find the game here: <a href=\"http://weissdev.github.io/frontend-nanodegree-arcade-game-P3/\">Arcade Game Clone Site<a href=\"https://github.com/WeissDev/frontend-nanodegree-arcade-game-P3\">Arcade Game Clone Github Repo</a>",
          "images": ["images/arcade-game-clone.png"]
        }
    ]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

// Internationalize Button
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// map div
$("#mapDiv").append(googleMap);
