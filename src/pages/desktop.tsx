import { FunctionComponent, useState } from "react";
import { FrameComponent, FrameComponent1, FrameComponent3 } from "../components/slides-frame-component";
import Logo from "../components/logo";
import Home1 from "../components/home1";
import Home from "../components/home";
import StarIcon from "../components/star-icon";
import styles from "./desktop.module.css";

// Slide 1 — Hero
const Desktop1: FunctionComponent = () => {
  const scrollToNextPage = () => {
    document.getElementById("section-2")?.scrollIntoView({ behavior: "smooth" });
  };

  const [logoItems] = useState([
    { name1: "Shell" as const, logoIdentifiers: "/Logo-Identifiers.svg", sHELLS: "SHELLS" },
    { name1: "SmartFinder" as const, logoIdentifiers: "/Group-45.svg", sHELLS: "SmartFinder" },
    { name1: "Zoomerr" as const, logoIdentifiers: "/Vector.svg", sHELLS: "Zoomerr" },
    { name1: "ArtVenue" as const, logoIdentifiers: "/Group-46.svg", sHELLS: "ArtVenue" },
    { name1: "Kontrastr" as const, logoIdentifiers: "/Group-47.svg", sHELLS: "kontrastr" },
    { name1: "Waves" as const, logoIdentifiers: "/Vector1.svg", sHELLS: "SHELLS" },
  ]);

  return (
    <div className={styles.desktop1}>
      <main className={styles.desktop12}>
        <section className={styles.leftColumn}>
          <div className={styles.urgentlyNeeded}>
            <div className={styles.componentstabstop}>
              <h1 className={styles.theNewFoundation}>
                The new foundation of modern banking
              </h1>
              <h3 className={styles.weDriveInnovation}>
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </h3>
            </div>
            <div className={styles.jobOpen}>
              <FrameComponent property1="Default" onClick={scrollToNextPage} />
              <FrameComponent1 property1="Default" />
            </div>
          </div>
          <div className={styles.title}>
            <h3 className={styles.trustedBy}>trusted by:</h3>
            <div className={styles.row}>
              {logoItems.map((item, index) => (
                <Logo
                  key={index}
                  name1={item.name1}
                  logoIdentifiers={item.logoIdentifiers}
                  sHELLS={item.sHELLS}
                />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.microphone}>
          <Home1 />
          <img
            className={styles.pexelsPhotoByAndreaPiacqua}
            alt=""
            src="/Pexels-Photo-by-Andrea-Piacquadio@2x.png"
          />
          <Home />
        </section>
      </main>
      <div className={styles.logo} />
    </div>
  );
};

// Slide 2 — "All of our solutions"
export const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.desktopImage} />
      <div className={styles.imageContainer}>
        <div className={styles.allOfOur}>
          All of our solutions are tailor-made to your needs
        </div>
        <FrameComponent3 property1="Default" />
      </div>
      <StarIcon />
    </div>
  );
};

export default Desktop1;
