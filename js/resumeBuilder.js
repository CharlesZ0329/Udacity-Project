/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio={
    "name": "Yanchi Zhang",
    "role": "Front End Web Developer",
    "welcomeMessage" : "Hello everybody! I'm Yanchi!",
    "biopic": "images/fry.jpg",
    "contacts":{
        "mobile":"+86-180****2533",
        "email":"yanchi_zhang@163.com",
        "github":"CharlesZ0329",
        "facebook":"Charles Zhang",
        "location":"Liverpool, England, UK"
    },
    "skills":[
        "singing",
        "programming",
        "teaching"
    ]
};

var myName = HTMLheaderName.replace("%data%",bio.name);
var myRole = HTMLheaderRole.replace("%data%",bio.role);
var myPic = HTMLbioPic.replace("%data%",bio.biopic);

$("#header").prepend(myRole);

$("#header").prepend(myPic);

//name、location、degree、dates 和 url
var education = {
    "schools" :[
        {
            "name" : "Xi'an Jiaotong & Liverpool University",
            "location" : "Renai road, Suzhou, Jiang Su, China",
            "degree":"bachelor",
            "dates":"2014-2016",
            "url":"https://xjtlu.edu.cn",
            "majors":[
                "Java","algorithm","Information system"
            ]
        },
        {
            "name" : "University of Liverpool",
            "location" : "Liverpool, England",
            "degree":"bachelor",
            "dates":"2016-2018",
            "url":"https://uol.ac.uk",
            "majors":[
                "Software Engineering",
                "Advanced OO Programming",
                "Internet Principle",
                "Distributed System",
                "Scripting Language",
                "Mobile Computing(iOS)",
                "Game Theory",
                "Advanced Web Technologies",
                "Multi-agent System"
            ]
        }
    ],
    //title、school、dates 和 url 字符串。
    "onlineCourses":[
        {
            "title":"Front End Developer",
            "dates":"2016-2017",
            "url":"https://cn.udacity.com"
        },
        {
            "title":"Learning How to Learn: Powerful mental tools to help you master tough subjects by 美国加州大学圣地亚哥分校 on Coursera (Certificate earned at Sunday, December 4, 2016 4:03 PM GMT",
            "dates":"2016-2017",
            "url":"https://www.coursera.org/account/accomplishments/verify/3E8DD98M7T9A"
        }
    ]
};
/*
work 包含一个 jobs 数组。jobs 数组中的每个对象都应该包含 employer、title、location、工作 dates 和 description 字符串。
 */
var work ={
    "jobs":[
        {
            "employer":"海阔天高教育咨询公司",
            "title":"Tutor",
            "location":"Liverpool(UK)",
            "dates":"2016-2017",
            "description":"负责向学员讲授校内计算机课程：1，软件工程 2，数据库设计与开发 3，脚本语言 4，分布式系统"
        },
        {
            "employer":"易思汇EasyTransfer",
            "title":"Marketing Manager in UK",
            "location":"Beijing, and Liverpool(UK)",
            "dates":"2017-2018",
            "description":"Manager of UK market"
        }
    ]
};

/*
projects 包含一个 projects 数组。projects 数组中的每个对象都应该包含 title、dates 和 description 字符串以及 images 数组，其中包含项目图片的 URL 字符串。
 */
var projects ={
    "projects":[
        {
            "title":"Social Welfare (Voting Games) on an iPad (PS) - Honor Project in University of Liverpool",
            "dates":"2017-2018",
            "description":"In COMP310, the theory of Social Welfare involving agents is taught, whereby agents can express a preference (in the form of rankings) a voting mechanism then determines the final preference order (or winner) given all of the preferences. A number of voting mechanisms exist, each exhibiting different properties, some of which are taught in the Multi-Agent Systems module.\n\nThe aim of the project is to develop an iPad application that allows the user to load one of several data sets representing different preferences for different candidates (as well as allowing a user to specify their own preferences), and then determine the winning preferences using a variety of different voting games.\n\nThe resulting app could then be used in future as a teaching tool to support COMP310 for future students. This would be an ideal project for students wanting to study COMP327 (Mobile Computing) and COMP310 (Multi-Agent Systems)\n\nThis project involves an understanding of the iPad iOS API, and will involve development on an Apple Macintosh platform (such as one of the iMacs in the departmental lab, or on the students own mac). The iOS API will be available, as well as development tools and iPads. Assistance in developing iPhone applications can be obtained from the COMP327 slides and tutorials.",
            "images":[
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ]
};

function displaySkill(){
if(bio.skills.length>0){
    console.log(bio.name);
    var replaceHeaderName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").append(HTMLskillsStart);
    $("#header").prepend(replaceHeaderName);

    for (var i = 0; i <bio.skills.length; i++) {
        var formmattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formmattedSkill);
    }

}


}

function displayContact(){
var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var location = HTMLlocation.replace("%data%", bio.contacts.location);

$(topContacts).append(mobile);
$(topContacts).append(email);
$(topContacts).append(github);
$(topContacts).append(location);
}




function displayWork(){
    for(var x = 0; x< work.jobs.length; x++){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[x].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[x].title);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[x].location);
        var formattedDate = HTMLworkDates.replace("%data%",work.jobs[x].dates)
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[x].description);
        $(".work-entry:last").append(formattedEmployer+formattedTitle);
        console.log();
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDate);
        $(".work-entry:last").append(formattedDescription);
    }
}

function inName(){
    var name = bio.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

    return name[0]+ " "+ name[1];
}

displayContact();
displaySkill();
displayWork();
$('#main').append(internationalizeButton);

// var HTMLprojectStart = '<div class="project-entry"></div>';
// var HTMLprojectTitle = '<a href="#">%data%</a>';
// var HTMLprojectDates = '<div class="date-text">%data%</div>';
// var HTMLprojectDescription = '<p><br>%data%</p>';
// var HTMLprojectImage = '<img src="%data%">';
/*
var projects ={
    "projects":[
        {
            "title":"sampleTitle",
            "dates":"sampleDate",
            "description":"sampleDescription",
            "images":[
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ]
};
 */
projects.display = function(){
    for (var i = 0; i< projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

    }
}

projects.display();

$("#mapDiv").append(googleMap);