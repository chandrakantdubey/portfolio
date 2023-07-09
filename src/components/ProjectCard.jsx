import github from 'bootstrap-icons/icons/github.svg'

function ProjectCard(project) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mx-2 my-2 card">
    <div className="card-img-container">
      <img src={project.imgUrl} className="card-img-top w-100 h-100 pt-2" alt={project.title} />
    </div>
    <div className="card-body">
      <h5 className="card-title">{project.title}</h5>
      <hr />
      <div className="d-flex justify-content-between gap-2 align-items-center">
        <a target='_blank' href={project.liveSite} className="btn btn-primary">Visit Site</a>
        <a target='_blank' href={project.github}>Github</a>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard