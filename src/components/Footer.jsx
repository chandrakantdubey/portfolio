import logo from '../assets/blue_rabbit_no_bg.png'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="container page-width d-flex align-items-center justify-content-between">
        <img
            src={logo}
            alt="logo"
            width="120"
            height="96"
        />
        <SocialMedia />
    </footer>
  )
}
