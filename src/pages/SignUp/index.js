import React from 'react';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  Container,
  ContentCol,
  ContentTitle,
  ContentButton,
  ContentLabel,
  ContentInput,
  Title,
  Form,
  ButtonLogin,
} from './styles';
import SideImageJoker from '../../components/SideImageJoker';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Creators } from '../../store/ducks/modules/user';
import history from '../../services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(Creators.nextUser(data));
    history.push('/register-2');
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
            <Input name="name" type="text" />
          </ContentInput>
          <ContentLabel>
            <Label>E seu e-mail?</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="email" type="email" />
          </ContentInput>
          <ContentLabel>
            <Label>Crie uma senha</Label>
          </ContentLabel>
          <ContentInput>
            <Input name="password" type="password" />
          </ContentInput>
          <ContentButton>
            <ButtonLogin type="submit">Avançar</ButtonLogin>
          </ContentButton>
        </Form>
      </ContentCol>
    </Container>
  );
}
