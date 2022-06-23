import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Swal from "sweetalert2";
import AppLayout from "../../layout/App/AppLayout";
import showSaveAlert from "../../utils/alerts/SaveAlert";
import styles from "./styles.module.scss";
import { flowRateDefaultValues } from "../../utils/enums/ConsumptionCategoryEnum";
import { useNavigate } from "react-router-dom";
import ConsumData from "../../utils/interfaces/ConsumData";
import { dataAtualFormatada } from "../../utils/functions/formatData";
import { ConsumptionTypeEnum } from "../../utils/enums/ConsumptionTypeEnum";
import ConsumDataService from "../../services/ConsumDataService";

type Props = {
  type: string;
  icon: string;
  pageSubtitle: string;
};

export default function TipoConsumoAgua({ type, icon, pageSubtitle }: Props) {
  const flowRate = Boolean(localStorage.getItem(type)) ? localStorage.getItem(type) : flowRateDefaultValues[type];
  const [consumPerMinute, setConsumPerMinute] = useState(0);
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [price, setPrice] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/calculadora-agua");
  }

  useEffect(() => {
    if (isCalculating) {
      setTimeout(() => {
        setTime(time + 1);
        setMinutes(Math.floor(time / 60));
        setSeconds(Math.floor(time % 60));
        if(flowRate) {
          const consumPerSecond = +flowRate / 60;
          const actualCosumValue = consumPerMinute + consumPerSecond;
          const price = actualCosumValue * 0.0044;
          setPrice(price);
          setConsumPerMinute(actualCosumValue);
        }
      }, 1000);
    }
  }, [isCalculating, time, flowRate, consumPerMinute]);
  
  const startCount = () => {
    setIsCalculating(true);
  }

  const stopCount = () => {
    setIsCalculating(false);
  }

  const saveData = () => {
    const data : ConsumData = {
      consum: `${consumPerMinute.toFixed(3)} l`,
      date: dataAtualFormatada(),
      value: `R$ ${price.toFixed(3)} `,
      type: ConsumptionTypeEnum.AGUA,
    }
    ConsumDataService.setData(data);
    Swal.fire('Operação reliazada com sucesso!', '', 'info');
    reset();
  }

  const reset = () => {
    setTime(0);
    setMinutes(0);
    setSeconds(0);
    setConsumPerMinute(0);
    setPrice(0);
  }

  const finalize = () => {
    stopCount();
    const consumo =  `${consumPerMinute.toFixed(3)} l`;
    const valor = `R$ ${price.toFixed(3)}`;
    showSaveAlert(saveData, reset, consumo, valor)

  }
  
  return (
    <AppLayout
      primaryColorBackground="#1C86AE"
      secondaryColorBackground="#249FCE"
      menuColor={"#145E7Bda"}
      imageLayout={icon}
      imageDescription={type}
      pageTitle="Água"
      pageSubtitle={pageSubtitle}
    >
      <section className={styles.wrapper}>
        <div className={styles.flowRateInfo}>
          <h2>{flowRate} l/min</h2>
        </div>

        <div className={styles.costDetails}>
          <h3>
            <span className={minutes > 0 ? styles.colorBlue : ""}>
              {minutes > 9 ? minutes : `0${minutes}`}
            </span>
            :
            <span className={seconds || minutes > 0 ? styles.colorBlue : ""}>
              {seconds > 9 ? seconds : `0${seconds}`}
            </span>
          </h3>
          <p className={styles.cost}>
            Valor <span>R$ {price ? `${price.toFixed(3)}` : "00,000"}</span>
          </p>
          <p className={styles.watts}>
            Consumo{" "}
            <span>
              {consumPerMinute ? consumPerMinute.toFixed(3) : "0,000"} l
            </span>
          </p>
        </div>

        <div className={styles.pageActions}>
          {!isCalculating && time === 0 ? (
            <Button
              backgroundColor="#1EB6C6"
              rounded
              tabIndex={0}
              textColor="#fff"
              onClick={handleClick}
              fullWidth
            >
              Calculadora
            </Button>
          ) : (
            <Button
              backgroundColor="#169F34"
              rounded
              tabIndex={0}
              textColor="#fff"
              onClick={finalize}
              fullWidth
            >
              Salvar
            </Button>
          )}

          {!isCalculating ? (
            <Button
              backgroundColor="#26AADD"
              rounded
              tabIndex={0}
              textColor="#fff"
              onClick={startCount}
              fullWidth
            >
              Iniciar
            </Button>
          ) : (
            <Button
              backgroundColor="#A9A9A9"
              rounded
              tabIndex={0}
              textColor="#fff"
              fullWidth
              onClick={stopCount}
            >
              Pausar
            </Button>
          )}
        </div>
      </section>
    </AppLayout>
  );
}
