import styled from 'styled-components'

export const CourseDetailerBgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
`
export const CourseDetailsSuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`
export const CardContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CourseImage = styled.img`
  width: 30%;
`
export const DescriptionContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  font-size: 25px;
  color: #1e293b;
  margin-top: 0px;
`
export const Description = styled.p`
  font-size: 18px;
  color: #475569;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
  color: #4656a1;
`
export const FailureDescription = styled.p`
  font-size: 12px;
  color: #64748b;
`
export const RetryButton = styled.button`
  width: 70px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background-color: #4656a1;
  color: #ffffff;
  cursor: pointer;
`
