import './bootstrap/bootstrap';
import './bootstrap/bootstrap.scss';

const template = require('./projectItem.html');
const personalProjectsHTML = template({ data: [
    {projectName: 'Roast My Game', projectDescription: 'test project description'},
    {projectName: 'News Tab', projectDescription: 'test project description'},
    {projectName: 'Topic Loop', projectDescription: 'test project description'},
    {projectName: 'Tuesday Swap', projectDescription: 'test project description'}
]});

const universityProjectsHTML = template({ data: [
    {projectName: 'Fandom', projectDescription: 'test project description'},
    {projectName: 'Histogr', projectDescription: 'test project description'},
    {projectName: 'Checkin Children', projectDescription: 'test project description'},
    {projectName: 'City Clickr', projectDescription: 'test project description'}
]});

document.getElementById('personal-projects-container').innerHTML = personalProjectsHTML;
document.getElementById('university-projects-container').innerHTML = universityProjectsHTML;