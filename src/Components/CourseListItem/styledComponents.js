import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const CourseLinkItem = styled(Link)`
  width: 100px;
  text-decoration: none;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CourseListItem = styled.li`
  width: 100px;
  margin: 30px;
  cursor: pointer;
`
export const CourseImage = styled.img`
  width: 50%;
`
export const CourseName = styled.p`
  font-size: 16px;
  color: #475569;
  width: 50%;
  padding-left: 10px;
`
