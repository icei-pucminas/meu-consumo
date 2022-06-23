import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { FaLock } from "react-icons/fa";
import CreateAccountService from "../../services/CreateAccountService";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styles from "./styles.module.scss";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateRequired, setValidateRequired] = useState(false);

  const validateFields = () => {
    if (!input || !email || !password || !confirmPassword) {
      setValidateRequired(true);
      return false;
    }
    setValidateRequired(false);
    return true;
  }

  const singUp = async (event: any) => {
    event.preventDefault();
    validateFields();
    if (validateFields() && isPasswordValid()) {
      try {
        localStorage.setItem("userName", input);
        localStorage.setItem("userEmail", email);
        const dataLogin = {
          name: input,
          password: password,
          confirmPassword: confirmPassword,
          email: email
        }
        const responseData = (await CreateAccountService.signUp(dataLogin));
        navigate('/login')
      } catch(erro: any) {
          console.error("Erro na requisição com status: ", erro.response.status);
      }
    }
  }

  const validateEmail = () => {
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){ 
        Swal.fire({
          title: 'E-mail inválido!',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#17A1AF',
        })        
        setEmail('');
     }
  }

  const isPasswordValid = () : boolean =>  {
    console.log(password, confirmPassword)
    if (password !== confirmPassword) {
      Swal.fire({
        title: 'Senhas não coincidem!',
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#17A1AF',
      })   
      return false;
    }
    return true;
  }

  const showUseTerms = () => {
    Swal.fire('Termos de Uso')
  }


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
          <h1>Cadastro</h1>
        </div>
        <div className={styles.inputsWrapper}>
          <Input
            label="Username"
            name="username"
            type="text"
            value={input}
            icon="fa-user"
            iconColor="#1EB6C6"
            placeholder="Nome"
            error={validateRequired && !input}
            onBlur={() => {}}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setInput(e.currentTarget.value)
            }
          />
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            icon="fa-at"
            iconColor="#1EB6C6"
            placeholder="Email"
            error={validateRequired && !email}
            onBlur={validateEmail}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setEmail(e.currentTarget.value)
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
          <Input
            label="Confirmar Senha"
            name="confirm-password"
            type="password"
            value={confirmPassword}
            icon="fa-lock"
            iconColor="#1EB6C6"
            placeholder="Confirmar Senha"
            error={validateRequired && !confirmPassword}
            onBlur={() => {}}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setConfirmPassword(e.currentTarget.value)
            }
          />
          <div>
            <span className={styles.terms}>
              Ao prosseguir eu concordo com os{" "}
              <div className={styles.bold} onClick={showUseTerms}>Termos de Uso <FaLock /></div>
            </span>
            <Link to={"/login"} className={styles.forgetPass}>
              Já possui uma conta ?
            </Link>
          </div>
        </div>
        <div className={styles.loginButtonWrapper}>
          <Button fullWidth rounded onClick={singUp}>
            Criar Conta
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
