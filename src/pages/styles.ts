import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
`

export const SpaceCard = styled.span`
  padding: 15px;
`

export const Title = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #274264;
  
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 40px;

`
