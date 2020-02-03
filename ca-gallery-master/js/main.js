'use strict';
/////this is my controller

function onInit() {
    renderProjects();
    // renderModal();
}



function renderProjects() {

    var projects = getProjectsForDisplay();

    var strStaticHTMLs = `
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        `

    var htmlStrings = projects.map(function (project) {

        var test = ` <div onclick="renderModal(${project.id})" class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
           <div class="portfolio-hover">
             <div class="portfolio-hover-content">
               <i class="fa fa-plus fa-3x"></i>
             </div>
           </div>
           <img class="img-fluid" src="${project.img}" alt="">
         </a>
         <div class="portfolio-caption">
           <h4>${project.ProjectName}</h4>
           <p class="text-muted">${project.category}</p>
            </div>
         </div>
        `

        return test;
    })
    var elportfolio = document.querySelector('#portfolio');
    var newJoinStr = htmlStrings.join('');
    elportfolio.innerHTML = strStaticHTMLs += newJoinStr;

}

function renderModal(projectID) {

    var projects = getProjectsForDisplay();
    var project = projects.filter(function (proj) {
        return proj.id === projectID;
    })
    project = project[0];
    var strHTMLs = '';
    var className = 'portfolio-modal modal fade';
    var id = `portfolioModal${project.id}`
    strHTMLs = `
        <div class="${className}" id="${id}" tabindex="-1" role="dialog" aria-hidden="true">
        
<div class="modal-dialog">
<div class="modal-content">
  <div class="close-modal" data-dismiss="modal">
    <div class="lr">
      <div class="rl"></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div class="modal-body">
          <!-- Project Details Go Here -->
          <h2>${project.ProjectName}</h2>
          <p class="item-intro text-muted">${project.title}.</p>
          <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
          <p>${project.summary}</p>
          <ul class="list-inline">
            <li>Date: ${project.date}</li>
            <li>Client: ${project.client}</li>
            <li>Category: ${project.category}</li>
          </ul>
          <p><button onclick="window.open('${project.link}')" class="btn btn-primary" id="link">Check it Out</button></p>
          <p><button class="btn btn-primary" data-dismiss="modal" type="button">
              <i class="fa fa-times"></i>
              Close Project</button></p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
`
    var elProjects = document.querySelector('.all-projects');
    elProjects.innerHTML = strHTMLs;
}

console.log('Starting up');