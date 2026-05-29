import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Component1 } from "./slides-frame-component";
import styles from "./component-tab.module.css";

export type ComponentTabType = {
  className?: string;
  componentTab?: string;
  loanOriginationSystem?: string;
  property1?: string;

  /** Style props */
  componentTabPadding?: CSSProperties["padding"];
  loanOriginationSystemWidth?: CSSProperties["width"];
  loanOriginationSystemDisplay?: CSSProperties["display"];
};

const ComponentTab: FunctionComponent<ComponentTabType> = ({
  className = "",
  componentTabPadding,
  componentTab,
  loanOriginationSystem,
  loanOriginationSystemWidth,
  loanOriginationSystemDisplay,
  property1,
}) => {
  const componentTabStyle: CSSProperties = useMemo(() => {
    return {
      padding: componentTabPadding,
    };
  }, [componentTabPadding]);

  const loanOriginationSystemStyle: CSSProperties = useMemo(() => {
    return {
      width: loanOriginationSystemWidth,
      display: loanOriginationSystemDisplay,
    };
  }, [loanOriginationSystemWidth, loanOriginationSystemDisplay]);

  return (
    <div className={[styles.componentTab, className].join(" ")}>
      <div className={styles.componentTab2} style={componentTabStyle}>
        <img className={styles.componentTabIcon} alt="" src={componentTab} />
        <div className={styles.nbfc}>NBFC</div>
      </div>
      <div className={styles.samplecode}>
        <h3
          className={styles.loanOriginationSystem}
          style={loanOriginationSystemStyle}
        >
          {loanOriginationSystem}
        </h3>
        <div
          className={styles.n7BringsFull}
        >{`N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients `}</div>
      </div>
      <Component1 property1={property1} />
    </div>
  );
};

export default ComponentTab;
