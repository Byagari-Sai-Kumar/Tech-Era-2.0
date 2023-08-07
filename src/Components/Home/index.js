import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CourseItem from '../CourseListItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {apiStatus: apiStatusConstants.initial, courseList: []}

  componentDidMount() {
    this.getCourseListData()
  }

  getCourseListData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        courseList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color=" #4656a1" height={20} width={20} />
    </div>
  )

  renderSuccess = () => {
    const {courseList} = this.state

    return (
      <div className="homeSuccessContainer">
        <h1 className="coursesHeading">Courses</h1>
        <ul className="coursesUnorderedListContainer">
          {courseList.map(eachCourse => (
            <CourseItem key={eachCourse.id} courseData={eachCourse} />
          ))}
        </ul>
      </div>
    )
  }

  renderFailure = () => (
    <div className="homeFailureContainer">
      <img
        className="failureImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="failureHeading">Oops! Something Went Wrong</h1>
      <p className="failureDescription">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        className="retryButton"
        type="button"
        onClick={this.getCourseListData}
      >
        Retry
      </button>
    </div>
  )

  renderHomeViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="homeBgContainer">
        <Header />
        {this.renderHomeViews()}
      </div>
    )
  }
}

export default Home
