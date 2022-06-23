import styles from "./styles.module.scss";
import AppLayout from "../../layout/App/AppLayout";
import IconCalculator from "../../assets/img/icon-calculator.png";
import InputMask from "react-input-mask";
import { useState } from "react";
import Button from "../../components/Button";
import showErrorDialog from "../../utils/alerts/ErrorAlert";
import showSaveAlert from "../../utils/alerts/SaveAlert";
import Swal from "sweetalert2";
import ConsumData from "../../utils/interfaces/ConsumData";
import { ConsumptionTypeEnum } from "../../utils/enums/ConsumptionTypeEnum";
import { dataAtualFormatada } from "../../utils/functions/formatData";
import ConsumDate from "../../services/ConsumDataService";


export default function CalculadoraAgua() {
  const [flowRate, setFlowRate] = useState("");
  const [price, setPrice] = useState(0);
  const [consumPerMinute, setConsumPerMinute] = useState(0);
  const [time, setTime] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);

  function hmsToSecondsOnly(str: string) {
    let p = str.split(":"),
      s = 0,
      m = 1;

    while (p.length > 0) {
      s += m * parseInt(p.pop() as string, 10);
      m *= 60;
    }

    return s;
  }

  const calculateConsum = () => {
    if (!flowRate && !time) {
      showErrorDialog("Erro !", "Preencha todos os campos");
      return;
    }
    const timeInSeconds = hmsToSecondsOnly(time);
    if (flowRate) {
      setIsCalculating(true);
      const totalConsum = +flowRate * (timeInSeconds / 60);
      const price = totalConsum * 0.0044;
      setPrice(price);
      setConsumPerMinute(totalConsum);
    }
  };

  const saveData = () => {
    const data : ConsumData = {
      consum: `${consumPerMinute.toFixed(3)} l`,
      date: dataAtualFormatada(),
      value: `R$ ${price.toFixed(3)} `,
      type: ConsumptionTypeEnum.AGUA,
    }
    ConsumDate.setData(data);
    Swal.fire('Operação reliazada com sucesso!', '', 'info');
    reset();
  }

  const reset = () => {
    setFlowRate("");
    setPrice(0);
    setConsumPerMinute(0);
    setTime("");
    setIsCalculating(false);
  }

  const maxLengthCheck = (maxLength: number, e: any) => {
    const wattsValue = e.currentTarget.value;
    setFlowRate(wattsValue.slice(0, maxLength));
  }

  const finalizeConsum = () => {
    const consumo =  `${consumPerMinute.toFixed(3)} l`;
    const valor = `R$ ${price.toFixed(3)}`;
    showSaveAlert(saveData, reset, consumo, valor)
  } 

  return (
    <AppLayout
      primaryColorBackground="#1C86AE"
      secondaryColorBackground="#249FCE"
      menuColor={"#145E7Bda"}
      imageLayout={IconCalculator}
      imageDescription="Ícone de uma calculadora no centro da tela."
    >
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputField}
          id="water"
          type="number"
          placeholder="Vazão (l/min)"
          name="water-input"
          value={flowRate ? flowRate : ""}
          onInput={(e: React.FormEvent<HTMLInputElement>) => {
            maxLengthCheck(5, e);
          }}
        />

        <InputMask
          className={styles.inputField}
          id="time"
          mask="99:99"
          placeholder="Tempo"
          name="time-input"
          value={time}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setTime(e.currentTarget.value);
          }}
        />
      </div>

      <div className={styles.costWrapper}>
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
      <div className={styles.actions}>
        {!isCalculating ? (
          <Button
            backgroundColor="#1EB6C6"
            rounded
            tabIndex={0}
            textColor="#fff"
            onClick={calculateConsum}
          >
            Calcular
          </Button>
        ) : (
          <Button
            backgroundColor="#A9A9A9"
            rounded
            tabIndex={0}
            textColor="#fff"
            onClick={finalizeConsum}
          >
            Finalizar
          </Button>
        )}
      </div>
    </AppLayout>
  );
}
