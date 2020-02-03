const KEY = 'myProjects'
var gID = 1111;
var gPojects = _createProjects();

function getProjectsForDisplay() {
    return gPojects;
}


// Private functions:
function _createProjects() {
    var projects = ['final-delivery', 'books-shop','to-dos']
        .map(projectName => _createProject(projectName))
    return projects;
}

///gets vendor
function _createProject(pName) {
    return {
        id: gID++,
        ProjectName: pName,
        link: `https://github.com/rotemYehiel/${pName}`,
        img: `img/portfolio/${pName}.jpg`,
        title: 'my project',
        summary: 'this is my project',
        date: 'Jenuar 2020',
        client: 'Gamers',
        category: 'Games'
    }
}


