import logo from '../assets/blue_rabbit_no_bg.png'
import SocialMedia from './SocialMedia'
import Nav from './Nav'

export default function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-between">
        <img
            src={logo}
            alt="logo"
            width="120"
            height="96"
        />
        <nav className='d-flex justify-content-center gap-2 align-items-center'>
            <Nav />
        </nav>
        <SocialMedia />
    </footer>
  )
}
