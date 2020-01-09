import React from 'react';

import SideImageJoker from '../../components/SideImageJoker';
import { Container, Title } from './styles';
import { Input } from '../../components/input';
import { Label } from '../../components/label';

export default function SignIn() {
  return (
    <Container>
      <div>
        <SideImageJoker />
      </div>
      <Title>Login</Title>
      <Label>E-mail</Label>
      <Input />
    </Container>
  );
}
