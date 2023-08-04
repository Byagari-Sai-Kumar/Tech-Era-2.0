import Header from '../Header'
import {
  HomeBgContainer,
  HomeSuccessContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './styledComponents'

const NotFound = () => (
  <HomeBgContainer>
    <Header />
    <HomeSuccessContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <FailureHeading>Page Not Found</FailureHeading>
      <FailureDescription>
        We are sorry, the page you are requested could not be found.
      </FailureDescription>
    </HomeSuccessContainer>
  </HomeBgContainer>
)

export default NotFound
