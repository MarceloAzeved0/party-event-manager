/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';

import {
  Available,
  Container,
  NewEvent,
  MonthTitle,
  ContentTitle,
  SideSchedule,
  ScheduleContainer,
  ScheduleWeek,
  ColumnContent,
  ContentAvailable,
  RightImage,
  LeftImage,
  CircleDay,
  Content,
  ContentLine,
  Title,
  Line,
  LineVert,
  NotAvailable,
} from './styles';

export default function Schedule() {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.user.data);
  console.tron.log('teste', userData);
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

  const listEvents = working => {
    const dayShift = ['morning', 'afternoon', 'night'];

    const lines = [];
    let workingShift = false;
    for (let i = 0; i < 3; i++) {
      workingShift = false;
      if (userData.day_shift.includes(dayShift[i])) {
        workingShift = true;
      }

      lines.push(
        <ContentAvailable>
          {working && workingShift ? (
            <Available />
          ) : (
            <NotAvailable>
              <p> NÃO DISPONÍVEl</p>
            </NotAvailable>
          )}
        </ContentAvailable>
      );
    }
    return lines;
  };

  const createTable = () => {
    const dayOfWeek = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ];
    const table = [];
    let working = false;

    for (let i = 0; i < 7; i++) {
      working = false;
      if (userData.week_days.includes(dayOfWeek[i])) {
        working = true;
      }
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
            {listEvents(working)}
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
          <LeftImage onClick={() => setWeek(week + 1)}>
            <img src={LeftArrow} alt="arrow left" />
          </LeftImage>
        </SideSchedule>
        <ScheduleWeek>{createTable()}</ScheduleWeek>
        <SideSchedule>
          <RightImage onClick={() => setWeek(week - 1)}>
            <img src={RightArrow} alt="arrow right" />
          </RightImage>
        </SideSchedule>
      </ScheduleContainer>
    </Container>
  );
}
