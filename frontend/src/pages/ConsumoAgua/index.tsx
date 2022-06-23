import Card from "../../components/Card";
import AppLayout from "../../layout/App/AppLayout";
import styles from "./styles.module.scss";
import IconWater from "../../assets/img/icon-water-cicle.png";

import IconWashDishes from "../../assets/img/icon-wash-dishes.png";
import IconWashClothes from "../../assets/img/icon-wash-clothes.png";
import IconBrushTeeth from "../../assets/img/icon-brush-teeth.png";
import IconTakeAShower from "../../assets/img/icon-bath.png";

export default function Home() {
  return (
    <AppLayout
      primaryColorBackground="#1C86AE"
      secondaryColorBackground="#249FCE"
      menuColor={"#145E7Bda"}
      imageLayout={IconWater}
      pageTitle="Água"
      imageDescription="Uma gota de água em volta de uma seta representando o consumo de água."
    >
      <div className={styles.cardsContent}>
        <Card
          title="Louça"
          image={IconWashDishes}
          link="/consumo-agua/lavar-louca"
          descriptionImage="Uma mão esfregando um prato [Lavando a louça]"
        />
        <Card
          title="Roupas"
          image={IconWashClothes}
          link="/consumo-agua/lavar-roupa"
          descriptionImage="Uma máquina de lavar para representar o cálculo de lavar roupas."
        />
        <Card
          title="Escovar os dentes"
          image={IconBrushTeeth}
          link="/consumo-agua/escovar-dente"
          descriptionImage="Uma escova de dentes limpando um dente, representando o cálculo de escovar dentes."
        />
        <Card
          title="Tomar banho"
          image={IconTakeAShower}
          link="/consumo-agua/tomar-banho"
          descriptionImage="Uma banheira com água e sabão para representar o cálculo de tomar banho."
        />
      </div>
    </AppLayout>
  );
}
