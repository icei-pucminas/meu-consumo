import AppLayout from "../../layout/App/AppLayout";
import styles from "./styles.module.scss";

import AccessDeniedPerson from "../../assets/img/person_access_denied.svg";
import { Link } from "react-router-dom";

export default function AcessoNegado() {
  return (
    <AppLayout
      primaryColorBackground="#B94841"
      secondaryColorBackground="#A93029"
      menuColor={"#145E7Bda"}
      pageTitle="Acesso negado"
    >
      <div className={styles.main}>
        <img src={AccessDeniedPerson} alt="Pessoa representado acesso negado"/>
        <div className={styles.text}>
            <span >Ops... Você não tem permissão para acessar esse recurso.</span>
            <span className={styles.linkWrapper}>
                Faça
                <Link className={styles.link} to="/login"> Login </Link>
                ou
                <Link className={styles.link} to="/cadastrar">  Cadastre-se </Link>
            </span>
        </div>  
      </div>
    </AppLayout>
  );
}
