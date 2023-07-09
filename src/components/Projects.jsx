import ProjectCard from "./ProjectCard"

import mapty from '../assets/project-images/mapty.png'
import rental from '../assets/project-images/rental.png'
import learningJournal from '../assets/project-images/learning-journal.png'
import littleLemon from '../assets/project-images/little-lemon.png'
import momentumDashboard from '../assets/project-images/momentum-dashboard.png'
import minimalisticBlog from '../assets/project-images/minimalistic.png'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Trek Tracker",
      imgUrl: mapty,
      liveSite:"https://mapty-trekking-app.vercel.app/",
      github: "https://github.com/chandrakantdubey/Mapty_App"
    },
    {
      id: 2,
      title: "Rental Vans",
      imgUrl: rental,
      liveSite:"https://rental-vans-app.vercel.app/",
      github:"https://github.com/chandrakantdubey/vans-life",
    },
    {
      id: 3,
      title: "Learning Journal",
      imgUrl: learningJournal,
      liveSite:"https://chandrakants-learning-journal.vercel.app/",
      github:"https://github.com/chandrakantdubey/learning-journal",
    },
    {
      id: 4,
      title: "Little Lemon Restro",
      imgUrl: littleLemon,
      liveSite:"https://little-lemon-restaurant-ten.vercel.app/",
      github:"https://github.com/chandrakantdubey/little-lemon",
    },
    {
      id: 5,
      title: "Momentum Dashboard",
      imgUrl: momentumDashboard,
      liveSite:"https://chrome-ext-momentum-dashboard.vercel.app/",
      github:"https://github.com/chandrakantdubey/chrome-ext-momentum-dashboard",
    },
    {
      id: 6,
      title: "Minmilastc Blog",
      imgUrl: minimalisticBlog,
      liveSite:"https://minimalistic-blog-sigma.vercel.app/",
      github:"https://github.com/chandrakantdubey/minimalistic-blog",
    },
  ]
  return (
    <div id="projects">
      <div className="container page-width">
        <h2 className="text-center py-4">Projects</h2>
        <div className="row justify-content-center">
          {
            projects.map(project => <ProjectCard  key={project.id} {...project} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Projects