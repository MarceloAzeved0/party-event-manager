import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import SideImageJoker from '../../components/SideImageJoker';
import {
  Container,
  Title,
  Content,
  ContentCol,
  ContentTitle,
  ContentLine,
  ContentLabel,
  Input,
  ContentInput,
  ContentButton,
  ButtonLogin,
  ForgotPassword,
  CreateAccount,
  NoHaveAccount,
  Line,
  Form,
} from './styles';
import { Label } from '../../components/label';
import { Creators } from '../../store/ducks/modules/user';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const handleSubmit = async data => {
    dispatch(Creators.login(data));
  };

  return (
    <Container>
      <SideImageJoker />
      <ContentCol>
        <ContentTitle>
          <Title>Login</Title>
        </ContentTitle>
        <Form schema={schema} onSubmit={handleSubmit}>
          <ContentLabel>
            <Label>E-mail</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="email" type="text" autoComplete="off" />
          </ContentInput>
          <ContentLabel>
            <Label>Senha</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="password" type="password" autoComplete="off" />
          </ContentInput>
          <ContentButton>
            <ButtonLogin type="submit">Entrar</ButtonLogin>
          </ContentButton>

          <Content>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </Content>
          <ContentLine>
            <Line />
          </ContentLine>
          <Content>
            <NoHaveAccount>Não possui uma conta?</NoHaveAccount>
          </Content>
          <Content>
            <Link to="register" style={{ textDecoration: 'none' }}>
              <CreateAccount>Criar Conta</CreateAccount>
            </Link>
          </Content>
        </Form>
      </ContentCol>
    </Container>
  );
}
