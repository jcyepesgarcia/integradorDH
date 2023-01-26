import { Card } from "../components/Card";
import { cardlist } from '../utils/cardlist'
import styles from "../components/modules/card.module.css";


export function Recomendations() {

  return (
    <>
      <section >
        <h2 className={styles.nameList}>Recomendations</h2>
        <div className={styles.listCard}>
        {cardlist.map((cardlist) => (
          <Card cardlist={cardlist} key={cardlist.id} />
        ))}
        </div>
      </section>
    </>
  );
}
