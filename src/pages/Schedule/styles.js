import styled from 'styled-components';
import { Form as FormRock } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.modalIsOpen ? 'rgba(0, 0, 0, 0.5)' : '')};
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

export const ContentTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const MonthTitle = styled.h1`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  margin-left: 160px;
  margin-top: 73px;
  margin-bottom: 30px;
  /* identical to box height */

  text-align: center;

  width: 152px;
  height: 38px;

  color: #565656;
`;

export const NewEvent = styled.button`
  width: 207px;
  height: 50px;
  background: #f180c1;
  border-radius: 5px;
  margin-right: 170px;
  margin-top: 75px;
  margin-bottom: 32px;

  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
`;

export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ScheduleWeek = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 1110px;
  height: 708px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const SideSchedule = styled.div`
  width: 80px;
  height: 708px;
  background: #ffffff;
  margin-right: -10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
  }
`;

export const RightImage = styled.button`
  margin-left: -70px;
`;

export const LeftImage = styled.button`
  margin-right: -70px;
`;
export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  align-items: center;
  /* flex: 1; */
`;

export const CircleDay = styled.div`
  background: #f5a7d4;
  width: 53px;
  height: 58px;
  border-radius: 50%;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const ContentLine = styled.div`
  /* background-color: #000000; */
  margin-top: 36px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Content = styled.div`
  /* background-color: #000000; */
  display: flex;
  margin-top: 34px;
  flex-direction: row;
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #565656;
`;

export const Line = styled.div`
  background: #565656;
  opacity: 0.9;
  border-radius: 10px;
  /* transform: rotate(-90deg); */
  height: 4px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const LineVert = styled.div`
  width: 4px;
  background: #f4f4f4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ContentAvailable = styled.div`
  /* background-color: #000000; */
  display: flex;
  margin-top: 14px;
  flex-direction: row;
`;

export const NotAvailable = styled.div`
  background: rgba(196, 196, 196, 0.3);
  border-radius: 5px;
  width: 120px;
  height: 156px;
  display: flex;
  justify-content: center;
  text-align: center;

  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;

    opacity: 0.3;
  }
`;

export const Available = styled.div`
  border-radius: 5px;
  width: 120px;
  height: 156px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const TitleModal = styled.h1`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  margin-bottom: 61px;
  color: #f883ba;
`;

export const AddEvent = styled.button`
  background: linear-gradient(101deg, #f180c1 4.55%, #a450c9 95.79%);
  border-radius: 5px;
  width: 462px;
  margin-left: 35px;
  height: 85px;
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 30px;
    text-align: center;

    color: #ffffff;
  }
`;
