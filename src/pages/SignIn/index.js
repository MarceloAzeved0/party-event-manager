import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import SideImageJoker from '../../components/SideImageJoker';
import {
  Container,
  Title,
  Content,
  ContentCol,
  ContentTitle,
  ContentLabel,
  ContentInput,
  ContentButton,
  ButtonLogin,
  ForgotPassword,
  CreateAccount,
  NoHaveAccount,
  Line,
  Form,
} from './styles';
import { Input } from '../../components/input';
import { Label } from '../../components/label';

export default function SignIn() {
  const handleSubmit = async data => {
    console.tron.log(data);
    const response = await api.get(`/users?email=${data.email}`);
    console.tron.log(response);
  };

  return (
    <Container>
      <SideImageJoker />
      <ContentCol>
        <ContentTitle>
          <Title>Login</Title>
        </ContentTitle>
        <Form onSubmit={handleSubmit}>
          <ContentLabel>
            <Label>E-mail</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="email" type="text" />
          </ContentInput>
          <ContentLabel>
            <Label>Senha</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="password" type="password" />
          </ContentInput>
          <ContentButton>
            <ButtonLogin type="submit">Entrar</ButtonLogin>
          </ContentButton>
        </Form>

        <Content>
          <ForgotPassword>Esqueci minha senha</ForgotPassword>
        </Content>
        <Content>
          <Line />
        </Content>
        <Content>
          <NoHaveAccount>Não possui uma conta?</NoHaveAccount>
        </Content>
        <Content>
          <Link to="register">
            <CreateAccount>Criar Conta</CreateAccount>
          </Link>
        </Content>
      </ContentCol>
    </Container>
  );
}
