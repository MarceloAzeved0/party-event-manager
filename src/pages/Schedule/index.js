/* eslint-disable no-plusplus */
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
  CircleDay,
  Content,
  ContentLine,
  Title,
  Line,
  LineVert,
} from './styles';

export default function Schedule() {
  const [week, setWeek] = useState(0);
  const days = [
    '',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
    'Domingo',
  ];

  const createTable = () => {
    const table = [];

    for (let i = 0; i < 7; i++) {
      table.push(
        <>
          <ColumnContent>
            <CircleDay>
              <p>
                {moment()
                  .subtract(week, 'weeks')
                  .startOf('monday')
                  .add(i, 'days')
                  .format('D')
                  .toString()
                  .padStart(2, '0')}
              </p>
            </CircleDay>
            <Content>
              <Title>
                {
                  days[
                    moment()
                      .subtract(week, 'weeks')
                      .startOf('monday')
                      .add(i, 'days')
                      .isoWeekday()
                  ]
                }
              </Title>
            </Content>
            <ContentLine>
              <Line />
            </ContentLine>
          </ColumnContent>
          {i === 6 ? '' : <LineVert />}
        </>
      );
    }

    return table;
  };

  console.tron.log(
    moment()
      .subtract(1, 'weeks')
      .startOf('isoWeek')
      .format('')
  );
  console.tron.log(
    moment()
      .subtract(1, 'weeks')
      .endOf('isoWeek')
      .format('')
  );

  return (
    <Container>
      <ContentTitle>
        <MonthTitle>
          {moment()
            .subtract(week, 'weeks')
            .startOf('monday')
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
        <ScheduleWeek>{createTable()}</ScheduleWeek>
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
