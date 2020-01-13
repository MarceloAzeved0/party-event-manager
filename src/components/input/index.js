import styled from 'styled-components';
import { Input as InputRock } from '@rocketseat/unform';

export const Input = styled(InputRock)`
  width: ${props => (props.width ? `${props.width}px` : '490px')};
  height: ${props => (props.height ? `${props.height}px` : '60px')};
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
