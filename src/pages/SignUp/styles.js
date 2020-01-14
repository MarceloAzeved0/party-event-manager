import styled from 'styled-components';
import { Form as FormRock } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
`;

export const ContentCol = styled.div`
  /* background-color: #000000; */
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  margin-top: 3.26vh;
  margin-bottom: 10px;
  margin-left: 3.4vw;
  flex-direction: row;
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 3vh;
  line-height: 4.5vh;

  color: #565656;
`;

export const ContentLabel = styled.div`
  height: 200px;
  margin-top: 34px;
  margin-bottom: 10px;
  margin-left: 49px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ContentInput = styled.div`
  height: 19.23vh;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ContentTitle = styled.div`
  /* background-color: #000000; */
  height: 19.23vh;
  margin-top: 9.23vh;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Form = styled(FormRock)`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  span {
    display: flex;
    flex-direction: row;
    flex: 1;
    color: #ff0000;
  }
`;

export const ContentButton = styled.div`
  height: 19.23vh;
  margin-top: 5.19vh;
  margin-bottom: 10px;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ButtonShiftDay = styled.button`
  width: 10.76vw;
  height: 6.25vh;
  background: ${props => (props.active ? '#f097ce' : '#eeeeee')};
  margin-right: 1.31vw;
  border-radius: 5px;
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: center;

    color: #ffffff;
  }
`;

export const ButtonLogin = styled.button`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;

  color: #ffffff;

  width: 34vw;
  height: 6.7vh;

  background: linear-gradient(104.06deg, #f180c1 4.55%, #a450c9 95.79%);
  border-radius: 5px;
`;
