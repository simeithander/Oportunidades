import React from "react";

import {
  CustomCardContainer,
  CustomCardCardBody,
  CustomCardTitleContainer,
  CustomCardFooterContainer,
  TitleFooter,
  Title,
  Description,
  Text,
  Icon,
  SubDescription,
  ContainerRow,
  ContainerItens,
  CustomButton,
  Item,
  SubItem,
} from "./styles";

interface CustomCardInterface {
  title: string;
  iconImage: string;
  description: string;
  subDescriptionText: string;
  buttonName: string;
  itemText: string;
  subItemText: string;
  footerText: string;
}

const CustomCard: React.FC<CustomCardInterface> = ({
  title,
  description,
  iconImage,
  subDescriptionText,
  buttonName,
  itemText,
  subItemText,
  footerText,
}) => {
  return (
    <CustomCardContainer>
      {/* Container geral do Card */}
      <CustomCardCardBody>
        {/* Container do título */}
        <CustomCardTitleContainer>
          <Title>{title}</Title>
        </CustomCardTitleContainer>
        {/* Descrição em destaque com o icone */}
        <Description>
          <Text>{description}</Text>
          <Icon>{iconImage}</Icon>
        </Description>
        {/* Nota abaixo da descrição principal */}
        <SubDescription>{subDescriptionText}</SubDescription>
        {/* Itens que contém o Card */}
        <ContainerRow>
          <ContainerItens>
            <Item>{itemText}</Item>
            <SubItem>{subItemText}</SubItem>
          </ContainerItens>
          <CustomButton>{buttonName}</CustomButton>
        </ContainerRow>
        {/* Rodapé do Card */}
        <CustomCardFooterContainer>
          <TitleFooter>{footerText}</TitleFooter>
        </CustomCardFooterContainer>
      </CustomCardCardBody>
    </CustomCardContainer>
  );
};

export default CustomCard;
