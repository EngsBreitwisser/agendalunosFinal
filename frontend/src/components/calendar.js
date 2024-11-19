// frontend/src/components/CalendarComponent.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import axios from 'axios';

const CalendarComponent = ({ userEmail }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchUserAgenda = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/agenda/${userEmail}`);
        const agenda = response.data;

        const events = agenda.meses.flatMap((mes) =>
          mes.dias.flatMap((dia) =>
            dia.lembretes.map((lembrete) => ({
              title: lembrete.descricao,
              start: new Date(
                agenda.ano,
                mes.mes - 1,
                dia.diaDoMes,
                new Date(lembrete.horaInicial).getHours(),
                new Date(lembrete.horaInicial).getMinutes()
              ),
              backgroundColor: '#008080',
            }))
          )
        );

        setEvents(events);
      } catch (error) {
        console.error('Erro ao buscar a agenda do usuário:', error);
      }
    };

    fetchUserAgenda();
  }, [userEmail]);

  return (
    <div id="calendar">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <Link to="/add-reminder" style={{ textDecoration: 'none', color: 'white' }}>
          <button>Adicionar Lembrete</button>
        </Link>
      </div>
      
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={ptBrLocale}
        events={events}
      />
    </div>
  );
};

export default CalendarComponent;
