import { CardInterface } from "../types";
//import api from '../api';

export async function getCards(){
  const cards: CardInterface[] = [
    {
      "buttonName": "Participar",
      "title": "vaga de voluntariado",
      "iconImage": "LoveHands",
      "description": "Arrecadação de alimentos para moradores de rua",
      "subDescriptionText": "SP Invisível",
      "itemText": "2-6",
      "subItemText": "Horas Semana",
      "footerText": "Natal, RN",
    },
    {
      "buttonName": "Doar",
      "title": "doação de materiais",
      "iconImage": "LoveBox",
      "description": "Arrecadação de alimentos para moradores de rua",
      "subDescriptionText": "SP Invisível",
      "itemText": "36",
      "subItemText": "Itens disponíveis",
      "footerText": "Natal, RN",
    },
    {
      "buttonName": "Contribuir",
      "title": "Campanha de arrecadação",
      "iconImage": "MoneyIcon",
      "description": "Arrecadação de alimentos para moradores de rua",
      "subDescriptionText": "SP Invisível",
      "itemText": "R$ 5.000",
      "subItemText": "Valor Esperado",
      "footerText": "Natal, RN",
    },
    {
      "buttonName": "Doar",
      "title": "doação de materiais",
      "iconImage": "LoveBox",
      "description": "Arrecadação de alimentos para moradores de rua",
      "subDescriptionText": "SP Invisível",
      "itemText": "36",
      "subItemText": "Itens disponíveis",
      "footerText": "Natal, RN",
    },
  ]
  /*   api.get('/user?ID=12345')
  .then(function (response) {
    const { data } = response;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }) */
  return cards;
}
