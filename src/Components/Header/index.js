import {HeaderContainer, LinkItem, WebsiteLogo} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <LinkItem to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </LinkItem>
  </HeaderContainer>
)

export default Header
