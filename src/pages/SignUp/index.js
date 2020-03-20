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
import { Select } from '../../components/Select';

const Categories = [
  { title: 'Selecione...' },
  { id: 'INQUILINO', title: 'Inquilino' },
  { id: 'PROPRIETARIO', title: 'Proprietario' },
];

const Categories2 = [
  { title: 'Selecione...' },
  { id: 'guarida', title: 'Guarida' },
  { id: 'vilarica', title: 'Vila Rica' },
];

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
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
        <Form onSubmit={handleSubmit}>
          <ContentLabel>
            <Label>Qual o seu nome?</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="name" type="text" autoComplete="off" />
          </ContentInput>
          <ContentLabel>
            <Label>E seu e-mail?</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="email" type="email" autoComplete="off" />
          </ContentInput>
          <ContentLabel>
            <Label>Selecione a imobiliária</Label>
          </ContentLabel>
          <ContentInput>
            <Select width="32.2vw" name="company" options={Categories2} />
          </ContentInput>
          <ContentLabel>
            <Label>Selecione o perfil</Label>
          </ContentLabel>
          <ContentInput>
            <Select width="34.2vw" name="role" options={Categories} />
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
          {/* <ContentBottom>
            <NoHaveAccount>Já possui uma conta?</NoHaveAccount>
          </ContentBottom>
          <ContentBottom>
            <Link to="login" style={{ textDecoration: 'none' }}>
              <CreateAccount>Entrar</CreateAccount>
            </Link>
          </ContentBottom> */}
        </Form>
      </ContentCol>
    </Container>
  );
}
