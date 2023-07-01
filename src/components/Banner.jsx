import profile from '../assets/chandrakant.png'

function Banner() {
  return (
    <div className="banner row  mx-0 py-2 align-items-center" id="home">
      <div className="col-sm-6 profile-details">
        <p>Hi, my name is,</p>
        <h1>Chandrakant Dubey</h1>
        <p>
            I am a software developer from India.
            I specialize in UX/UI Design, Responsive Web & Mobile Design, Front-end Development, I like minimalistic approach to design.
        </p>
        <a href='#contact' className="btn btn-primary">Let's Connect 👋🏻</a>
      </div>
      <div className="col-sm-6 profile">
        <img src={profile} alt="profile" className='profile-img' />
      </div>
    </div>
  )
}

export default Banner