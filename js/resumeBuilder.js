// $("#main").append("Robert Roy");
// [string].replace([old],[new]);

var bio = {
    "name" : "Robert Roy",
    "role" : "Front End Web Developer",
    "pictureURL" : "images/fry.jpg",
    "welcomeMessage" : "Hey, there!",
    "skills" : ["Coding with PHP, MySQL, Javascript, and HTML/CSS", "Using Git, WordPress, NetBeans, Visual Studio 2013, and Eclipse", "Familiarity with Laravel, Linux, GIMP, and cPanel"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedSkillArray = [];
for(var i = 0; i < bio.skills.length; i++){
    formattedSkillArray.push(HTMLskills.replace("%data", bio.skills[i]));
}
for(var i = 0; i < bio.skills.length; i++){
    $("#header").append(formattedSkillArray[i]);
}
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedPictureURL);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
