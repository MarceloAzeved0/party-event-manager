import React from 'react';
import { Link } from 'react-router-dom';
import Balloon from '../../assets/balloon.svg';
import Party from '../../assets/party.svg';
import SideImageJoker from '../../components/SideImageJoker';

import {
  Container,
  ContainerCol,
  ContentCard,
  ContentCardParty,
  Content,
  ContentTriider,
  Title,
  ContentButton,
  ContentTitle,
  ContentLine,
  ButtonSignIn,
  LinkSignUp,
  Line,
  Card,
  ImgIcon,
  TextCard,
  CardParty,
  TextFooter,
} from './styles';

export default function Main() {
  return (
    <Container>
      <SideImageJoker />
      <ContainerCol>
        <ContentTitle>
          <Title>Simulador da página nova de Parceiros</Title>
        </ContentTitle>
        <ContentButton>
          <Link to="register">
            <LinkSignUp>Testar</LinkSignUp>
          </Link>
        </ContentButton>
        <ContentLine>
          <Line />
        </ContentLine>
        <ContentCard>
          <Card>
            <ImgIcon src={Balloon} alt="balloon" />
            <TextCard>Crie pedidos direto da sua agência virtual!</TextCard>
          </Card>
        </ContentCard>
        <ContentCardParty>
          <CardParty>
            <ImgIcon src={Party} alt="party" />
            <TextCard>
              Automatize o processo de contratação de serviços
            </TextCard>
          </CardParty>
        </ContentCardParty>
        <ContentTriider>
          <TextFooter>Desafio Front end Triider</TextFooter>
        </ContentTriider>
      </ContainerCol>
    </Container>
  );
}
