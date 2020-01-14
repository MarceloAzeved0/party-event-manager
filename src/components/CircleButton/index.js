import styled from 'styled-components';

export const CircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  width: 65px;
  height: 65px;
  margin-right: 7px;

  color: #ffffff;

  background: ${props =>
    props.active
      ? 'linear-gradient(180deg, rgba(237, 125, 194, 0.8) 0%, rgba(236, 125, 194, 0.8) 100%)'
      : '#eeeeee'};
  border: ${props => (props.active ? '' : '1px solid #565656')};
  border-radius: 50%;
  box-sizing: border-box;

  p {
    font-family: Quicksand;
    font-style: normal;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
  }

  @media (max-width: 671px) {
    width: 40px;
    height: 40px;
  }
`;
