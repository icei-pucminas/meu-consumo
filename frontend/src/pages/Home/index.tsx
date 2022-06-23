import Card from "../../components/Card";
import AppLayout from "../../layout/App/AppLayout";
import styles from "./styles.module.scss";
import IconEnergy from "../../assets/img/icon-energy-cicle.png";
import IconWater from "../../assets/img/icon-water-cicle.png";
import IconSettings from "../../assets/img/icon-settings.png";
import IconDash from "../../assets/img/icon-relatory.png";

export default function Home() {
  return (
    <AppLayout
      primaryColorBackground="#17a1af"
      secondaryColorBackground="#1eb6c6"
      pageTitle="Painel"
    >
      <div className={styles.cardsContent}>
        <Card
          title="Energia"
          image={IconEnergy}
          link="/consumo-energia"
          descriptionImage="Um raio de energia em volta de duas setas representando o consumo de energia."
        />
        <Card
          title="Água"
          image={IconWater}
          link="/consumo-agua"
          descriptionImage="Uma gota de água em volta de uma seta representando o consumo de água."
        />
        <Card
          title="Configurações"
          image={IconSettings}
          link="/configuracoes"
          descriptionImage="A ray of energy around a circle"
        />
        <Card
          title="Relatórios"
          image={IconDash}
          link="/relatorios"
          descriptionImage="A ray of energy around a circle"
        />
      </div>
      {/* TODO: Make tips */}
      <div style={{
        marginTop: "20px",
        backgroundColor: "#1eb6c6",
        padding: "20px",
        borderRadius: "10px",
        color: "#fff"
      }}>
        Aqui tem uma dica muito foda sobre agua como por exemplo.
        A cada 5 minutos de uso, você gasta um pouco de água.
      </div>
    </AppLayout>
  );
}
