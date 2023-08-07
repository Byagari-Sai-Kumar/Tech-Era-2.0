import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="homeBgContainer">
    <Header />
    <div className="homeSuccessContainer">
      <img
        className="failureImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="failureHeading">Page Not Found</h1>
      <p className="failureDescription">
        We are sorry, the page you are requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
