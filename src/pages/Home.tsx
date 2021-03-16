import React, { useEffect, useState } from "react";
// Dependências da página
import { Container } from "reactstrap";
import { CardInterface } from "../types";

// Componentes personalizados
import CustomCard from "./Components/CustomCard";
import { getCards } from "./homeController";
// Estilos personalizados
import {
  CardContainer,
  GlobalStyle,
  Title,
  HeaderContainer,
  Geolocation,
  Switch,
  OportunidadesButton,
} from "./styles";

const Home = () => {
  const [location, setLocation] = useState<Boolean>(false);
  const [latitude, setLatitude] = useState<Number>(0);
  const [longiTude, setLongitude] = useState<Number>(0);
  const [cards, loadCards] = useState<CardInterface[]>([]);

  // Obtem os Card através do Controller
  async function Cards() {
    loadCards(await getCards());
  }

  // Verifica o estado dos Cardos
  useEffect(() => {
    Cards();
  }, []);

  // Verifica a localização
  useEffect(() => {
    if (location) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [location]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <HeaderContainer>
          <Title>Oportunidades em destaque</Title>
          <Geolocation>
            Geologalização Ativa
            <Switch
              type="switch"
              id="exampleCustomSwitch"
              name="customSwitch"
              onChange={() => setLocation(location ? false : true)}
            />
          </Geolocation>
        </HeaderContainer>
        <CardContainer>
          {cards.map((item: CardInterface) => (
            <CustomCard
              buttonName={item.buttonName}
              title={item.title}
              iconImage={item.iconImage}
              description={item.description}
              subDescriptionText={item.subDescriptionText}
              itemText={item.itemText}
              subItemText={item.subItemText}
              footerText={item.footerText}
            />
          ))}
        </CardContainer>
        <OportunidadesButton>Todas as Oportunidades</OportunidadesButton>
      </Container>
    </React.Fragment>
  );
};

export default Home;
