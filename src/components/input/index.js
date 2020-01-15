import styled from 'styled-components';
import { Input as InputRock } from '@rocketseat/unform';

export const Input = styled(InputRock)`
  width: ${props => (props.width ? `${props.width}vw` : '34vw')};
  height: ${props => (props.height ? `${props.height}vh` : '5.8vh')};
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  padding: 12px;

  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  color: #ee7ec2;
`;
