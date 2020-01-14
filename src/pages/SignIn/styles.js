import styled from 'styled-components';
import { Form as FormRock } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContentCol = styled.div`
  /* background-color: #000000; */
  display: flex;
  flex-direction: column;

  width: 54%;
  height: 94%;

  @media (max-width: 671px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const ContentTitle = styled.div`
  /* background-color: #000000; */
  height: 19.23vh;
  margin-top: 9.23vh;
  margin-left: 3.4vh;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 3vh;
  line-height: 4vh;

  color: #565656;
`;

export const ContentLabel = styled.div`
  height: 19.23vh;
  margin-top: 3.26vh;
  margin-bottom: 0.9vh;
  margin-left: 3.4vw;
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

export const ContentButton = styled.div`
  height: 19.23vh;
  margin-top: 5.2vh;
  margin-bottom: 10px;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;
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
  height: 6.73vh;

  background: linear-gradient(104.06deg, #f180c1 4.55%, #a450c9 95.79%);
  border-radius: 5px;
`;

export const ForgotPassword = styled.p`
  display: flex;
  margin-top: 10px;
  margin-left: 6.7vh;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;

  color: #9d9b9b;
`;

export const CreateAccount = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  margin-left: -12.5vw;
  font-size: 2rem;
  line-height: 2rem;
  /* identical to box height */

  text-align: center;

  color: #ed7ec2;
`;

export const Line = styled.div`
  width: 516px;
  height: 0px;

  border: 1px solid #cccccc;
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6.9vh;
  margin-left: 3.1vw;
  height: 0px;
  flex: 1;
`;

export const NoHaveAccount = styled.p`
  margin-top: 3vh;
  margin-bottom: 3vh;
  margin-left: -12.5vw;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;

  color: #565656;
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
