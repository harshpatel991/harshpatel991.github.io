import './bootstrap/bootstrap';
import './bootstrap/bootstrap.scss';

const schoolTemplate = require('./templates/schoolTemplate.html');
const projectsTemplate = require('./templates/projectsTemplate.html');
const workExperiencesTemplate = require('./templates/workExperiencesTemplate.html');
const techLogoIconsByName = {
    laravel: "devicon-laravel-plain-wordmark",
    unity: "icon-unity",
    mysql: "devicon-mysql-plain-wordmark",
    postgres: "devicon-postgresql-plain",
    mongodb: "devicon-mongodb-plain-wordmark",
    react: "devicon-react-original-wordmark",
    angular: "devicon-angularjs-plain",
    node: "devicon-nodejs-plain-wordmark",
    javascript: "devicon-javascript-plain",
    php: "devicon-php-plain",
    bootstrap: "devicon-bootstrap-plain-wordmark",
    jquery: "devicon-jquery-plain-wordmark",
    sass: "devicon-sass-original",
    less: "devicon-less-plain-wordmark",
    d3: "devicon-d3js-plain",
    blender: "icon-blender"
};

const schoolHTML = schoolTemplate({
    schoolName: "University of Illinois at Urbana-Champaign",
    logoURL: "logo-uiuc-nohue.png",
    logoHoverURL: "logo-uiuc.png",
    timeFrame: "May 2011 - May 2015",
    description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non posuere dolor, eget facilisis diam. Praesent ut lacus at erat ullamcorper luctus sed ut metus. ",
        "Etiam aliquet, leo vitae porta hendrerit, ex ipsum congue nibh, ut placerat sem libero eget magna. Ut pellentesque sem dui, nec convallis augue sagittis vel."
    ]
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
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non posuere dolor, eget facilisis diam. Praesent ut lacus at erat ullamcorper luctus sed ut metus. ",
                            "Etiam aliquet, leo vitae porta hendrerit, ex ipsum congue nibh, ut placerat sem libero eget magna. Ut pellentesque sem dui, nec convallis augue sagittis vel.",
                            "Cras sed orci sit amet tortor condimentum egestas. Sed vehicula mollis eros, ut faucibus erat. Praesent in blandit erat, quis mattis magna. Etiam fringilla metus sit amet mollis pulvinar."
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
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non posuere dolor, eget facilisis diam. Praesent ut lacus at erat ullamcorper luctus sed ut metus. ",
                        ]
                    },
                    {
                        positionTitle: "Software Engineer I",
                        timeFrame: "May 2014 - May 2015",
                        description: [
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non posuere dolor, eget facilisis diam. Praesent ut lacus at erat ullamcorper luctus sed ut metus. ",
                            "Cras sed orci sit amet tortor condimentum egestas. Sed vehicula mollis eros, ut faucibus erat. Praesent in blandit erat, quis mattis magna. Etiam fringilla metus sit amet mollis pulvinar."
                        ]
                    },
                    {
                        positionTitle: "Software Engineer II",
                        timeFrame: "May 2015 - Current",
                        description: [
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non posuere dolor, eget facilisis diam. Praesent ut lacus at erat ullamcorper luctus sed ut metus. ",
                            "Etiam aliquet, leo vitae porta hendrerit, ex ipsum congue nibh, ut placerat sem libero eget magna. Ut pellentesque sem dui, nec convallis augue sagittis vel.",
                        ]
                    },
                ]
            }
        ]
    }
);

const projectsHTML = projectsTemplate(
    {
        projects: [
            {
                title: "Personal Projects",
                projectItems: [
                    {
                        projectName: 'Roast My Game',
                        previewImage: "preview-roast-my-game.png",
                        projectDescription: 'A website for indie game developers to give and get feedback.',
                        tools: [techLogoIconsByName["laravel"], techLogoIconsByName["mysql"], techLogoIconsByName["less"], techLogoIconsByName["bootstrap"], techLogoIconsByName["jquery"]],
                        githubURL: "https://github.com/harshpatel991/clickr",
                        projectURL: "https://roastmygame.com/"
                    },
                    {
                        projectName: 'News Tab',
                        previewImage: "preview-news-tab.png",
                        projectDescription: 'A RSS feed reader for Chrome\'s new tab page.',
                        tools: [techLogoIconsByName["javascript"], techLogoIconsByName["bootstrap"], techLogoIconsByName["jquery"]],
                        githubURL: "https://github.com/harshpatel991/rTab",
                        projectURL: "https://chrome.google.com/webstore/detail/news-tab-new-tab-page-rep/cdpnmcehklcfepflojdklfggahnaolid"
                    },
                    {
                        projectName: 'Topic Loop',
                        previewImage: "preview-topic-loop.png",
                        projectDescription: 'A site where users can write articles and earn revenue generated by their content.',
                        tools: [techLogoIconsByName["laravel"], techLogoIconsByName["mysql"], techLogoIconsByName["less"], techLogoIconsByName["bootstrap"], techLogoIconsByName["jquery"]],
                        githubURL: "https://github.com/harshpatel991/nupicture"
                    },
                    {
                        projectName: 'Tuesday Swap',
                        previewImage: "preview-tuesday-swap.png",
                        projectDescription: 'A website for users of T-Mobile Tuesdays to swap codes.',
                        projectSecondaryDescription: "Currently in progress",
                        tools: [techLogoIconsByName["react"], techLogoIconsByName["node"], techLogoIconsByName["postgres"], techLogoIconsByName["sass"], techLogoIconsByName["bootstrap"]],
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
                        projectDescription: 'A website for users to discuss TV shows. Features threaded and upvote/downvote comments section.',
                        tools: [techLogoIconsByName["angular"], techLogoIconsByName["node"], techLogoIconsByName["mongodb"]],
                        githubURL: "https://github.com/harshpatel991/fandom-client"
                    },
                    {
                        projectName: 'Histogr',
                        previewImage: "preview-histogr.png",
                        projectDescription: 'A chrome extension for visualizing browsing history and blocking websites.',
                        tools: [techLogoIconsByName["javascript"], techLogoIconsByName["d3"], techLogoIconsByName["jquery"]],
                        githubURL: "https://github.com/harshpatel991/histogr"
                    },
                    {
                        projectName: 'Checkin Children',
                        previewImage: "preview-checkin-children.png",
                        projectDescription: 'A multi-tenant SaaS for daycare centers to check in students and notify parents via text and email',
                        tools: [techLogoIconsByName["php"], techLogoIconsByName["mysql"], techLogoIconsByName["bootstrap"], techLogoIconsByName["jquery"]],
                        githubURL: "https://github.com/harshpatel991/CheckinChildren"
                    },
                    {
                        projectName: 'City Clickr',
                        previewImage: "preview-city-clickr.png",
                        projectDescription: 'A 3D world building clicker game.',
                        tools: [techLogoIconsByName["unity"], techLogoIconsByName["blender"]],
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
