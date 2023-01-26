import styles from "../components/modules/card.module.css";

export function Card({ cardlist }) {
  return (
    <>
      <section className={styles.card}>
        <div>
          <img src={cardlist.image} alt="" />
        </div>
        <div>
          <h1 className={styles.h1}>{cardlist.title}</h1>
          <span className={styles.category}>{cardlist.category}</span>
          <h3 className={styles.h3}>{cardlist.city}</h3>
          <p className={styles.p}>{cardlist.description}</p>
          <a href="a" className={styles.a}>
            Ver detalles
          </a>
        </div>
      </section>
    </>
  );
}
