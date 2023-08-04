import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #f1f5f9;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const LinkItem = styled(Link)`
  width: 120px;
  height: 100%;
  text-decoration: none;
  padding-top: 10px;
`
export const WebsiteLogo = styled.img`
  height: 70%;
  padding-left: 20px;
  cursor: pointer;
`
