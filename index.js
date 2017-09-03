import './bootstrap/bootstrap';
import './bootstrap/bootstrap.scss';

const projectsTemplate = require('./projectsTemplate.html');
const workExperiencesTemplate = require('./workExperiencesTemplate.html');

const projectsHTML = projectsTemplate(
    {
        projects: [
            {
                title: "Personal Projects",
                projectItems: [
                    { projectName: 'Roast My Game', previewImage: "preview-roast-my-game.png", projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/clickr", projectURL: "https://roastmygame.com/" },
                    { projectName: 'News Tab', previewImage: "preview-news-tab.png", projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/rTab", projectURL: "https://chrome.google.com/webstore/detail/news-tab-new-tab-page-rep/cdpnmcehklcfepflojdklfggahnaolid"},
                    { projectName: 'Topic Loop', previewImage: "preview-topic-loop.png", projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/nupicture", },
                    { projectName: 'Tuesday Swap', previewImage: "preview-tuesday-swap.png", projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/tuesday-swap" }
                ]
            },
            {
                title: "University Projects",
                projectItems: [
                    { projectName: 'Fandom', previewImage: "preview-fandom.png", projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/fandom-client" },
                    { projectName: 'Histogr', previewImage: "preview-histogr.png",  projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/histogr" },
                    { projectName: 'Checkin Children', previewImage: "preview-checkin-children.png",  projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/CheckinChildren" },
                    { projectName: 'City Clickr', previewImage: "preview-city-clickr.png",  projectDescription: 'test project description', githubURL: "https://github.com/harshpatel991/CityClicker/" }
                ]
            }
        ]
    }
);

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

document.getElementById('projects-container').innerHTML = projectsHTML;
document.getElementById('work-experiences-container').innerHTML = workExperienceHTML;