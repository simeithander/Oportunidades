import { Card, CardBody, CardTitle, Button } from "reactstrap";
import styled from 'styled-components'

export const CustomCardContainer = styled(Card)`
  width: 314px;
  height: 316px;
  margin: 0 30px 30px 0;
  transition: box-shadow .3s;

  :hover{
    filter: drop-shadow(0px 10px 30px rgba(13, 51, 32, 0.1));
  }
`

export const CustomCardCardBody = styled(CardBody)`
  padding: 24px;
  padding: 0px;

`
export const CustomCardTitleContainer = styled(CardTitle)`
  
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E6EAF6;
`

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #8798AD;
  padding-left: 24px;
  padding-right: 24px;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
`

export const Text = styled.div`
  padding-right: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #274264;
`

export const Icon = styled.div`
  padding-right: 24px;
  width: 48px;
  height: 48px;

`
export const SubDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #21D170;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
`

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 43px;
`

export const CustomButton = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  background-color: #21D170;
  border-radius: 5px;
  border: 0px;

  :hover{
    background-color: #0db859
  }
`

export const Item = styled.div`
  font-size: 18px;
  color: #274264;
  margin-right: 8px;
`

export const SubItem = styled.div`
  text-align: justify;
  font-size: 9px;
  line-height: 10px;
  width: 57px;
  text-transform: uppercase;
  color: #50eb95;
  
`

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CustomCardFooterContainer = styled(CardTitle)`
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: #8798AD;
  margin-top: 24px;
  padding-bottom: 16px;
  border-top: 1px solid #E6EAF6;
`

export const TitleFooter = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 14px;
  margin-top: 14px;
`