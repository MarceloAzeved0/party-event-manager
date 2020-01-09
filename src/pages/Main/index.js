import React from 'react';
import joker from '../../assets/joker.svg';
import Balloon from '../../assets/balloon.svg';

import {
  Container,
  ImageContainer,
  ImgSide,
  Content,
  Title,
  ContainerButtons,
  ButtonSignIn,
  LinkSignUp,
  Line,
  Card,
  ImgIcon,
} from './styles';

export default function Main() {
  return (
    <Container>
      <ImgSide src={joker} alt="joker">
        <ImageContainer />
      </ImgSide>
      <Content>
        <Title>
          Gerenciador de eventos <br /> para animadores de festas
        </Title>

        <ContainerButtons>
          <ButtonSignIn>Entrar</ButtonSignIn>
          <LinkSignUp>Criar conta</LinkSignUp>
        </ContainerButtons>
        <Line />
        <Card>
          <ImgIcon src={Balloon} alt="balloon" />
        </Card>
      </Content>
    </Container>
  );
}
