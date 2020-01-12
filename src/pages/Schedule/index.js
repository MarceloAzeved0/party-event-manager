/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';
import Modal from 'react-modal';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { Label } from '../../components/label';
import { Input } from '../../components/input';

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
  Form,
  ContentAvailable,
  RightImage,
  LeftImage,
  CircleDay,
  Content,
  ContentLine,
  Title,
  Line,
  LineVert,
  TitleModal,
  AddEvent,
  NotAvailable,
} from './styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '567px',
    height: '829px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.17)',
    borderRadius: '5px',
  },
};

export default function Schedule() {
  const dispatch = useDispatch();

  const userData = useSelector(state => state.user.data);
  console.tron.log('teste', userData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
      if (userData.day_shift && userData.day_shift.includes(dayShift[i])) {
        workingShift = true;
      }

      lines.push(
        <ContentAvailable>
          {working && workingShift ? (
            <Available />
          ) : (
            <NotAvailable>
              <p> NÃO DISPONÍVEL</p>
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
      if (userData.week_days && userData.week_days.includes(dayOfWeek[i])) {
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

  return (
    <Container modalIsOpen={modalIsOpen}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <Content>
          <TitleModal>Cadastrar Evento</TitleModal>
        </Content>
        <Form>
          <Content>
            <Label>Nome do Evento</Label>
          </Content>
          <Content>
            <Input type="text" name="name" />
          </Content>
          <Content>
            <Label>Local</Label>
          </Content>
          <Content>
            <Input type="text" name="local" />
          </Content>
          <Content>
            <Label>Data</Label>
            <Label>Turno</Label>
          </Content>
          <Content>
            <Input type="data" name="data" />
            <Input type="data" name="data" />
          </Content>
          <Content>
            <AddEvent>
              <p>Adicionar Evento</p>
            </AddEvent>
          </Content>
        </Form>
      </Modal>
      <ContentTitle>
        <MonthTitle>
          {moment()
            .subtract(week, 'weeks')
            .startOf('monday')
            .locale('pt-br')
            .format('MMMM')}
        </MonthTitle>
        <NewEvent type="button" onClick={() => setModalIsOpen(true)}>
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
