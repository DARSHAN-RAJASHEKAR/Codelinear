import { FunctionComponent } from "react";
import Desktop1, { Desktop } from "./desktop";
import Slide7, { Slide3, Slide4, Slide5, Slide6, Slide8, Slide9 } from "./slides";
import styles from "./home-page.module.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.scrollContainer}>
      <section id="section-1" className={styles.section}>
        <Desktop1 />
      </section>
      <section id="section-2" className={styles.section}>
        <Desktop />
      </section>
      <section id="section-3" className={styles.section}>
        <Slide3 />
      </section>
      <section id="section-4" className={styles.section}>
        <Slide4 />
      </section>
      <section id="section-5" className={styles.section}>
        <Slide5 />
      </section>
      <section id="section-6" className={styles.section}>
        <Slide6 />
      </section>
      <section id="section-7" className={styles.section}>
        <Slide7 />
      </section>
      <section id="section-8" className={styles.section}>
        <Slide8 />
      </section>
      <section id="section-9" className={styles.section}>
        <Slide9 />
      </section>
    </div>
  );
};

export default HomePage;
