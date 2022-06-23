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
import ConsumDataService from "../../services/ConsumDataService";
import { dataAtualFormatada } from "../../utils/functions/formatData";
import { ConsumptionTypeEnum } from "../../utils/enums/ConsumptionTypeEnum";

export default function CalculadoraEnergia() {
  const [watts, setWatts] = useState(0);
  const [price, setPrice] = useState(0);
  const [consumPerHour, setConsumPerhour] = useState(0);
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
    if (!watts && !time) {
      showErrorDialog("Erro !", "Preencha todos os campos");
      return;
    }
    setIsCalculating(true);
    const timeInSeconds = hmsToSecondsOnly(time);
    const timeInHours = timeInSeconds / 3600;
    const consum = (watts / 1000) * timeInHours;
    const consumPrice = consum * 0.618;
    setConsumPerhour(consum);
    setPrice(consumPrice);
  };

  const saveData = () => {
    
    const consumData: ConsumData = {
      consum: `${consumPerHour.toFixed(3)} kWh`,
      date: dataAtualFormatada(),
      value: `R$ ${price.toFixed(3)}`,
      type: ConsumptionTypeEnum.ENERGIA,
    }
    ConsumDataService.setData(consumData);
    Swal.fire("Operação reliazada com sucesso!", "", "info");
    reset();
  };

  const reset = () => {
    setWatts(0);
    setPrice(0);
    setConsumPerhour(0);
    setTime("");
    setIsCalculating(false);
  };

  const maxLengthCheck = (maxLength: number, e: any) => {
    const wattsValue = e.currentTarget.value;
    setWatts(wattsValue.slice(0, maxLength));
  }

  const finalizeConsum = () => {
    const consumo =  `${consumPerHour.toFixed(3)} kWh`;
    const valor = `R$ ${price.toFixed(3)}`;
    showSaveAlert(saveData, reset, consumo, valor)
  }

  return (
    <AppLayout
      primaryColorBackground="#FFC700"
      secondaryColorBackground="#EDB900"
      menuColor={"#CFA200da"}
      imageLayout={IconCalculator}
      imageDescription="Ícone de uma calculadora no centro da tela."
    >
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputField}
          id="watts"
          type="number"
          placeholder="Potêcnia (watts)"
          name="watts-input"
          value={watts ? watts : ""}
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
            {consumPerHour ? consumPerHour.toFixed(3) : "0,000"} kWh
          </span>
        </p>
      </div>
      <div className={styles.actions}>
        {!isCalculating ? (
          <Button
            backgroundColor="#EDB900"
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
