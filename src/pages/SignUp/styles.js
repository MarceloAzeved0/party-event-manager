import styled from 'styled-components';
import { Form as FormRock } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
`;

export const ContentCol = styled.div`
  /* background-color: #000000; */
  display: flex;
  flex-direction: column;
  width: 54%;
  height: 94%;
`;

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 45px;

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
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 49px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ContentTitle = styled.div`
  /* background-color: #000000; */
  height: 200px;
  margin-top: 96px;
  margin-left: 49px;
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
  height: 200px;
  margin-top: 54px;
  margin-bottom: 10px;
  margin-left: 49px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const ButtonLogin = styled.button`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  color: #ffffff;

  width: 490px;
  height: 70px;
  left: 720px;
  top: 545px;

  background: linear-gradient(104.06deg, #f180c1 4.55%, #a450c9 95.79%);
  border-radius: 5px;
`;
