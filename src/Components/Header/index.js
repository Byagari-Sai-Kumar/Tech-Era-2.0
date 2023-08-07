import {LinkItem} from './styledComponents'
import './index.css'

const Header = () => (
  <div className="headerContainer">
    <LinkItem to="/">
      <img
        className="websiteLogo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </LinkItem>
  </div>
)

export default Header
