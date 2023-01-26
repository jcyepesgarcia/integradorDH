import styles from "./modules/home.module.css";
import { Header, Footer, Recomendations, Categories, Hero } from "../components/";

export const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Categories />
      <Recomendations/>
    </>
  );
};
