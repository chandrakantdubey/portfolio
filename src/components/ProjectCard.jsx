
function ProjectCard(project) {
  return (
    <div className="project-card card col-12 col-sm-6 col-md-4 col-lg-3 mx-2 my-2">
    <img src={project.imgUrl} className="card-img-top card-img" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{project.title}</h5>
      <p className="card-text">
        {project.description}
      </p>
      <a href={project.liveSite} className="btn btn-primary">{project.title}</a>
    </div>
  </div>
  )
}

export default ProjectCard