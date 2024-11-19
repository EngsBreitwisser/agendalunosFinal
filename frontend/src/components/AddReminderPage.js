import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddReminderPage.css';

const AddReminderPage = ({ userEmail }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [description, setDescription] = useState('');
  const [hour, setHour] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!month || !day || !description || !hour) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/agenda/reminder', {
        emailUsuario: userEmail,
        mes: parseInt(month),
        diaDoMes: parseInt(day),
        descricao: description,
        horaInicial: parseInt(hour),
      });

      alert('Lembrete salvo com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar o lembrete:', error);
      alert('Erro ao salvar o lembrete.');
    }
  };

  return (
    <div className="add-reminder-container">
      <div className="add-reminder-box">
        <h2>Adicionar Lembrete</h2>
        <form>
          <label>Mês:</label>
          <select value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">Selecione o mês</option>
            {[...Array(12).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <label>Dia:</label>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Selecione o dia</option>
            {[...Array(31).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>

          <label>Descrição:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição do lembrete"
          />

          <label>Hora:</label>
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            <option value="">Selecione a hora</option>
            {[...Array(24).keys()].map((i) => (
              <option key={i} value={i}>{`${i}:00`}</option>
            ))}
          </select>

          <div className="button-group">
            <button type="button" onClick={handleSave}>Salvar</button>
            <button type="button" onClick={() => navigate('/')}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReminderPage;
