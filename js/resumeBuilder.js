// $("#main").append("Robert Roy");
// [string].replace([old],[new]);

var bio = {
    "name": "Robert Roy",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "Robert@RobertsWorkspace.com",
        "github": "Robert-Roy",
        "website": "RobertsWorkspace.com",
        "location": "Houston, TX"
    },
    "welcomeMessage": "I can do stuff!",
    "skills": ["Coding with PHP, MySQL, Javascript, and HTML/CSS", "Using Git, WordPress, NetBeans, Visual Studio 2013, and Eclipse", "Familiarity with Laravel, Linux, GIMP, and cPanel"],
    "biopic": "images/fry.jpg"
            //
}

var education = {
    "schools": [{
            "name": "San Jacinto College",
            "location": "Houston, TX",
            "degree": "AA",
            "dates": "2013-2015",
            "url": "www.sanjac.edu",
            "major": "Business"
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
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }, {
            "title": "Numbers Into Words",
            "dates": "January 13, 2017 - January 15, 2017",
            "description": "A site that converts nearly any numeric string input to an english string.",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }]
}

//contact section
var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

// bio section
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.biopic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.website).replace("%contact%", "website"));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.website).replace("%contact%", "website"));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedPictureURL);

$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer));
    $(".work-employer:last").append(HTMLworkTitle.replace("%data%", work.jobs[job].title));
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    $(".work-entry:last").append("</div>");
}

for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
    for (image in projects.projects[project].images) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
    }
    $(".project-entry:last").append("</div>");
}

for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
    $(".education-school:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    $(".education-entry:last").append("</div>");
    
}