// Bootstrap dependencies
window.$ = window.jQuery = require('jquery');
window.Popper = require('popper.js');
require('bootstrap');
require ('../bootstrap/bootstrap.scss');

const schoolTemplate = require('../templates/schoolTemplate.html');
const projectsTemplate = require('../templates/projectsTemplate.html');
const workExperiencesTemplate = require('../templates/workExperiencesTemplate.html');
const skillsTemplate = require('../templates/skillsTemplate.html');

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
                            "Added real-time metrics and alerting to a legacy monolithic Java Spring application. Metrics tracked various email types that the company sends to users along their lifecycle: queuing, scheduling, sending, and failures.",
                            "Worked alongside a team of software engineers to develop features in new Dropwizard micro-service application for email templatization and sending."
                        ]
                    },
                    {
                        positionTitle: "Software Engineer I",
                        timeFrame: "May 2015 - May 2016",
                        description: [
                            "Worked closely with QA team to refactor the team's integration test suite by splitting long-running tests into parallelized pieces, consolidating duplicated code, and removing obsolete tests.",
                            "Implemented feature allow clients to send RSA encrypted email addresses in XML feeds, ensuring client's PII is not stored in plaintext on disk.",
                        ]
                    },
                    {
                        positionTitle: "Software Engineer II",
                        timeFrame: "May 2016 - November 2017",
                        description: [
                            "Working with Product Management and developers from other teams, I led development of a client-facing email metrics dashboard. Tracks email sends, deliveries, bounces, complaints, opens, link clicks, unsubscribes, and subsequent conversions.",
                            "Integrated new email sending application with Amazon SES, allowing the company to save 10x on email sending costs and significantly reducing the delays in integration testing.",
                            "Uncovered and fixed performance issues in the team's MongoDB cluster allowing us to continue using cheaper servers",
                            "Developed an Angular application to aid internal teams in debugging and modifying data through internal APIs",
                            "Aided in integrating a functional test framework for all of the team's applications. Then, helped with converting flaky integration tests to functional tests."
                        ]
                    },
                    {
                        positionTitle: "Senior Software Engineer",
                        timeFrame: "November 2017 - Current",
                        description: [
                            "Led development of feature allowing clients to select time of day to send emails.",
                            "Moved to a different team and led development of a React & Redux application for clients to configure product-wide settings",
                            "Migrated live application backend from Python Flask to Java Spring and integrated with a new client portal authentication.",
                            "Aided in building new service to respond to GDPR data reporting and data clean up requests."
                        ]
                    },
                ]
            }
        ]
    }
);

const personalProjectsHTML = projectsTemplate(
    {
        title: "Personal Projects",
        projectItems: [
            {
                projectName: 'Roast My Game',
                previewImage: "preview-roast-my-game.png",
                projectDescription: 'I created this site after having trouble receiving feedback for games that I was developing. Indie game developers can sign up, add their game, and give and get feedback.',
                details: ['There have been over 1000 users sign up, 400 games posted, and 1500 roasts made', 'Users earn points for listing their game and giving roasts', 'Users can upload game files for others to download and play', 'Browser integration testing performed with Codeception and Selenium' ],
                tools: [tools["laravel"], tools["mysql"], tools["elasticbeanstalk"], tools["rds"], tools["less"], tools["bootstrap"]],
                githubURL: "https://github.com/harshpatel991/Roast-My-Game",
                projectURL: "https://roastmygame.com/"
            },
            {
                projectName: 'News Tab',
                previewImage: "preview-news-tab.png",
                projectDescription: 'I created this RSS feed reader for Chrome\'s new tab page after I was unable to find an existing one that was quick and resource-light.',
                details: ['2x faster than Chrome\'s default new tab page', 'Users can configure their feed by language and topic', 'Shows user\'s most visited sites', 'Shows current weather and forecast', 'All settings synced to the user\'s Chrome profile', 'Users can upload their own theme image, stored in persistent LocalFileSystem'],
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
    }
);

const schoolProjectsHTML = projectsTemplate(
    {
        title: "University Projects",
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
                details: ['Daycare employees can check-in children', 'Daycare can notify parents via text and email when children are not present', 'Parents can verify child was dropped off'],
                tools: [tools["php"], tools["mysql"], tools["bootstrap"], tools["jquery"]],
                githubURL: "https://github.com/harshpatel991/CheckinChildren"
            },
            {
                projectName: 'City Clicker',
                previewImage: "preview-city-clickr.png",
                projectDescription: 'A 3D world building clicker game.',
                details: [ 'Money will collect even when the game isn\'t running', 'Each building can be upgraded with 3+ items and 3+ employee types', 'Cars and pedestrians stop for each other'],
                tools: [tools["unity"], tools["unityscript"], tools["blender"]],
                githubURL: "https://github.com/harshpatel991/CityClicker/"
            }
        ]
    }

);

const skillsHTML = skillsTemplate({
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
});

document.getElementById('school-container').innerHTML = schoolHTML;
document.getElementById('work-experiences-container').innerHTML = workExperienceHTML;
document.getElementById('personal-projects-container').innerHTML = personalProjectsHTML;
document.getElementById('school-projects-container').innerHTML = schoolProjectsHTML;
document.getElementById('skills-container').innerHTML = skillsHTML;
