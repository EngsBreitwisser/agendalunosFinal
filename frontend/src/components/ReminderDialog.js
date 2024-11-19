// frontend/src/components/ReminderDialog.js
import React, { useState } from 'react';

const ReminderDialog = ({ onClose, onSave }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [description, setDescription] = useState('');
  const [hour, setHour] = useState('');

  const handleSave = () => {
    // Valida os campos antes de salvar
    if (!month || !day || !description || !hour) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    onSave({ mes: parseInt(month), diaDoMes: parseInt(day), descricao: description, horaInicial: parseInt(hour) });
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <h2>Adicionar Lembrete</h2>
        {/* Seleção do mês */}
        <label>Mês:</label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="">Selecione o mês</option>
          {[...Array(12).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        {/* Seleção do dia */}
        <label>Dia:</label>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          <option value="">Selecione o dia</option>
          {[...Array(31).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>

        {/* Entrada para a descrição */}
        <label>Descrição:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do lembrete"
        />

        {/* Seleção do horário */}
        <label>Hora:</label>
        <select value={hour} onChange={(e) => setHour(e.target.value)}>
          <option value="">Selecione a hora</option>
          {[...Array(24).keys()].map((i) => (
            <option key={i} value={i}>{`${i}:00`}</option>
          ))}
        </select>

        {/* Botões de salvar e cancelar */}
        <button onClick={handleSave}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default ReminderDialog;
