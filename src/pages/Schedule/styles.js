import styled from 'styled-components';
import { Form as FormRock, Select } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.modalIsOpen ? 'opacity 0.5' : '')};
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

export const ContentInput = styled.div`
  height: 19.2vh;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 3.4vw;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const MonthTitle = styled.h1`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3.7rem;
  margin-left: 11vw;
  margin-top: 7vh;
  margin-bottom: 2.8vh;
  /* identical to box height */

  text-align: center;

  width: 10vw;
  height: 3.6vh;

  color: #565656;
`;

export const NewEvent = styled.button`
  width: 14.3vw;
  min-width: 122px;
  height: 4.8vh;
  background: #f180c1;
  border-radius: 5px;
  margin-right: 11.8vw;
  margin-top: 7.2vh;
  margin-bottom: 3.1vh;

  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.5rem;
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
  width: 77vw;
  min-height: 550px;
  height: 68vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

export const SideSchedule = styled.div`
  width: 5.5vw;
  height: 68vh;
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
  margin-left: -4.8vw;
`;

export const LeftImage = styled.button`
  margin-right: -4.8vw;
`;
export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100vh;
  align-items: center;
  /* flex: 1; */
`;

export const CircleDay = styled.div`
  background: #f5a7d4;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    line-height: 3.7rem;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const ContentLine = styled.div`
  /* background-color: #000000; */
  margin-top: 3.2vh;
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
  margin-top: 3.1vh;
  flex-direction: row;
`;

export const ContentLabel = styled.div`
  /* background-color: #000000; */
  display: flex;
  margin-top: 3.8vh;

  flex-direction: row;
`;
export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50vw;
  margin-left: 0px;
`;

export const Title = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.5rem;
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
  max-width: 156px;
  width: 8.3vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  text-align: center;

  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2vh;
    line-height: 2rem;
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
  width: 8.3vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const TitleModal = styled.h1`
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3.7rem;
  text-align: center;
  margin-bottom: 5.85vh;
  color: #f883ba;
`;

export const AddEvent = styled.button`
  background: linear-gradient(101deg, #f180c1 4.55%, #a450c9 95.79%);
  border-radius: 5px;
  width: 32.1vw;
  margin-left: 2.4vw;
  margin-top: 2.1vw;
  height: 8.17vh;
  p {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3rem;
    text-align: center;

    color: #ffffff;
  }
`;

export const SelectDayShift = styled(Select)`
  width: 15.6vw;
  height: 6.5vh;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2rem;
  padding: 1.2rem;
  text-align: center;

  color: #ee7ec2;
  option {
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: center;

    color: #cccccc;
  }
`;

export const TextEvent = styled.p`
  font-family: Quicksand;
  font-style: normal;
  font-weight: ${props => (props.bold ? 'bold' : '')};
  font-size: 1.6rem;
  line-height: 2rem;

  color: #ffffff;
`;

export const BoxEvent = styled.div`
  width: 8.3vw;
  height: 15vh;
  background: #f5a7d4;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
