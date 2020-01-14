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
          <Title>
            Gerenciador de eventos <br /> para animadores de festas
          </Title>
        </ContentTitle>
        <ContentButton>
          <Link to="login">
            <ButtonSignIn>Entrar</ButtonSignIn>
          </Link>
          <Link to="register">
            <LinkSignUp>Criar conta</LinkSignUp>
          </Link>
        </ContentButton>
        <ContentLine>
          <Line />
        </ContentLine>
        <ContentCard>
          <Card>
            <ImgIcon src={Balloon} alt="balloon" />
            <TextCard>Cadastre suas festas e organize sua Agenda!</TextCard>
          </Card>
        </ContentCard>
        <ContentCardParty>
          <CardParty>
            <ImgIcon src={Party} alt="party" />
            <TextCard>
              Informe sua disponibilidade de dias e horários e crie um
              calendário personalizado
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
