import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CourseItemDetails extends Component {
  state = {apiStatus: apiStatusConstants.initial, courseDetails: {}}

  componentDidMount() {
    this.getCourseDetailsData()
  }

  getCourseDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()

    console.log(data)

    if (response.ok === true) {
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        courseDetails: updatedData,
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
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails

    return (
      <div className="cardContainer">
        <img className="courseImage" src={imageUrl} alt={name} />
        <div className="descriptionContainer">
          <h1 className="heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }

  renderFailure = () => (
    <>
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
        onClick={this.getCourseDetailsData}
      >
        Retry
      </button>
    </>
  )

  renderCourseDetailsView = () => {
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
      <div className="courseDetailerBgContainer">
        <Header />
        <div className="courseDetailsSuccessContainer">
          {this.renderCourseDetailsView()}
        </div>
      </div>
    )
  }
}

export default CourseItemDetails
