import styled from 'styled-components';
import { Form as FormRock, Input as InputRock } from '@rocketseat/unform';

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
    flex-direction: column;
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

  @media (max-width: 671px) {
    margin-right: 9.6vw;
    margin-left: 9.6vw;
  }
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 3vh;
  line-height: 4vh;

  color: #565656;

  @media (max-width: 671px) {
    color: #ffffff;
    font-size: 3rem;
    line-height: 3.7rem;
  }
`;

export const ContentLabel = styled.div`
  height: 19.23vh;
  margin-top: 3.26vh;
  margin-bottom: 0.9vh;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 671px) {
    margin-bottom: 0vh;
    margin-top: 5.25vh;
    margin-left: 9.6vw;
  }
`;

export const Input = styled(InputRock)`
  width: ${props => (props.width ? `${props.width}px` : '34vw')};
  height: ${props => (props.height ? `${props.height}px` : '5.8vh')};
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  padding: 12px;

  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  color: #ee7ec2;
  @media (max-width: 671px) {
    margin-top: 0.5vh;
    height: 5.6vh;
    width: 72.26vw;
  }
`;

export const ContentInput = styled.div`
  height: 19.23vh;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;
  span {
    color: red;
    font-size: 2rem;
  }
  @media (max-width: 671px) {
    margin-top: 0.5vh;
    margin-left: 9.6vw;
    height: 6.6vh;
  }
`;

export const ContentButton = styled.div`
  height: 19.23vh;
  margin-top: 5.2vh;
  margin-bottom: 10px;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;

  @media (max-width: 671px) {
    justify-content: center;
    width: 72.26vw;
    height: 7.6vh;
    margin-right: 9.6vw;
    margin-left: 9.6vw;
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
  height: 6.73vh;

  background: linear-gradient(104.06deg, #f180c1 4.55%, #a450c9 95.79%);
  border-radius: 5px;
  @media (max-width: 671px) {
    width: 72.26vw;
    height: 7.6vh;
  }
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

  @media (max-width: 671px) {
    margin-left: 44.2vw;
    margin-top: 2vh;
  }
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
  @media (max-width: 671px) {
    margin-right: 9.6vw;
    margin-left: 9.6vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`;

export const Line = styled.div`
  width: 35.8vw;
  height: 0px;

  border: 1px solid #cccccc;

  @media (max-width: 671px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4vw;
    width: 80vw;
  }
`;

export const ContentLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6.9vh;
  margin-left: 3.1vw;
  height: 0px;
  flex: 1;

  @media (max-width: 671px) {
    margin-top: 8.5vh;
  }
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

  @media (max-width: 671px) {
    margin-right: 9.6vw;
    margin-left: 9.6vw;
    margin-top: 3.4vh;
  }
`;

export const Form = styled(FormRock)`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  @media (max-width: 671px) {
    padding-top: 5vh;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.17);
    border-radius: 5px;
    width: 91.73vw;
    height: 77.8vh;
    margin-top: 4.49vh;
  }
`;
