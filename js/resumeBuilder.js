var bio = {
    "name" : "Joseph Lu",
    "role": "Student",
    "contacts": {
        "phone": "905-847-8392",
        "email": "josephlu_116@hotmail.com",
        "github": "kawaiicheese",
        "twitter": "meganecheese",
        "blog": "no blog",
        "location": "Oakville"
    },
    
    "picture_URL": "http://i.gyazo.com/1a6c0eda40465329f82a49f4b41dfb2f.png",
    "welcomeMessage": "hello moto",
    "skills": [
        "greatness",
        "coder", 
        "NOT BRONZE"
    ]
};

var education = {
    "schools" : [
        {
            "name": "STA",
            "location": "OAKVILLE",
            "degree" : "STA high school graduate",
            "majors": [
                "none"
            ],
            "minor": [
                "none"
            ],
            "graduation": "2015",
            "online_info": "http://sta.hcdsb.org/"
        }
    ],
    
    "online_courses" : [
        {
            "title" : "Javascript Basics",
            "school" : "Udacity Nanodegree",
            "dates" : "2014",
            "url" : "https://www.udacity.com/course/ud804",
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer" : "none",
            "title" : "none",
            "dates" : "none",
            "location" : "Ontario",
            "description" : "none"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Sudoku",
            "dates" : "2015",
            "description" : "describe the sudoku",
            "images" : [
                "http://i.gyazo.com/8fbb83bfc0d414b3268fb24bd3a33989.png"
            ]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContactGeneric = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedBlog + formattedLocation;
   
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture_URL);
    
    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedContactGeneric);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(formattedbioPic);
    
    if (bio.skills.length > 0) {
    
        $("#header").append(HTMLskillsStart);
       
        for (var x = 0; x < bio.skills.length; x++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
            $("#skills").append(formattedSkill);
        }
        
    }
    
    $("#footerContacts").append(formattedContactGeneric);
};


work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedworkthings = formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedworkthings);

    }
};


projects.display = function() {
	for (var Project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[Project].title);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[Project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[Project].description);
                
		$(".project-entry:last").append(formattedTitle + formattedDate + formattedDescription);
                
                var image = 0;
                do {
                    console.log("dfas");
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[Project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                    image++;
                } while (image < projects.projects[Project].images.length)
                    

	}
};

education.display = function() {
    
    for (var Educations in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[Educations].name).replace("#", education.schools[Educations].online_info);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[Educations].degree);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[Educations].gradation);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[Educations].location);

            $(".education-entry:last").append(formattedName + formattedDegree + formattedDate + formattedLocation);

            var major = 0;
            do {
                console.log("dfas");
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[Educations].majors[major]);
                $(".education-entry:last").append(formattedMajor);
                major++;
            } while (major < education.schools[Educations].majors.length)



    }

    $(".education-entry:last").append(HTMLonlineClasses);		
    for (var course in education.online_courses) {
            var formattedTitle = HTMLonlineTitle.replace(/%data%/g, education.online_courses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.online_courses[course].school).replace("#", education.online_courses[course].url);
            var formattedDate = HTMLonlineDates.replace("%data%", education.online_courses[course].dates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.online_courses[course].url);            
            $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + formattedURL)
    }
		
};

bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) {
    var x = loc.clientX;
    var y = loc.clientY;
    
    logClicks(x,y);

});

function inName() {
    var name = bio.name.trim().split(" ");
    console.log(name);
    name[name.length-1] = name[name.length-1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    
    return name[0] + " " + name[1];
}

$("#main").append("<center>" + internationalizeButton + "</center>"); 
        
$("#mapDiv").append(googleMap);