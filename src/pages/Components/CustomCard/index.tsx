import React from "react";
// Icons
import { ReactComponent as MoneyIcon } from "../../../assets/icons/money.svg";
import { ReactComponent as LoveHands } from "../../../assets/icons/love-hands.svg";
import { ReactComponent as LoveBox } from "../../../assets/icons/love-box.svg";
// Componentes personalizados
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

// Interface deste componente
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

// Corpo do componente
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
  function selectIcon() {
    if (iconImage === "MoneyIcon") return <MoneyIcon />;
    else if (iconImage === "LoveHands") return <LoveHands />;
    else if (iconImage === "LoveBox") return <LoveBox />;
  }
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
          <Icon>{selectIcon()}</Icon>
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
