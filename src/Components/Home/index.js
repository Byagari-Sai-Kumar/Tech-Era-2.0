import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import CourseItem from '../CourseListItem'
import {
  HomeBgContainer,
  HomeSuccessContainer,
  CoursesHeading,
  CoursesUnorderedListContainer,
  HomeFailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

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
      <HomeSuccessContainer>
        <CoursesHeading>Courses</CoursesHeading>
        <CoursesUnorderedListContainer>
          {courseList.map(eachCourse => (
            <CourseItem key={eachCourse.id} courseData={eachCourse} />
          ))}
        </CoursesUnorderedListContainer>
      </HomeSuccessContainer>
    )
  }

  renderFailure = () => (
    <HomeFailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getCourseListData}>
        Retry
      </RetryButton>
    </HomeFailureContainer>
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
      <HomeBgContainer>
        <Header />
        {this.renderHomeViews()}
      </HomeBgContainer>
    )
  }
}

export default Home
