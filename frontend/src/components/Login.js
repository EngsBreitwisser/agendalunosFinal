import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/login.css'; // Ajuste o caminho conforme necessário


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email });
      console.log("Resposta do servidor:", response.data);

      onLogin(email);

      navigate("/home");
    } catch (error) {
      console.error('Erro de login:', error);
    }
  };

  return (
    <div className="login-container">
      <header>
        <h1>Agendalunos</h1>
      </header>
      <div className="login-box">
        <h2>Login/Cadastro</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <footer>
        <p>
Desenvolvido por: 
        <a href="https://www.instagram.com/bruno_breitwisser/" target="_blank" rel="noopener noreferrer">
          Bruno Breitwisser
        </a>
        &
        <a href="https://www.instagram.com/nhoffmaiadeoliveira/" target="_blank" rel="noopener noreferrer">Nathaly Hoffmann
        </a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
