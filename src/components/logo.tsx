import { FunctionComponent, type CSSProperties } from "react";
import styles from "./logo.module.css";

export type LogoType = {
  className?: string;
  logoIdentifiers?: string;
  sHELLS?: string;

  /** Variant props */
  name1?: CSSProperties["name"];
};

const Logo: FunctionComponent<LogoType> = ({
  className = "",
  name1 = "Header-Logo",
  logoIdentifiers,
  sHELLS,
}) => {
  return (
    <div className={[styles.root, className].join(" ")} data-name={name1}>
      <img
        className={styles.logoIdentifiersIcon}
        loading="lazy"
        alt=""
        src={logoIdentifiers}
      />
      <b className={styles.shells}>{sHELLS}</b>
    </div>
  );
};

export default Logo;
