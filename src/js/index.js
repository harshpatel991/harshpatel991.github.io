// Bootstrap dependencies
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');
require ('../bootstrap/bootstrap.scss');
const Prism = require('prismjs');
require('prismjs/components/index.js')(['json']);

const codeTemplate = require('../templates/code/template.html');
const prettySchoolTemplate = require('../templates/pretty/schoolTemplate.html');
const prettyProjectsTemplate = require('../templates/pretty/projectsTemplate.html');
const prettyWorkExperiencesTemplate = require('../templates/pretty/workExperiencesTemplate.html');
const prettySkillsTemplate = require('../templates/pretty/skillsTemplate.html');

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
    unityscript: { icon: "icon-unity", displayName: "UnityScript"},
    elasticbeanstalk: { icon: "devicon-amazonwebservices-plain", displayName: "AWS Elastic Beanstalk"},
    rds: { icon: "devicon-amazonwebservices-plain", displayName: "AWS RDS"},
};

const schoolData =
{
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
};

const workExperienceData =
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
                        "Collaborated with a group of software engineers to develop shape drawing feature for virtual instrumentation software. Written in C# using Windows Presentation Foundation."
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
                        "Added real-time metrics and alerting to a legacy monolithic Java Spring application. Metrics tracked various emails the company sends along their lifecycle: queuing, scheduling, sending, and failures.",
                    ]
                },
                {
                    positionTitle: "Software Engineer I",
                    timeFrame: "May 2015 - May 2016",
                    description: [
                        "Ensured client PII data was not stored in plaintext by implementing feature for clients to send RSA encrypted email addresses in XML feeds.",
                        "Worked closely with QA team to refactor the team's Java integration test suite."
                    ]
                },
                {
                    positionTitle: "Software Engineer II",
                    timeFrame: "May 2016 - November 2017",
                    description: [
                        "Reduced email sending costs 10x and significantly reduced delays in testing by integrating Java micro-service application with Amazon SES.",
                        "Led development of a client-facing email metrics dashboard tracking email sends, deliveries, bounces, complaints, opens, link clicks, unsubscribes, and subsequent conversions.",
                        "Reduced peak CPU load 10-35% by identifying and implementing fixes for performance issues in the team's MongoDB clusters.",
                        "Reduced the number of troubleshooting questions asked by support teams by developing Angular application using internal APIs.",
                        "Collaborated in integrating a functional test framework in Dropwizard applications. Shaved hours off deployment preparation by replacing flaky and long-running integration tests with quick functional tests."
                    ]
                },
                {
                    positionTitle: "Senior Software Engineer",
                    timeFrame: "November 2017 - Current",
                    description: [
                        "Increased email engagement rate on average 10% by developing feature allowing clients to select time of day to send emails.",
                        "Led development of a React & Redux application for clients to configure product-wide settings.",
                        "Migrated live application backend from Python Flask to Java Spring and integrated with a new client portal authentication.",
                        "Collaborated in building new micro-service to respond to the team's GDPR data reporting and data clean up requests."
                    ]
                },
            ]
        }
    ]
};

const personalProjectsData =
{
    projectItems: [
        {
            projectName: 'Roast My Game',
            previewImage: "preview-roast-my-game.png",
            projectDescription: 'I created this site after having trouble receiving feedback for games that I was developing. Game developers can sign up, add their game, and give and get feedback.',
            details: ['There have been over 1000 users sign up, 400 games posted, and 1500 roasts made', 'Users earn points for listing their game and giving roasts', 'Users can upload game files for others to download and play', 'SSL Certificate with Lets Encrypt and certbot' ],
            tools: [tools["laravel"], tools["mysql"], tools["elasticbeanstalk"], tools["rds"], tools["less"], tools["bootstrap"]],
            githubURL: "https://github.com/harshpatel991/Roast-My-Game",
            projectURL: "https://roastmygame.com/"
        },
        {
            projectName: 'News Tab',
            previewImage: "preview-news-tab.png",
            projectDescription: 'I created this RSS feed reader for Chrome\'s new tab page after I was unable to find an existing one that was quick and resource-light.',
            details: ['2x faster than Chrome\'s default new tab page', '500 active users', 'Users can configure their feed by language and topic', 'Shows user\'s most visited sites', 'Shows current weather and forecast', 'All settings synced to the user\'s Chrome profile', 'Users can upload their own theme image, stored in persistent LocalFileSystem'],
            tools: [tools["javascript"], tools["bootstrap"], tools["jquery"]],
            githubURL: "https://github.com/harshpatel991/News-Tab",
            projectURL: "https://chrome.google.com/webstore/detail/news-tab-new-tab-page-rep/cdpnmcehklcfepflojdklfggahnaolid"
        },
        {
            projectName: 'Topic Loop',
            previewImage: "preview-topic-loop.png",
            projectDescription: 'This was my first project to learn the Laravel framework. It allows users to sign up and write articles.',
            details: ['Users can create rich articles using a WYSIWYG editor combined with custom sections for images, videos, list sections, and sources', ' Ad revenue earned on articles is shared with the author using Google Adsense'],
            tools: [tools["laravel"], tools["mysql"], tools["elasticbeanstalk"], tools["rds"], tools["less"], tools["bootstrap"], tools["jquery"]],
            githubURL: "https://github.com/harshpatel991/nupicture"
        },
        {
            projectName: 'Tuesday Swap',
            previewImage: "preview-tuesday-swap.png",
            projectDescription: 'I created this site after I noticed that many users wanted to swap codes earned through the T-Mobile Tuesdays rewards program. Many users resorted to exchanging codes over messaging on social media but ended up cheated by bad actors.',
            details: ['Reddit OAuth verification to prevent fake account sign-ups', 'Users can post their codes and browse through codes that have already been listed by other users', 'Automatically swap codes when a match is found', 'API testing performed with Mocha' ],
            projectSecondaryDescription: "Currently in progress",
            tools: [tools["react"], tools["node"], tools["postgres"], tools["sass"], tools["bootstrap"]],
            githubURL: "https://github.com/harshpatel991/tuesday-swap"
        }
    ]
};

const schoolProjectsData =
{
    projectItems: [
        {
            projectName: 'Fandom',
            previewImage: "preview-fandom.png",
            projectDescription: 'A website for users to discuss episodes from TV shows.',
            details: ['Threaded comments with +/- voting', 'Show, season, and episode data loaded from TheMovieDB'],
            tools: [tools["angular"], tools["node"], tools["mongodb"]],
            githubURL: "https://github.com/harshpatel991/fandom-client"
        },
        {
            projectName: 'Histogr',
            previewImage: "preview-histogr.png",
            projectDescription: 'A Chrome extension for visualizing the websites that you visit.',
            details: ['Analyzes how you travel from site to site', 'View daily and hourly aggregation of users browsing', 'Block distracting websites, enabled/disabled by time of day'],
            tools: [tools["javascript"], tools["d3"], tools["jquery"]],
            githubURL: "https://github.com/harshpatel991/histogr"
        },
        {
            projectName: 'Checkin Children',
            previewImage: "preview-checkin-children.png",
            projectDescription: 'A multi-tenant SaaS for daycare managers, employees, and customers.',
            details: ['Full management of a daycare center including owners, managers, employees, parents, and children', 'Daycare employees can check-in children', 'Daycare can notify parents via text and email when children are not present', 'Parents can verify child was dropped off'],
            tools: [tools["php"], tools["mysql"], tools["bootstrap"], tools["jquery"]],
            githubURL: "https://github.com/harshpatel991/CheckinChildren"
        },
        {
            projectName: 'City Clicker',
            previewImage: "preview-city-clickr.png",
            projectDescription: 'A 3D world building clicker game.',
            details: ['Time flows in the game even when the game isn\'t running', 'Each building can be upgraded with 3+ items and 3+ employee types', 'Cars and pedestrians will intelligently wait for each other when approaching an intersection'],
            tools: [tools["unity"], tools["unityscript"], tools["blender"]],
            githubURL: "https://github.com/harshpatel991/CityClicker/"
        }
    ]
};

const skillsData =
{
    skillGroups: [
        {
            name: "Frameworks",
            skills: [
                'Laravel',
                'Dropwizard',
                'React & Redux'
            ]
        },
        {
            name: "Languages",
            skills: [
                'Java',
                'Javascript',
                'Bash',
                'PHP',
                'MySQL',
                'MongoDB'
            ]
        },
        {
            name: "Tools",
            skills: [
                'Git & Github',
                'Webpack',
                'Grunt',
                'Jenkins'
            ]
        },
        {
            name: "Misc",
            skills: [
                'Linux command line',
                'Chrome extensions',
                'Lets Encrypt SSL Certificates',
                'Node',
                'Bootstrap',
                'HTML',
                'CSS'
            ]
        }
    ]
};

let pretty = true;
$('#toggle-theme').click(function() {
    pretty = !pretty;
    render();
});

var body = $('body');
var downloadResumeButton  =$('#download-resume');
var schoolContainer = $('#school-container');
var workExperiencesContainer = $('#work-experiences-container');
var personalProjectsContainer = $('#personal-projects-container');
var schoolProjectsContainer = $('#school-projects-container');
var skillsContainer = $('#skills-container');

function render() {
    if (pretty) {
        body.fadeOut(200,function(){
            body.removeClass('code-theme');
            body.addClass('pretty-theme');
            downloadResumeButton.removeClass('btn-danger');
            downloadResumeButton.addClass('btn-primary');

            schoolContainer.html(prettySchoolTemplate(schoolData));
            workExperiencesContainer.html(prettyWorkExperiencesTemplate(workExperienceData));
            personalProjectsContainer.html(prettyProjectsTemplate(personalProjectsData));
            schoolProjectsContainer.html(prettyProjectsTemplate(schoolProjectsData));
            skillsContainer.html(prettySkillsTemplate(skillsData));

            body.fadeIn(200);
        });
    } else {
        body.fadeOut(200,function() {
            body.addClass('code-theme');
            body.removeClass('pretty-theme');

            downloadResumeButton.removeClass('btn-primary');
            downloadResumeButton.addClass('btn-danger');

            schoolContainer.html(codeTemplate({this: JSON.stringify(schoolData, null, 2)}));
            workExperiencesContainer.html(codeTemplate({this: JSON.stringify(workExperienceData, null, 2)}));
            personalProjectsContainer.html(codeTemplate({this: JSON.stringify(personalProjectsData, null, 2)}));
            schoolProjectsContainer.html(codeTemplate({this: JSON.stringify(schoolProjectsData, null, 2)}));
            skillsContainer.html(codeTemplate({this: JSON.stringify(skillsData, null, 2)}));

            Prism.highlightAll();
            body.fadeIn(200);
        });
    }
}

render();

//now that rendering is complete, show the entire body
body.show(0);