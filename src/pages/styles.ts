import styled, { createGlobalStyle } from 'styled-components'
import { Button, CustomInput } from "reactstrap";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', sans-serif;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  width: 1032px;
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
  width: 1010px;

`

export const Geolocation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: #8798AD;

`

export const Switch = styled(CustomInput)`
  margin-left: 8px;
  .custom-control-input:checked~.custom-control-label::before{
    background-color: #21D170;
    border: 0px;
  }
`

export const OportunidadesButton = styled(Button)`
  border: 1px solid #21D170;
  background-color: white;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 15px 24px 15px 24px;
  color: #21D170;
  font-weight: 700;

  :hover{
    color: #0db859;
    background-color: white;
    border: 1px solid #0db859;
  }
`
