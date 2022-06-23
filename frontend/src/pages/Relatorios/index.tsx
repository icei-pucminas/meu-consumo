import AppLayout from "../../layout/App/AppLayout";
import IconRelatory from "../../assets/img/icon-relatory.png";
import styles from "./styles.module.scss";
import { useState } from "react";
import Button from "../../components/Button";
import showErrorDialog from "../../utils/alerts/ErrorAlert";
import ConsumDataService from "../../services/ConsumDataService";
import ConsumData from "../../utils/interfaces/ConsumData";

export default function ConsumoAgua() {
  const types = [
    { value: "AMBOS", label: "Ambos" },
    { value: "AGUA", label: "Água" },
    { value: "ENERGIA", label: "Energia" },
  ];

  const [consumType, setConsumType] = useState("AMBOS");
  const [initialDate, setInitialDate] = useState("");
  const [finallDate, setFinallDate] = useState("");
  const [consumData, setConsumData] = useState<Array<ConsumData>>([]);
  const [totalValue, setTotalValue] = useState(0);

  const generateReport = () => {
    const data = ConsumDataService.getData();
    if (!data) {
      showErrorDialog("Erro", "Não foram encontrados resultados!");
      setConsumData([]);
      return;
    }
    const dataList = JSON.parse(data ? data : '[]');
    if (consumType !== 'AMBOS') {
      setConsumData(dataList.filter((it: ConsumData) => it.type === consumType));
      setTotalValue(dataList.map((it: ConsumData) => +it.value.replace('R$', '')).reduce((total: number, num: number) => total + num ));
      return;
    }
    setConsumData(dataList);
    setTotalValue(dataList.map((it: ConsumData) => +it.value.replace('R$', '')).reduce((total: number, num: number) => total + num ));
  };
  return (
    <AppLayout
      primaryColorBackground="#E0720D"
      secondaryColorBackground="#CA670D"
      menuColor={"#CA670Dda"}
      imageLayout={IconRelatory}
      pageTitle="Relatórios"
      imageDescription="Um gráfico no centro da tela simbolizando um relatório."
    >
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <p>Tipos de consumo: </p>
          <select
            className={styles.inputField}
            value={consumType}
            onChange={(e: any) => {
              setConsumType(e.currentTarget.value);
            }}
          >
            {types.map((type: any) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <p>Periodo inicial: </p>
          <input
            className={styles.inputField}
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            id="initial-date"
            placeholder="Data inicial"
            name="initial-date"
            value={initialDate ? initialDate : ""}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setInitialDate(e.currentTarget.value);
            }}
          />
        </div>

        <div className={styles.inputWrapper}>
          <p>Periodo Final: </p>
          <input
            className={styles.inputField}
            type="date"
            id="final-date"
            placeholder="Data final"
            name="final-date"
            value={finallDate ? finallDate : ""}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setFinallDate(e.currentTarget.value);
            }}
          />
        </div>

        <div className={styles.actions}>
          <Button
            onClick={generateReport}
            rounded
            backgroundColor="#E0720D"
            fullWidth
          >
            Gerar relátorio
          </Button>
        </div>
        {consumData.length ? (
          <div className={styles.cardResult}>
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Consumo</th>
                </tr>
              </thead>
              <tbody>
                {consumData.map((it, i) => (
                  <tr key={i}>
                    <td>{it.date}</td>
                    <td className={styles.green}>{it.value}</td>
                    <td>{it.consum}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3> Total: R$ { totalValue }</h3>
          </div>
        ) : ''}
      </div>
    </AppLayout>
  );
}
