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
    "biopic": "images/fry.jpg",
    "display": function() {
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
        for (i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }
};

var education = {
    "schools": [{
        "name": "San Jacinto College",
        "location": "Houston, TX",
        "degree": "AA",
        "dates": "2013 - 2015",
        "url": "www.sanjac.edu",
        "major": "Business"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity.com",
        "dates": "2017 - Now",
        "url": "www.udacity.com"

    }],
    "display": function() {
        for (i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
            $(".education-school:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
            $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
            $(".education-entry:last").append(HTMLdivEnd);
        }
        for (i = 0; i < education.onlineCourses.length; i++) {
            if (!i) {
                $("#education").append(HTMLonlineClasses);
            }
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
            $(".online-title:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
            $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
            $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
            $(".education-entry:last").append(HTMLdivEnd);

        }
    }
};

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
        "dates": "2017 - Now",
        "description": "Configured, installed, and supported Point of Sale systems."
    }],
    "display": function() {
        for (i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", this.jobs[i].employer));
            $(".work-employer:last").append(HTMLworkTitle.replace("%data%", this.jobs[i].title));
            $(".work-entry:last").append(HTMLworkDates.replace("%data%", this.jobs[i].dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%", this.jobs[i].location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%", this.jobs[i].description));
            $(".work-entry:last").append(HTMLdivEnd);
        }

    }
};

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
    }],
    "display": function() {
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
            for (a = 0; a < projects.projects[i].images.length; a++) {
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[a]));
            }
            $(".project-entry:last").append(HTMLdivEnd);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();