import linkedin from 'bootstrap-icons/icons/linkedin.svg'
import github from 'bootstrap-icons/icons/github.svg'

function SocialMedia() {
  return (
    <div className="d-flex gap-2">
        <img src={linkedin} alt="linkedin" style={{width: "2rem"}} />
        <img src={github} alt="github" style={{width: "2rem"}} />
    </div>
  )
}

export default SocialMedia