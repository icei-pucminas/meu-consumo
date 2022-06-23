/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import AppLayout from "../../layout/App/AppLayout";
import styles from "./styles.module.scss";

import IconEnergy from "../../assets/img/icon-energy-cicle.png";
import IconTip from "../../assets/img/icon-tip-energy.png";
import Button from "../../components/Button";
import Swal from "sweetalert2";
import showErrorDialog from "../../utils/alerts/ErrorAlert";
import showSaveAlert from "../../utils/alerts/SaveAlert";
import showDevicesSuggestions from "../../utils/alerts/DevicesInfo";
import { useNavigate } from "react-router-dom";
import ConsumData from "../../utils/interfaces/ConsumData";
import { dataAtualFormatada } from "../../utils/functions/formatData";
import ConsumDataService from "../../services/ConsumDataService";
import { ConsumptionTypeEnum } from "../../utils/enums/ConsumptionTypeEnum";

export default function Home() {
  const [watts, setWatts] = useState(0);
  const [consumPerhour, setConsumPerhour] = useState(0);
  const [time, setTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [price, setPrice] = useState(0);
  const [isRequired, setIsRequired] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/calculadora-energia");
  }

  useEffect(() => {
    if (isCalculating && watts) {
      setTimeout(() => {
        setTime(time + 1);
        setMinutes(Math.floor(time / 60));
        setSeconds(Math.floor(time % 60));
        const timeInHours = time / 3600;
        const consum = (watts / 1000) * timeInHours;
        const consumPrice = consum * 0.618;
        setConsumPerhour(consum);
        setPrice(consumPrice);
      }, 1000);
    }
  }, [isCalculating, time]);

  const startCount = () => {
    if (!watts) {
      setIsRequired(true);
      showErrorDialog(
        "Erro!",
        "É necessário informar uma potência para calcular o consumo!",
        "Certo!",
        "#CFA200"
      );
      return;
    }
    setIsRequired(false);
    setIsCalculating(true);
  };

  const stopCount = () => {
    setIsCalculating(false);
  };

  const showSuggestions = () => {
    showDevicesSuggestions();
  };

  const saveData = () => {
    const consumData: ConsumData = {
      consum: `${consumPerhour.toFixed(3)} kWh`,
      date: dataAtualFormatada(),
      value: `R$ ${price.toFixed(3)}`,
      type: ConsumptionTypeEnum.ENERGIA,
    }
    ConsumDataService.setData(consumData);
    Swal.fire('Operação reliazada com sucesso!', '', 'info');
    resetForm();
  };

  const reset = () => {
    Swal.fire('Dados de consumo não foram salvos!', '', 'info');
    resetForm();
  };

  const finalize = () => {
    stopCount();
    const consumo =  `${consumPerhour.toFixed(3)} kWh`;
    const valor = `R$ ${price.toFixed(3)}`;
    showSaveAlert(saveData, reset, consumo, valor);
  };

  const pause = () => {
    stopCount();
  };

  const resetForm = () => {
    setTime(0);
    setWatts(0);
    setConsumPerhour(0);
    setMinutes(0);
    setSeconds(0);
    setPrice(0);
    setIsCalculating(false);
  };

  const maxLengthCheck = (maxLength: number, e: any) => {
    const wattsValue = e.currentTarget.value;
    setWatts(+wattsValue.slice(0, maxLength));
  }

  return (
    <AppLayout
      primaryColorBackground="#FFC700"
      secondaryColorBackground="#EDB900"
      menuColor={"#CFA200da"}
      imageLayout={IconEnergy}
      pageTitle="Energia"
      imageDescription="Um raio de energua em volta de uma seta representando o consumo de energia."
    >
      <div className={styles.wrapper}>
        <div className={styles.inputDetails}>
          <input
            className={styles.inputField}
            type="number"
            id="watts"
            placeholder="Potência (Watts)"
            name="watts-input"
            disabled={time > 0}
            value={watts ? watts : ""}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              maxLengthCheck(5, e)
              setIsRequired(false);
            }}
          />
          <img
            src={IconTip}
            alt="Uma lampâda simbolizando uma dica de uso"
            onClick={showSuggestions}
          />
        </div>
        {isRequired && (
          <small className={styles.requiredField}>Campo obrigatório</small>
        )}

        <div className={styles.costDetails}>
          <h3>
            <span className={minutes > 0 ? styles.colorYellow : ""}>
              {minutes > 9 ? minutes : `0${minutes}`}
            </span>
            :
            <span className={seconds || minutes > 0 ? styles.colorYellow : ""}>
              {seconds > 9 ? seconds : `0${seconds}`}
            </span>
          </h3>
          <p className={styles.cost}>
            Valor <span>R$ {price ? `${price.toFixed(3)}` : "00,000"}</span>
          </p>
          <p className={styles.watts}>
            Consumo{" "}
            <span>
              {consumPerhour ? consumPerhour.toFixed(3) : "0,000"} kWh
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
              backgroundColor="#EDB900"
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
              onClick={pause}
              fullWidth
            >
              Pausar
            </Button>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
