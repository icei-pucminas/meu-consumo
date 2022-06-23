import './styles.css';
import LoginService from "../../services/LoginService";
import React from 'react';
import AuthService from '../../services/AuthsService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [dataLogin, setDatalogin] = React.useState({
        email: "",
        password: "",
      });

  const signIn = async (event) => {
    event.preventDefault();
    try {
      const responseData = (await LoginService.signIn(dataLogin));
      AuthService.setToken(responseData);
      navigate('/')
    } catch(erro) {
        console.error("Erro na requisição com status: ", erro.response.status);
    }
  }

  function handleInputs({ target }) {
    const { value, name } = target;
    const clone = { ...dataLogin };
    clone[name] = value;
    setDatalogin(clone);
  }

  return (
    <div className="login">
        <h1>Login</h1>
        <form className="form" onSubmit={signIn}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={handleInputs}
            name="email"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={handleInputs}
            name="password"
            required
          />
          <button type="submit">Login</button>
        </form>
    </div>
  );
}
