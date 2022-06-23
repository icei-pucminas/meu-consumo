import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  image: string;
  descriptionImage: string;
  link: string;
};

export default function Card({
  title,
  image,
  descriptionImage,
  link,
  ...props
}: Props) {
  return (
    <Link to={link} className={`${styles.card}`}>
      <div className={styles.cardContent}>
        <div className={`${styles.cardImage}`}>
          <img src={image} alt={descriptionImage} />
        </div>
        <div className={`${styles.cardTitle}`}>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
