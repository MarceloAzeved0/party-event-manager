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
} from './styles';
import SideImageJoker from '../../components/SideImageJoker';
import { Input } from '../../components/input';
import { Label } from '../../components/label';
import { Select } from '../../components/Select';
import { CircleButton } from '../../components/CircleButton';

const Categories = [
  { title: 'Selecione...' },
  { id: 'Palhaco', title: 'Palhaço' },
  { id: 'Magico', title: 'Mágico' },
  { id: 'Malabarista', title: 'Malabarista' },
];

export default function Register2() {
  const dispatch = useDispatch();

  const [weekDays, setWeekDays] = useState([]);
  const [dayShift, setDayShift] = useState([]);

  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [night, setNight] = useState(false);

  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const handleSubmit = data => {
    console.tron.log('tetse', weekDays, dayShift);
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
            <Label>Selecione sua categoria</Label>
          </ContentLabel>
          <ContentInput>
            <Select name="category" options={Categories} />
          </ContentInput>
          <ContentLabel>
            <Label>Selecione os dias que trabalhará:</Label>
          </ContentLabel>
          <Content>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !monday
                    ? [...weekDays, 'monday']
                    : weekDays.filter(item => item !== 'monday'),
                  setMonday(!monday)
                )
              }
              active={monday}
            >
              <p>S</p>
            </CircleButton>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !tuesday
                    ? [...weekDays, 'tuesday']
                    : weekDays.filter(item => item !== 'tuesday'),
                  setTuesday(!tuesday)
                )
              }
              active={tuesday}
            >
              <p>T</p>
            </CircleButton>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !wednesday
                    ? [...weekDays, 'wednesday']
                    : weekDays.filter(item => item !== 'wednesday'),
                  setWednesday(!wednesday)
                )
              }
              active={wednesday}
            >
              <p>Q</p>
            </CircleButton>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !thursday
                    ? [...weekDays, 'thursday']
                    : weekDays.filter(item => item !== 'thursday'),
                  setThursday(!thursday)
                )
              }
              active={thursday}
            >
              <p>T</p>
            </CircleButton>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !friday
                    ? [...weekDays, 'friday']
                    : weekDays.filter(item => item !== 'friday'),
                  setFriday(!friday)
                )
              }
              active={friday}
            >
              <p>S</p>
            </CircleButton>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !saturday
                    ? [...weekDays, 'saturday']
                    : weekDays.filter(item => item !== 'saturday'),
                  setSaturday(!saturday)
                )
              }
              active={saturday}
            >
              <p>S</p>
            </CircleButton>
            <CircleButton
              type="button"
              onClick={() =>
                setWeekDays(
                  !sunday
                    ? [...weekDays, 'sunday']
                    : weekDays.filter(item => item !== 'sunday'),
                  setSunday(!sunday)
                )
              }
              active={sunday}
            >
              <p>D</p>
            </CircleButton>
          </Content>
          <ContentLabel>
            <Label>Selecione os turnos que trabalhará?</Label>
          </ContentLabel>
          <ContentInput>
            <ButtonShiftDay
              type="button"
              onClick={() =>
                setDayShift(
                  !morning
                    ? [...dayShift, 'morning']
                    : dayShift.filter(item => item !== 'morning'),
                  setMorning(!morning)
                )
              }
              active={morning}
            >
              <p>Manhã</p>
            </ButtonShiftDay>
            <ButtonShiftDay
              type="button"
              onClick={() =>
                setDayShift(
                  !afternoon
                    ? [...dayShift, 'afternoon']
                    : dayShift.filter(item => item !== 'afternoon'),
                  setAfternoon(!afternoon)
                )
              }
              active={afternoon}
            >
              <p>Tarde</p>
            </ButtonShiftDay>
            <ButtonShiftDay
              type="button"
              onClick={() =>
                setDayShift(
                  !night
                    ? [...dayShift, 'night']
                    : dayShift.filter(item => item !== 'night'),
                  setNight(!night)
                )
              }
              active={night}
            >
              <p>Noite</p>
            </ButtonShiftDay>
          </ContentInput>
          <ContentLabel>
            <Label>Informe o preço do seu serviço</Label>
          </ContentLabel>
          <ContentInput>
            <Input type="text" name="price" />
          </ContentInput>
          <ContentInput>
            <ButtonLogin type="submit">Criar Conta</ButtonLogin>
          </ContentInput>
        </Form>
      </ContentCol>
    </Container>
  );
}
