import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import AuthService from "../../services/AuthsService";
import LoginService from "../../services/LoginService";
import styles from "./styles.module.scss";
import showErrorDialog from "../../utils/alerts/ErrorAlert";

const SignIn = () => {
  const navigate = useNavigate();
  const [validateRequired, setValidateRequired] = useState(false);
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const signIn = async (event: any) => {
    event.preventDefault();
    if (!input || !password) {
      showErrorDialog(
        "Campos faltantes!",
        "Verifique se todos os campos foram preenchidos"
      );
      return;
    }
    try {
      localStorage.setItem("userEmail", input);
      localStorage.getItem("userName");
      const dataLogin = {
        email: input,
        password: password,
      };
      const responseData = await LoginService.signIn(dataLogin);
      AuthService.setToken(responseData);
      if (responseData)
        navigate("/");
    } catch (erro: any) {
      if (erro.response.status === 403) {
        setShowError(true);
      }
      console.error("Erro na requisição com status: ", erro.response.status);
    }
  };

  const validateEmail = () => {
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(input)) {
      showErrorDialog("E-mail inválido!", "Verique o E-mail digitado");
      setInput("");
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.infoPage}>
          <img
            src={Logo}
            alt="Logo meu consumo, uma mão envolta de uma gota água simbolizando o consumo"
            onClick={() => navigate("/")}
            tabIndex={0}
            aria-label="Clique para voltar para a página inicial"
          />
          <h1>Login</h1>
        </div>
        {showError && (
          <div className={styles.cardError}>
            Verifique suas credenciais e tente novamente!
          </div>
        )}

        <div className={styles.inputsWrapper}>
          <Input
            label="E-mail"
            name="username"
            type="text"
            value={input}
            icon="fa-user"
            iconColor="#1EB6C6"
            placeholder="Digite aqui seu e-email"
            error={validateRequired && !input}
            onBlur={validateEmail}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setInput(e.currentTarget.value)
            }
          />
          <Input
            label="Senha"
            name="password"
            type="password"
            value={password}
            icon="fa-lock"
            iconColor="#1EB6C6"
            placeholder="Senha"
            error={validateRequired && !password}
            onBlur={() => {}}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
          />
          <div>
            <Link to={"/cadastrar"} className={styles.forgetPass}>
              Cadastre-se
            </Link>
          </div>
        </div>
        <div className={styles.loginButtonWrapper}>
          <Button fullWidth rounded onClick={signIn}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
