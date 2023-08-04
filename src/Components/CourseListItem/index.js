import {
  CourseListItem,
  CourseLinkItem,
  CourseImage,
  CourseName,
} from './styledComponents'

const CourseItem = props => {
  const {courseData} = props
  const {id, name, logoUrl} = courseData

  return (
    <CourseListItem>
      <CourseLinkItem to={`/courses/${id}`}>
        <CourseImage src={logoUrl} alt={name} />
        <CourseName>{name}</CourseName>
      </CourseLinkItem>
    </CourseListItem>
  )
}

export default CourseItem
