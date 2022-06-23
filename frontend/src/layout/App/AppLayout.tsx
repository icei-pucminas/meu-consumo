import HamburguerMenu from "../../components/HamburguerMenu";
import styles from "./styles.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  primaryColorBackground?: string;
  secondaryColorBackground?: string;
  pageTitle?: string;
  pageSubtitle?: string;
  imageLayout?: string;
  imageDescription?: string;
  menuColor?: string;
};

const AppLayout = ({
  children,
  primaryColorBackground,
  secondaryColorBackground,
  pageTitle,
  pageSubtitle,
  imageLayout,
  imageDescription,
  menuColor,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.appLayout}
      style={{
        background: `linear-gradient(135deg, ${secondaryColorBackground} 25%, transparent 25%) -74px 0/ 148px 148px,
          linear-gradient(225deg, ${secondaryColorBackground}80 25%, transparent 25%) -74px 0 / 148px 148px,
          linear-gradient(315deg, ${secondaryColorBackground} 25%, transparent 25%) 0 0/ 148px 148px,
          linear-gradient(45deg, ${secondaryColorBackground}80 25%, ${primaryColorBackground} 25%) 0 0/ 148px 148px`,
        backgroundColor: `${
          primaryColorBackground ? primaryColorBackground : "#F1F5FF"
        }`,
      }}
    >
      <header>
        <HamburguerMenu menuBackground={menuColor} />
        <div className={styles.pageHeader}>
          <div className={styles.headerTitle}>
            {pageTitle !== "Painel" && (
              <span onClick={() => navigate(-1)} className={styles.icon}>
                <FaArrowLeft />
              </span>
            )}
            <h1>{pageTitle ? pageTitle : "Painel"}</h1>
          </div>
          <small>{pageSubtitle ? pageSubtitle : ""}</small>
        </div>
      </header>
      <main>
        {imageDescription && (
          <div className={styles.imageLayout}>
            <img src={imageLayout} alt={imageDescription} />
          </div>
        )}
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
