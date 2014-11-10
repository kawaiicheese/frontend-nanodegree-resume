var bio = {
    "name" : "Joseph Lu",
    "role": "Engineer",
    "contacts": {
        "phone": "905-847-8392",
        "email": "josephlu_116@hotmail.com",
        "github": "kawaiicheese",
        "twitter": "meganecheese",
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
            "city": "OAKVILLE",
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
            "url" : "https://www.udacity.com/nanodegrees"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer" : "BOB's BUILDERS",
            "title" : "carpenter",
            "dates" : "January 234BC - Present",
            "location" : "SAN DIEGO",
            "description" : "Can he build it?\n\
yes he can!"
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
                "http://jsonlint.com/"
            ]
        }
    ]
};

if (bio.skills.length > 0) {
    
    $("#header").append(HTMLskillsStart);
       
    for (x = 0; x < bio.skills.length; x++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[x]);
        $("#skills").append(formattedSkill);
    }
}
function urMOM() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", formattedMobile + formattedEmail + formattedGithub + formattedLocation);
   
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
}
function displayWork() {
    for (job in work.jobs) {
        $("$workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedworkthings = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

        $("#.work-entry:last").append(formattedworkthings);

    }
}

//displayWork();

$(document).click(function(loc) {
    var x = loc.clientX;
    var y = loc.clientY;
    
    logClicks(x,y);

});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[name.length-1] = name[name.length-1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    
    return name[0] + " " + name[1];
}

console.log(inName(bio.name));
        