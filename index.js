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
                    { projectName: 'Roast My Game', projectDescription: 'test project description' },
                    { projectName: 'News Tab', projectDescription: 'test project description' },
                    { projectName: 'Topic Loop', projectDescription: 'test project description' },
                    { projectName: 'Tuesday Swap', projectDescription: 'test project description' }
                ]
            },
            {
                title: "University Projects",
                projectItems: [
                    { projectName: 'Fandom', projectDescription: 'test project description' },
                    { projectName: 'Histogr', projectDescription: 'test project description' },
                    { projectName: 'Checkin Children', projectDescription: 'test project description' },
                    { projectName: 'City Clickr', projectDescription: 'test project description' }
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
                logoURL: "",
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