import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Roboto';
`
export const HomeSuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const CoursesHeading = styled.h1`
  align-self: flex-start;
  font-size: 20px;
  color: #1e293b;
  padding-left: 20px;
`
export const CoursesUnorderedListContainer = styled.ul`
  width: 90%;
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
`
export const HomeFailureContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
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
