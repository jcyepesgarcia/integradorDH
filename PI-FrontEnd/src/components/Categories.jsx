import React from "react";
import styles from "./modules/categories.module.css";
import { Carousel } from "react-carousel-minimal";
import {categories} from "../utils/categories.json"

export function Categories() {

  const data = [
    {
      image:
      "https://totalrenting.es/wp-content/uploads/2022/06/Wolkswagen-Polo.png",
      caption: "Standard",
    },
    {
      image:
      "https://totalrenting.es/wp-content/uploads/2022/06/Porsche-911.png",
      caption: "Sport",
    },
    {
      image:
      "https://totalrenting.es/wp-content/uploads/2022/06/1711-X8-1.jpg",
      caption: "SUV",
    },
    {
      image:
      "https://totalrenting.es/wp-content/uploads/2022/06/Mercedes-Clase-C-Cabrio.png",
      caption: "Premium",
    },
  ];

  const captionStyle = {
    fontSize: "1rem",
    fontWeight: '500',
    color: "#161a1d",
  

  };
  const slideNumberStyle = {
    fontSize: "0.1rem",
  };

  return (
    <>
      <section className={`${styles.flex} ${styles.section_categories}`}>
        <h2 className={styles.h2_categories}> Choose Category </h2>
        <div className={`${styles.flex} ${styles.container_card}`}>
          {categories.map((categories) => (
            <div key={categories.id}>
              <article className={styles.card}>
                <img src={categories.image} className={styles.img_categories}/>
                <p className={styles.title_card}>{categories.title}</p>
                <p className={styles.p_categories}>{categories.description}</p>
              </article>
            </div>
          ))}
          <article className={styles.carrousel}>
            <Carousel
              data={data}
              time={2000}
              width="150rem"
              height="50rem"
              captionStyle={captionStyle}
              radius="1rem"
              slideNumber={false}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={false}
              dots={false}
              pauseIconColor="white"
              pauseIconSize="4rem"
              slideBackgroundColor="white"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100rem"
              style={{
                textAlign: "center",
                maxWidth: "150rem",
                maxHeight: "50rem",
                margin: "4rem auto",
                

              }}
            />
          </article>
        </div>
      </section>
    </>
  );
}


