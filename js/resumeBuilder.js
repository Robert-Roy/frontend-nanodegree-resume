// $("#main").append("Robert Roy");
// [string].replace([old],[new]);

var bio = {
    "name": "Robert Roy",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "Robert@RobertsWorkspace.com",
        "gitnub": "https://github.com/Robert-Roy",
        "twitter": "",
        "location": "Houston, TX"
    },
    "welcomeMessage": "Hey, there!",
    "skills": ["Coding with PHP, MySQL, Javascript, and HTML/CSS", "Using Git, WordPress, NetBeans, Visual Studio 2013, and Eclipse", "Familiarity with Laravel, Linux, GIMP, and cPanel"],
    "biopic": "images/fry.jpg"
            //
}

var education = {
    "schools": [{
            "name": "San Jacinto College",
            "location": "Houston, TX",
            "degree": "AA in Business",
            "dates": "2013-2015",
            "url": "www.sanjac.edu"
        }]
}

var work = {
    "jobs": [{
            "employer": "Merchant Card Solutions",
            "title": "Project Lead",
            "location": "Abilene, TX",
            "dates": "2015 - 2017",
            "description": "Configured, installed, and supported Point of Sale systems."
        }, {
            "employer": "POS Solutions",
            "title": "Project Lead",
            "location": "Austin, TX",
            "dates": "2017 - 2018",
            "description": "Configured, installed, and supported Point of Sale systems."
        }]
            // display function
}

var projects = {
    "projects": [{
            "title": "Robert's Workspace",
            "dates": "2016 - Now",
            "description": "My portfolio site.",
            "images": ["images/image1.png", "images/image2.png", "images/image3.png"]
        }, {
            "title": "Robert's Workspace",
            "dates": "January 13, 2017 - January 15, 2017",
            "description": "My portfolio site.",
            "images": ["images/image1.png", "images/image2.png", "images/image3.png"]
        }]
}


for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").append(HTMLworkEmployer.replace("%data%", job.employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", job.title));
    $("#workExperience").append(HTMLworkDates.replace("%data%", job.dates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%", job.location));
    $("#workExperience").append(HTMLworkDescription.replace("%data%", job.description));
    $("#workExperience").append("</div>");
}

for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $("#projects").append(HTMLprojectTitle.replace("%data%", project.title));
    $("#projects").append(HTMLprojectDates.replace("%data%", project.dates));
    $("#projects").append(HTMLprojectDescription.replace("%data%", project.description));
    for (image in project.images) {
        $("#projects").append(HTMLprojectImage.replace("%data%", image));
    }
    $("#projects").append("</div>");
}

for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    $("#education").append("</div>");
}

// bio section
//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//var formattedPictureURL = HTMLbioPic.replace("%data%", bio.biopic);
//var formattedSkillArray = [];
//for (var i = 0; i < bio.skills.length; i++) {
//    formattedSkillArray.push(HTMLskills.replace("%data", bio.skills[i]));
//}
//for (var i = 0; i < bio.skills.length; i++) {
//    $("#header").append(formattedSkillArray[i]);
//}
//$("#header").prepend(formattedWelcomeMessage);
//$("#header").prepend(formattedPictureURL);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//
////work section
//for (var i = 0; i < work.jobs.length; i++) {
//    $("#workExperience").append(HTMLworkStart);
//    $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
//    $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
//    $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
//    $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
//    $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
//    $("#workExperience").append("</div>");
//}
//
//for (var i = 0; i < education.schools.length; i++) {
//    $("#education").append(HTMLschoolStart);
//    $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
//    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
//    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
//    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
//    $("#education").append("</div>");
//}



//var HTMLworkStart = '<div class="work-entry"></div>';
//var HTMLworkEmployer = '<a href="#">%data%';
//var HTMLworkTitle = ' - %data%</a>';
//var HTMLworkDates = '<div class="date-text">%data%</div>';
//var HTMLworkLocation = '<div class="location-text">%data%</div>';
//var HTMLworkDescription = '<p><br>%data%</p>';
//
//var HTMLprojectStart = '<div class="project-entry"></div>';
//var HTMLprojectTitle = '<a href="#">%data%</a>';
//var HTMLprojectDates = '<div class="date-text">%data%</div>';
//var HTMLprojectDescription = '<p><br>%data%</p>';
//var HTMLprojectImage = '<img src="%data%">';
//
//var HTMLschoolStart = '<div class="education-entry"></div>';
//var HTMLschoolName = '<a href="#">%data%';
//var HTMLschoolDegree = ' -- %data%</a>';
//var HTMLschoolDates = '<div class="date-text">%data%</div>';
//var HTMLschoolLocation = '<div class="location-text">%data%</div>';
//var HTMLschoolMajor = '<em><br>Major: %data%</em>';