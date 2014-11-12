var bio = {
    "name" : "Joseph Lu",
    "role": "Engineer",
    "contacts": {
        "phone": "905-847-8392",
        "email": "josephlu_116@hotmail.com",
        "github": "kawaiicheese",
        "twitter": "meganecheese",
        "blog": "fhjdksal",
        "location": "CANADA"
    },
    
    "picture_URL": "http://freefunnydogpictures.com/wp-content/uploads/2014/05/picture_1400053660.jpg",
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
                "CompSci",
                "Math"
            ],
            "minor": [
                "physical sciences",
                "Accounting"
            ],
            "graduation": "1998",
            "online info": "https://www.udacity.com/nanodegrees"
        }
    ],
    
    "online courses" : [
        {
            "title" : "funwithJoe",
            "school" : "JOSEKDP",
            "dates" : 4356,
            "url" : "http://freefunnydogpictures.com/wp-content/uploads/2014/05/picture_1400053660.jpg"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer" : "BOB's BUILDERS",
            "title" : "carpenter",
            "dates" : "January 234BC - Present",
            "location" : "Toronto, Ontario, Canada",
            "description" : "Can he build it? YES HE CAN!"
        },
        {
            "employer" : "SANTA's HELPER",
            "title" : "elf",
            "dates" : "234 - Future",
            "location" : "NORTH POLE",
            "description" : "HO HO HO ! MERRY CHRISTMAS"
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "JOSEPH's HAIRDO",
            "dates" : "2031",
            "description" : "IM A DONUT",
            "images" : [
                "http://freedogpics.com/wp-content/uploads/2014/08/pictures_1407299643.jpg"
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
       
        for (x = 0; x < bio.skills.length; x++) {
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

            var formattedName = HTMLschoolName.replace("%data%", education.schools[Educations].name);
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
    for (var course in education.onlineCourses) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDate + formattedURL);
    }
		
}

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

$("#main").append(internationalizeButton); 
        
//$("#mapDiv").append(googleMap);