/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'moment/locale/en-SG';
import Modal from 'react-modal';
import { Creators } from '../../store/ducks/modules/events';
import LeftArrow from '../../assets/leftArrow.svg';
import RightArrow from '../../assets/rightArrow.svg';
import { Label } from '../../components/label';
import { Input } from '../../components/input';
import {
  Available,
  BoxEvent,
  Container,
  NewEvent,
  MonthTitle,
  ContentTitle,
  SelectDayShift,
  SideSchedule,
  ScheduleContainer,
  ContentLabel,
  ScheduleWeek,
  ColumnContent,
  Form,
  TextEvent,
  ContentAvailable,
  RightImage,
  LeftImage,
  CircleDay,
  DivColumn,
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
  const userData = useSelector(state => state.user.data);
  const events = useSelector(state => state.event.events);

  const dispatch = useDispatch();
  Modal.setAppElement('#root');

  useEffect(() => {
    async function eventsFunction() {
      await dispatch(Creators.listEvents(userData.id));
    }
    eventsFunction();
  }, [dispatch, userData.id]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleSubmit = data => {
    const dataPayload = {
      ...data,
      user_id: userData.id,
      date: moment(data.date).format('X'),
      week_day: moment(data.date)
        .locale('en-SG')
        .format('dddd'),
    };
    dispatch(Creators.createEvent(dataPayload));

    setModalIsOpen(false);
  };

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

  const listEvents = (working, eventsMarked) => {
    const dayShift = ['morning', 'afternoon', 'night'];
    const lines = [];
    let eventSelected = {};
    let eventShiftMarked = false;
    let workingShift = false;
    for (let i = 0; i < 3; i++) {
      workingShift = false;
      eventShiftMarked = false;
      if (userData.day_shift && userData.day_shift.includes(dayShift[i])) {
        workingShift = true;
        if (eventsMarked && eventsMarked.length) {
          for (const element of eventsMarked) {
            if (element.day_shift === dayShift[i]) {
              eventSelected = element;
              eventShiftMarked = true;
              break;
            }
          }
        }
      }

      lines.push(
        <ContentAvailable>
          {working && workingShift ? (
            eventShiftMarked ? (
              <BoxEvent>
                <ColumnContent>
                  <Content>
                    <TextEvent bold>{eventSelected.name}</TextEvent>
                  </Content>
                  <Content>
                    <TextEvent>{eventSelected.address}</TextEvent>
                  </Content>
                </ColumnContent>
              </BoxEvent>
            ) : (
              <Available />
            )
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

  const createTable = useCallback(() => {
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
    let eventsMarked = [];
    for (let i = 0; i < 7; i++) {
      eventsMarked = [];
      working = false;
      if (userData.week_days && userData.week_days.includes(dayOfWeek[i])) {
        working = true;
      }

      const date2 = moment()
        .subtract(week, 'weeks')
        .startOf('monday')
        .add(i, 'days')
        .format('YYYY-MM-DD');

      const dateMoment = moment(date2).format('X');

      if (events && events.length) {
        for (const element of events) {
          if (element.date === dateMoment) {
            eventsMarked.push(element);
          }
        }
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
            {listEvents(working, eventsMarked)}
          </ColumnContent>
          {i === 6 ? '' : <LineVert />}
        </>
      );
    }

    return table;
  });

  useEffect(() => {
    createTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

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
        <Form onSubmit={handleSubmit}>
          <Content>
            <Label>Nome do Evento</Label>
          </Content>
          <Content>
            <Input type="text" name="name" autocomplete="off" />
          </Content>
          <Content>
            <Label>Local</Label>
          </Content>
          <Content>
            <Input type="text" name="address" autocomplete="off" />
          </Content>
          <ContentLabel>
            <DivColumn>
              <Label>Data</Label>
            </DivColumn>
            <DivColumn>
              <Label>Turno</Label>
            </DivColumn>
          </ContentLabel>
          <ContentLabel>
            <DivColumn>
              <Input width={192} height={68} type="date" name="date" />
            </DivColumn>
            <DivColumn>
              <SelectDayShift
                options={[
                  { id: 'morning', title: 'morning' },
                  { id: 'afternoon', title: 'afternoon' },
                  { id: 'night', title: 'night' },
                ]}
                name="day_shift"
              />
            </DivColumn>
          </ContentLabel>
          <Content>
            <AddEvent type="submit">
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
