import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import github from 'bootstrap-icons/icons/github.svg'

function SocialMedia() {
  return (
    <div className="d-flex gap-2">
        <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/chandrakant-dubey" title='Linkedin'>
          <img src={linkedin} alt="linkedin" style={{width: "2rem"}} />
        </a>
        <a target='_blank' rel='noreferrer' href="https://github.com/chandrakantdubey" title='Github'>
          <img src={github} alt="github" style={{width: "2rem"}} />
        </a>
    </div>
  )
}
export default SocialMedia