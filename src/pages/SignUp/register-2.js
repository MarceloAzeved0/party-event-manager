import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators } from '../../store/ducks/modules/user';

import {
  Container,
  ContentCol,
  ContentLabel,
  ContentTitle,
  Content,
  ContentInput,
  Title,
  ButtonShiftDay,
  ButtonLogin,
  Form,
  Input,
} from './styles';
import SideImageJoker from '../../components/SideImageJoker';
import { Label } from '../../components/label';
import { Select } from '../../components/Select';
import { CircleButton } from '../../components/CircleButton';

export default function Register2() {
  const dispatch = useDispatch();

  const [weekDays, setWeekDays] = useState([]);
  const [dayShift, setDayShift] = useState([]);

  const handleSubmit = data => {
    const value = { ...data, day_shift: dayShift, week_days: weekDays };

    dispatch(Creators.createUser(value));
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
            <Label>Informe a cidade</Label>
          </ContentLabel>
          <ContentInput>
            <Input type="text" name="city" />
          </ContentInput>
          <ContentLabel>
            <Label>Informe a sua rua</Label>
          </ContentLabel>
          <ContentInput>
            <Input type="text" name="street" />
          </ContentInput>
          <ContentLabel>
            <Label>Informe o seu número</Label>
          </ContentLabel>
          <ContentInput>
            <Input type="text" name="number" />
          </ContentInput>
          <ContentLabel>
            <Label>Informe o seu CEP</Label>
          </ContentLabel>
          <ContentInput>
            <Input type="text" name="cep" />
          </ContentInput>
          <ContentInput>
            <ButtonLogin type="submit">Criar Conta</ButtonLogin>
          </ContentInput>
        </Form>
      </ContentCol>
    </Container>
  );
}
