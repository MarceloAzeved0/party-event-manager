import styled from 'styled-components';

export const CircleButton = styled.div`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  width: 65px;
  height: 62px;

  color: #ffffff;

  background: ${props =>
    props.active
      ? 'linear-gradient(180deg, rgba(237, 125, 194, 0.8) 0%, rgba(236, 125, 194, 0.8) 100%)'
      : '#eeeeee'};
  border: ${props => (props.active ? '' : '1px solid #565656')};
  border-radius: 50%;
  box-sizing: border-box;
`;
