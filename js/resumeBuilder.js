// $("#main").append("Robert Roy");
// [string].replace([old],[new]);

var bio = {
    "name": "Robert Roy",
    "role": "Front End Web Developer",
    "pictureURL": "images/fry.jpg",
    "welcomeMessage": "Hey, there!",
    "skills": ["Coding with PHP, MySQL, Javascript, and HTML/CSS", "Using Git, WordPress, NetBeans, Visual Studio 2013, and Eclipse", "Familiarity with Laravel, Linux, GIMP, and cPanel"]
            // display function
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

// bio section
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedSkillArray = [];
for (var i = 0; i < bio.skills.length; i++) {
    formattedSkillArray.push(HTMLskills.replace("%data", bio.skills[i]));
}
for (var i = 0; i < bio.skills.length; i++) {
    $("#header").append(formattedSkillArray[i]);
}
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedPictureURL);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//work section
for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
    $("#workExperience").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
    $("#workExperience").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
    $("#workExperience").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    $("#workExperience").append("</div>");
}

for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);
    $("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
    $("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
    $("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    $("#education").append("</div>");
}



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