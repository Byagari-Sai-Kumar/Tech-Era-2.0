import './index.css'
import {CourseLinkItem} from './styledComponents'

const CourseItem = props => {
  const {courseData} = props
  const {id, name, logoUrl} = courseData

  return (
    <li className="courseListItem">
      <CourseLinkItem to={`/courses/${id}`}>
        <img className="courseImage" src={logoUrl} alt={name} />
        <p className="courseName">{name}</p>
      </CourseLinkItem>
    </li>
  )
}

export default CourseItem
