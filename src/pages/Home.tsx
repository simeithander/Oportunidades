import React from "react";
// Dependências da página
import { Container } from "reactstrap";
import CustomCard from "./Components/CustomCard";
// Estilos personalizados
import { CardContainer, GlobalStyle, Title, SpaceCard } from "./styles";

const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Title>Oportunidades em destaque</Title>
        <CardContainer>
          <CustomCard
            buttonName="Participar"
            title="vaga de voluntariado"
            iconImage="icone"
            description="Arrecadação de alimentos para moradores de rua"
            subDescriptionText="SP Invisível"
            itemText="2-6"
            subItemText="Horas Semana"
            footerText="Natal, RN"
          />
          <SpaceCard></SpaceCard>
          <CustomCard
            buttonName="Doar"
            title="doação de materiais"
            iconImage="icone"
            description="Arrecadação de alimentos para moradores de rua"
            subDescriptionText="SP Invisível"
            itemText="36"
            subItemText="Itens Disponíveis"
            footerText="Natal, RN"
          />
          <SpaceCard></SpaceCard>
          <CustomCard
            buttonName="Contribuir"
            title="campanha de arrecadação"
            iconImage="icone"
            description="Arrecadação de alimentos para moradores de rua"
            subDescriptionText="SP Invisível"
            itemText="R$ 5.000"
            subItemText="Valor Esperado"
            footerText="Natal, RN"
          />
        </CardContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
