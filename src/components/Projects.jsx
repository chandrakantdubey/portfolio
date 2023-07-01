import ProjectCard from "./ProjectCard"
import mapty from '../assets/project-images/mapty.png'
import foodOrder from '../assets/project-images/food-ordering.png'
import travelJournal from '../assets/project-images/travel-journal.png'
import vansLife from '../assets/project-images/vans.jpg.png'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mapty Trek Tracker",
      imgUrl: mapty,
      description: "The app tracks the cycling and trekking on the map.",
      liveSite:"https://trek-cycle-mapper.netlify.app"
    },
    {
      id: 2,
      title: "Vans Life",
      imgUrl: vansLife,
      description: "This app is used for renting the vans and listing the vans.",
      liveSite:"https://live-vans-life.netlify.app"
    },
    {
      id: 3,
      title: "Travel Journal",
      imgUrl: travelJournal,
      description: "This travel journal is used for listing the travel.",
      liveSite:"https://chandrakant-travel-journal.netlify.app"
    },
    {
      id: 4,
      title: "Food ordering",
      imgUrl: foodOrder,
      description: "This app is used for ordering food from a restaurant.",
      liveSite:"https://chandrakants-food-ordering-app.netlify.app"
    },
  ]
  return (
    <div id="projects" className="py-4">
      <h2 className="text-center py-4">Projects</h2>
      <div className="projects mx-0 row gx-2 px-2 justify-content-center">
      {
        projects.map(project => <ProjectCard  key={project.id} {...project} />)
      }
      </div>
    </div>
  )
}

export default Projects