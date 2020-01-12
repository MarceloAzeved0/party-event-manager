import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';

import {
  Container,
  NewEvent,
  MonthTitle,
  ContentTitle,
  SideSchedule,
  ScheduleContainer,
  ScheduleWeek,
  ColumnContent,
} from './styles';

export default function Schedule() {
  const [week, setWeek] = useState(0);

  return (
    <Container>
      <ContentTitle>
        <MonthTitle>
          {moment()
            .subtract(week, 'week')
            .locale('pt-br')
            .format('MMMM')}
        </MonthTitle>
        <NewEvent>
          <p>Novo Evento</p>
        </NewEvent>
      </ContentTitle>
      <ScheduleContainer>
        <SideSchedule>
          <img
            src={LeftArrow}
            alt="arrow left"
            onClick={() => setWeek(week + 1)}
          />
        </SideSchedule>
        <ScheduleWeek>
          <ColumnContent>1</ColumnContent>
          <ColumnContent>2</ColumnContent>
          <ColumnContent>3</ColumnContent>
          <ColumnContent>4</ColumnContent>
          <ColumnContent>4</ColumnContent>
          <ColumnContent>6</ColumnContent>
          <ColumnContent>7</ColumnContent>
        </ScheduleWeek>
        <SideSchedule>
          <img
            src={RightArrow}
            alt="arrow right"
            onClick={() => setWeek(week - 1)}
          />
        </SideSchedule>
      </ScheduleContainer>
    </Container>
  );
}
