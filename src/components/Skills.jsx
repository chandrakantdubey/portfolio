import skills from '../assets/Skills-removebg.png'
import html from '../assets/skill-icons/html.png'
import css from '../assets/skill-icons/css.png'
import js from '../assets/skill-icons/js.png'
import git from '../assets/skill-icons/git.png'
import react from '../assets/skill-icons/react.png'
import github from '../assets/skill-icons/github.png'
import figma from '../assets/skill-icons/figma.png'


export default function Skills() {
  return (
    <div id="skills">
      <div className='container page-width py-4'>
        <h2 className="text-center">My Tech Stack</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 px-1">
            <img src={skills} alt="skills" className='w-100 skills-img' />
          </div>
          < div className="col-12 col-sm-6 px-1 d-flex flex-wrap gap-1 justify-content-center align-items-center">
            <div className='skills-item'><img className='skills-icons' src={css} alt="css" /></div>
            <div className='skills-item'><img className='skills-icons' src={html} alt="html" /></div>
            <div className='skills-item'><img className='skills-icons' src={js} alt="js" /></div>
            <div className='skills-item'><img className='skills-icons' src={react} alt="react" /></div>
            <div className='skills-item'><img className='skills-icons' src={git} alt="git" /></div>
            <div className='skills-item'><img className='skills-icons' src={github} alt="github" /></div>
            <div className='skills-item'><img className='skills-icons' src={figma} alt="figma" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}
