import React from 'react';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  Container,
  ContentCol,
  ContentTitle,
  ContentButton,
  ContentLabel,
  ContentInput,
  ContentBottom,
  ContentLine,
  Title,
  Line,
  ForgotPassword,
  Input,
  Form,
  ButtonLogin,
  CreateAccount,
  NoHaveAccount,
} from './styles';
import SideImageJoker from '../../components/SideImageJoker';
import { Label } from '../../components/label';
import { Creators } from '../../store/ducks/modules/user';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp({ history }) {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(Creators.nextUser(data));
    history.push('/registerFinish');
  };
  return (
    <Container>
      <SideImageJoker />
      <ContentCol>
        <ContentTitle>
          <Title>Criar Conta</Title>
        </ContentTitle>
        <Form schema={schema} onSubmit={handleSubmit}>
          <ContentLabel>
            <Label>Qual o seu nome?</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="name" type="text" autocomplete="off" />
          </ContentInput>
          <ContentLabel>
            <Label>E seu e-mail?</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="email" type="email" autocomplete="off" />
          </ContentInput>
          <ContentLabel>
            <Label>Crie uma senha</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="password" type="password" autocomplete="off" />
          </ContentInput>
          <ContentButton>
            <ButtonLogin type="submit">Avançar</ButtonLogin>
          </ContentButton>
          <ContentBottom>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </ContentBottom>
          <ContentLine>
            <Line />
          </ContentLine>
          <ContentBottom>
            <NoHaveAccount>Já possui uma conta?</NoHaveAccount>
          </ContentBottom>
          <ContentBottom>
            <Link to="login">
              <CreateAccount>Entrar</CreateAccount>
            </Link>
          </ContentBottom>
        </Form>
      </ContentCol>
    </Container>
  );
}
