import React from 'react';

import {
  Container,
  ContentCol,
  ContentLabel,
  ContentTitle,
  ContentButton,
  ContentInput,
  Title,
} from './styles';
import SideImageJoker from '../../components/SideImageJoker';
import { Label } from '../../components/label';
import { Select } from '../../components/Select';
import { CircleButton } from '../../components/CircleButton';

const Categories = [
  { id: 'Palhaco', title: 'Palhaço' },
  { id: 'Magico', title: 'Mágico' },
  { id: 'Malabarista', title: 'Malabarista' },
];

export default function Register2() {
  return (
    <Container>
      <SideImageJoker />
      <ContentCol>
        <ContentTitle>
          <Title>Criar Conta</Title>
        </ContentTitle>
        <ContentLabel>Selecione sua categoria</ContentLabel>
        <ContentInput>
          <Select name="category" options={Categories} />
        </ContentInput>
        <ContentLabel>
          <Label>Selecione os dias que trabalhará:</Label>
        </ContentLabel>
        <ContentInput>
          <CircleButton />
        </ContentInput>
      </ContentCol>
    </Container>
  );
}
