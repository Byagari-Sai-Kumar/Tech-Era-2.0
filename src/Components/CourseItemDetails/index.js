import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import {
  CourseDetailerBgContainer,
  CourseDetailsSuccessContainer,
  CardContainer,
  CourseImage,
  DescriptionContainer,
  Heading,
  Description,
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
      <CardContainer>
        <CourseImage src={imageUrl} alt={name} />
        <DescriptionContainer>
          <Heading>{name}</Heading>
          <Description>{description}</Description>
        </DescriptionContainer>
      </CardContainer>
    )
  }

  renderFailure = () => (
    <>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getCourseDetailsData}>
        Retry
      </RetryButton>
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
      <CourseDetailerBgContainer>
        <Header />
        <CourseDetailsSuccessContainer>
          {this.renderCourseDetailsView()}
        </CourseDetailsSuccessContainer>
      </CourseDetailerBgContainer>
    )
  }
}

export default CourseItemDetails
