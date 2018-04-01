// Bootstrap dependencies
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');
require ('../../bootstrap/bootstrap.scss');

const schoolTemplate = require('../templates/schoolTemplate.html');
const projectsTemplate = require('../templates/projectsTemplate.html');
const workExperiencesTemplate = require('../templates/workExperiencesTemplate.html');
const tools = {
    laravel: { icon: "devicon-laravel-plain-wordmark", displayName: "Laravel"},
    unity: { icon: "icon-unity", displayName: "Unity3D"},
    mysql: { icon: "devicon-mysql-plain-wordmark", displayName: "MySQL"},
    postgres: { icon: "devicon-postgresql-plain", displayName: "Postgres"},
    mongodb: { icon: "devicon-mongodb-plain-wordmark", displayName: "MongoDB"},
    react: { icon: "devicon-react-original-wordmark", displayName: "React"},
    angular: { icon: "devicon-angularjs-plain", displayName: "Angular"},
    node: { icon: "devicon-nodejs-plain-wordmark", displayName: "Node"},
    javascript: { icon: "devicon-javascript-plain", displayName: "Javascript"},
    php: { icon: "devicon-php-plain", displayName: "PHP"},
    bootstrap: { icon: "devicon-bootstrap-plain-wordmark", displayName: "Bootstrap"},
    jquery: { icon: "devicon-jquery-plain-wordmark", displayName: "jQuery"},
    sass: { icon: "devicon-sass-original", displayName: "SASS"},
    less: { icon: "devicon-less-plain-wordmark", displayName: "LESS"},
    d3: { icon: "devicon-d3js-plain", displayName: "D3"},
    blender: { icon: "icon-blender", displayName: "Blender"},
    unityscript: { icon: "icon-unity", displayName: "UnityScript"}
};
//TODO:add AWS elasticbeanstalk
//TODO: add AWS RDS

const schoolHTML = schoolTemplate({
    schoolName: "University of Illinois at Urbana-Champaign",
    logoURL: "logo-uiuc-nohue.png",
    logoHoverURL: "logo-uiuc.png",
    timeFrame: "May 2011 - May 2015",
    description: "Bachelor of Science in Computer Science",
    relevantCoursework: {
        columnOne: [
            "Distributed Systems",
            "Introduction to Data Mining",
            "Cloud Computing",
            "Computer Security I & II"
        ],
        columnTwo: [
            "Database Systems",
            "User Interface Design",
            "Art and Science of Web Programming"
        ]
    }
});

const workExperienceHTML = workExperiencesTemplate(
    {
        workExperiences: [
            {
                companyName: "National Instruments",
                logoURL: "logo-national-instruments-nohue.png",
                logoHoverURL: "logo-national-instruments.png",
                positions: [
                    {
                        positionTitle: "Software Engineer Intern",
                        timeFrame: "Summer 2013",
                        description: [
                            "Collaborated with a group of software engineers to develop new feature for virtual instrumentation software. Written in C# using Windows Presentation Foundation."
                        ]
                    }
                ]
            },
            {
                companyName: "Bazaarvoice",
                logoURL: "logo-bazaarvoice-nohue.png",
                logoHoverURL: "logo-bazaarvoice.png",
                positions: [
                    {
                        positionTitle: "Software Engineer Intern",
                        timeFrame: "Summer 2014",
                        description: [
                            "Added real-time metrics tracking various aspects of email sending in a monolithic legacy Java application.",
                            "Developed features in Service-Oriented-Architecture Java applications alongside a team of software engineers."
                        ]
                    },
                    {
                        positionTitle: "Software Engineer I",
                        timeFrame: "May 2015 - May 2016",
                        description: [
                            "Developed and shipped features in Dropwizard Service-Oriented-Architecture applications alongside team members.",
                            "Something about allowing RSA encryption of items sent by clients" //TODO
                        ]
                    },
                    {
                        positionTitle: "Software Engineer II",
                        timeFrame: "May 2016 - November 2017",
                        description: [
                            "Working with Product Management and developers from other teams, I led development of client-facing metrics features.",
                            "Uncovered and fixed performance issues in Java applications and MongoDB cluster.",
                            "Developed an Angular 1.0 application aiding internal teams in viewing and modifying data exposed through APIs",
                            "Aided in integrating a functional test framework for Java applications."
                        ]
                    },
                    {
                        positionTitle: "Senior Software Engineer",
                        timeFrame: "November 2017 - Current",
                        description: [
                            "Developed a React & Redux application for clients to configure settings",
                            "Migrated a live legacy Python/Jade application to Java/Handlebars",
                            "Added JWT authentication to an Backbone application."
                        ]
                    },
                ]
            }
        ]
    }
);

//TODO: change font
//TODO: add Skills
// Frameworks
//// Laravel
//// Dropwizard
//// Spring
//// React
//// Node
//// React & Redux

// Languages
//// Java
//// Javascript
//// Bash
//// PHP
//// MySQL
//// MongoDB
//// Sass

// Tools
//// Git & Github
//// Grunt
//// Jenkins

// Misc
//// Linux command line
//// Chrome extensions
//// Bootstrap
//// HTML
//// CSS


const projectsHTML = projectsTemplate(
    {
        projects: [
            {
                title: "Personal Projects",
                projectItems: [
                    {
                        projectName: 'Roast My Game',
                        previewImage: "preview-roast-my-game.png",
                        projectDescription: 'I created this site after having trouble receiving feedback for games that I was developing. Indie game developers can sign up, add their game and give and get feedback.',
                        details: ['There have been over 1000 users sign up, 400 games posted, and 1500 roasts made.', 'Users earn points for listing their game and giving roasts.', 'Users can upload game files for others to download and play', ],
                        tools: [tools["laravel"], tools["mysql"], tools["less"], tools["bootstrap"], tools["jquery"]],
                        githubURL: "https://github.com/harshpatel991/clickr",
                        projectURL: "https://roastmygame.com/"
                    },
                    {
                        projectName: 'News Tab',
                        previewImage: "preview-news-tab.png",
                        projectDescription: 'I created this RSS feed reader for Chrome\'s new tab page after not being able to find an existing one that was quick and resource-light.',
                        details: ['2x faster than Chrome\'s default new tab page.', 'Users can configure their feed by language and topic', 'Shows most visited sites', 'Shows current weather and forecast', 'Users can upload their own theme image'],
                        tools: [tools["javascript"], tools["bootstrap"], tools["jquery"]],
                        githubURL: "https://github.com/harshpatel991/rTab",
                        projectURL: "https://chrome.google.com/webstore/detail/news-tab-new-tab-page-rep/cdpnmcehklcfepflojdklfggahnaolid"
                    },
                    {
                        projectName: 'Topic Loop',
                        previewImage: "preview-topic-loop.png",
                        projectDescription: 'This site allows users to write articles and earn revenue generated by their content through Google Adsense. ',
                        tools: [tools["laravel"], tools["mysql"], tools["less"], tools["bootstrap"], tools["jquery"]],
                        githubURL: "https://github.com/harshpatel991/nupicture"
                    },
                    {
                        projectName: 'Tuesday Swap',
                        previewImage: "preview-tuesday-swap.png",
                        projectDescription: 'I created this site after I noticed that many users wanted to swap codes earned through the T-Mobile Tuesdays rewards program. Many users resorted to exchanging codes over messaging on social media but ended up cheated by bad actors.',
                        details: ['Reddit OAuth verification to prevent fake account sign-ups', 'Users can post their codes and browse through codes that have already been listed by other users', 'Automatically swapped codes when a match was found.' ],
                        projectSecondaryDescription: "Currently in progress",
                        tools: [tools["react"], tools["node"], tools["postgres"], tools["sass"], tools["bootstrap"]],
                        githubURL: "https://github.com/harshpatel991/tuesday-swap"
                    }
                ]
            },
            {
                title: "University Projects",
                projectItems: [
                    {
                        projectName: 'Fandom',
                        previewImage: "preview-fandom.png",
                        projectDescription: 'A website for users to discuss TV shows.',
                        details: ['Threaded comments with +/- voting', ''],
                        tools: [tools["angular"], tools["node"], tools["mongodb"]],
                        githubURL: "https://github.com/harshpatel991/fandom-client"
                    },
                    {
                        projectName: 'Histogr',
                        previewImage: "preview-histogr.png",
                        projectDescription: 'A Chrome extension for visualizing the websites that you visit.',
                        details: ['Analyzes how you travel from site to site', 'View daily and hourly aggregation of users browsing', 'Block sites to prevent user from visiting sites that are distracting', 'Blocked sites can be automatically enabled/disabled by time of day'],
                        tools: [tools["javascript"], tools["d3"], tools["jquery"]],
                        githubURL: "https://github.com/harshpatel991/histogr"
                    },
                    {
                        projectName: 'Checkin Children',
                        previewImage: "preview-checkin-children.png",
                        projectDescription: 'A multi-tenant SaaS for daycare managers, employees, and customers.',
                        details: ['Daycare employees can check-in children', 'Daycare can notify parents via text and email when children are not present', 'Parents can verify child was dropped off'],
                        tools: [tools["php"], tools["mysql"], tools["bootstrap"], tools["jquery"]],
                        githubURL: "https://github.com/harshpatel991/CheckinChildren"
                    },
                    {
                        projectName: 'City Clickr',
                        previewImage: "preview-city-clickr.png",
                        projectDescription: 'A 3D world building clicker game.',
                        details: [ 'Money will collect even when the game isn\'t running', 'Each building can be upgraded with 3+ items and 3+ employee types', 'Cars and pedestrians stop for each other'],
                        tools: [tools["unity"], tools["unityscript"], tools["blender"]],
                        githubURL: "https://github.com/harshpatel991/CityClicker/"
                    }
                ]
            }
        ]
    }
);

document.getElementById('school-container').innerHTML = schoolHTML;
document.getElementById('work-experiences-container').innerHTML = workExperienceHTML;
document.getElementById('projects-container').innerHTML = projectsHTML;
