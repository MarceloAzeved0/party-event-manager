import styled from 'styled-components';
import { Select as SelectRock } from '@rocketseat/unform';

export const Select = styled(SelectRock)`
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  width: ${props => (props.width ? props.width : '34.8vw')};
  height: 50px;
  max-width: 36.8vw;
  padding: 1.2rem;

  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;

  color: #ee7ec2;
`;
