import React from 'react';
import { Link } from 'react-router-dom';
import Balloon from '../../assets/balloon.svg';
import Party from '../../assets/party.svg';
import SideImageJoker from '../../components/SideImageJoker';

import {
  Container,
  Content,
  Title,
  ContainerButtons,
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
      <Content>
        <Title>
          Gerenciador de eventos <br /> para animadores de festas
        </Title>
        <ContainerButtons>
          <Link to="login">
            <ButtonSignIn>Entrar</ButtonSignIn>
          </Link>
          <LinkSignUp>Criar conta</LinkSignUp>
        </ContainerButtons>
        <Line />
        <Card>
          <ImgIcon src={Balloon} alt="balloon" />
          <TextCard>
            Cadastre suas festas e organize <br />
            sua Agenda!
          </TextCard>
        </Card>
        <CardParty>
          <ImgIcon src={Party} alt="party" />
          <TextCard>
            Informe sua disponibilidade de dias e horários e crie um calendário
            personalizado
          </TextCard>
        </CardParty>

        <TextFooter>Desafio Front end Triider</TextFooter>
      </Content>
    </Container>
  );
}
