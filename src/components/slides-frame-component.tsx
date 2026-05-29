import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

// component1 — slide1/2 "learn more"
export type Component1Type = { className?: string; property1?: string };

export const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Frame 61",
}) => (
  <div className={[styles.s1Component3, className].join(" ")} data-property1={property1}>
    <div className={styles.s1ActionableInsights}>
      <div className={styles.s1LearnMore}>learn more</div>
      <img className={styles.s1Icon} loading="lazy" alt="" src="/3.svg" />
    </div>
    <div className={styles.s1Component3Child} />
  </div>
);

// component1 — slide3 "learn more"
export type Slide3Component1Type = { className?: string; property1?: string };

export const Slide3Component1: FunctionComponent<Slide3Component1Type> = ({
  className = "",
  property1 = "Frame 61",
}) => (
  <div className={[styles.s3Component3, className].join(" ")} data-property1={property1}>
    <div className={styles.s3LearnMoreParent}>
      <div className={styles.s3LearnMore}>learn more</div>
      <img className={styles.s3Icon} loading="lazy" alt="" src="/3.svg" />
    </div>
    <div className={styles.s3Component3Child} />
  </div>
);

// component1 — slide6 "read all insights"
export const Slide6Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Frame 61",
}) => (
  <div className={[styles.s6Component1, className].join(" ")} data-property1={property1}>
    <div className={styles.s6InsightsFooter}>
      <div className={styles.s6ReadAllInsights}>read all insights</div>
      <img className={styles.s6Icon} loading="lazy" alt="" src="/3.svg" />
    </div>
    <div className={styles.s6Component1Child} />
  </div>
);

// component1 — slide7 "read more" (scaled)
export const Slide7Component1: FunctionComponent<Component1Type> = ({
  className = "",
  property1 = "Frame 61",
}) => (
  <div className={[styles.s7Component2, className].join(" ")} data-property1={property1}>
    <div className={styles.s7ActionContainer}>
      <div className={styles.s7ReadMore}>read more</div>
      <img className={styles.s7ActionSeparatorIcon} loading="lazy" alt="" src="/Action-Separator.svg" />
    </div>
    <div className={styles.s7ActionDivider} />
  </div>
);

// slide7-logo
export type LogoType = { className?: string; name1?: string };

export const Slide7Logo: FunctionComponent<LogoType> = ({
  className = "",
  name1 = "Header-Logo",
}) => (
  <div className={[styles.s7Logo, className].join(" ")} data-name={name1}>
    <img className={styles.s7LogoVectorIcon} alt="" src="/slide7-Vector1.svg" />
    <h3 className={styles.s7Zoomerr}>Zoomerr</h3>
  </div>
);

// slide2 — feature card (icon + title + description + learn-more)
export type FrameComponent2Type = {
  className?: string;
  frame26?: string;
  coreBankingCB7?: string;
  cBHelpsYourFinancialInstitutio?: string;
  property1?: string;
  coreBankingCB7Opacity?: CSSProperties["opacity"];
};

export const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frame26,
  coreBankingCB7,
  coreBankingCB7Opacity,
  cBHelpsYourFinancialInstitutio,
  property1,
}) => {
  const coreBankingCB7Style: CSSProperties = useMemo(() => {
    return { opacity: coreBankingCB7Opacity };
  }, [coreBankingCB7Opacity]);

  return (
    <div className={[styles.fc2FrameParent, className].join(" ")}>
      <img className={styles.fc2FrameChild} alt="" src={frame26} />
      <div className={styles.fc2CoreFunctionality}>
        <h3 className={styles.fc2CoreBankingCb7} style={coreBankingCB7Style}>
          {coreBankingCB7}
        </h3>
        <div className={styles.fc2Cb7HelpsYour}>
          {cBHelpsYourFinancialInstitutio}
        </div>
      </div>
      <Component1 property1={property1} />
    </div>
  );
};

// slide2 — "request demo" outlined button
export type FrameComponent3Type = {
  className?: string;
  property1?: string;
};

export const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.fc3RequestDemoWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.fc3RequestDemo}>request demo</div>
    </button>
  );
};

// slide1 + slide3 — "REQUEST DEMO" gradient button
export type FrameComponentType = {
  className?: string;
  onClick?: () => void;
  property1?: string;
};

export const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  property1 = "Default",
  onClick,
}) => {
  return (
    <button
      className={[styles.requestDemoWrapper, className].join(" ")}
      data-property1={property1}
      onClick={onClick}
    >
      <div className={styles.requestDemo}>REQUEST DEMO</div>
    </button>
  );
};

// slide6 — dynamic button (border/text/color passed as style props)
export type Slide6FrameComponentType = {
  className?: string;
  requestDemo?: string;
  property1?: string;
  frameButtonBorder?: CSSProperties["border"];
  frameButtonPadding?: CSSProperties["padding"];
  requestDemoFontSize?: CSSProperties["fontSize"];
  requestDemoColor?: CSSProperties["color"];
};

export const Slide6FrameComponent: FunctionComponent<Slide6FrameComponentType> = ({
  className = "",
  property1 = "Default",
  requestDemo,
  frameButtonBorder,
  frameButtonPadding,
  requestDemoFontSize,
  requestDemoColor,
}) => {
  const frameButtonStyle: CSSProperties = useMemo(() => {
    return { border: frameButtonBorder, padding: frameButtonPadding };
  }, [frameButtonBorder, frameButtonPadding]);

  const requestDemoStyle: CSSProperties = useMemo(() => {
    return { fontSize: requestDemoFontSize, color: requestDemoColor };
  }, [requestDemoFontSize, requestDemoColor]);

  return (
    <button
      className={[styles.s6RequestDemoWrapper, className].join(" ")}
      data-property1={property1}
      style={frameButtonStyle}
    >
      <div className={styles.s6RequestDemo} style={requestDemoStyle}>
        {requestDemo}
      </div>
    </button>
  );
};

// slide7 — carousel card with images + text
export type Slide7FrameComponentType = {
  className?: string;
  nhpSInThoi?: string;
  vuiLngNhpSInThoiChngT?: string;
  buttonTipTc?: string;
  tipTc?: string;
  property1?: string;
  frameDivLeft?: CSSProperties["left"];
  frameDivPadding?: CSSProperties["padding"];
};

export const Slide7FrameComponent: FunctionComponent<Slide7FrameComponentType> = ({
  className = "",
  nhpSInThoi,
  vuiLngNhpSInThoiChngT,
  buttonTipTc,
  tipTc,
  frameDivLeft,
  frameDivPadding,
  property1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return { left: frameDivLeft, padding: frameDivPadding };
  }, [frameDivLeft, frameDivPadding]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.carouselContentWrapper}>
        <div className={styles.carouselContent}>
          <img className={styles.nhpSInThoi} alt="" src={nhpSInThoi} />
          <img
            className={styles.nhpSInThoi}
            loading="lazy"
            alt=""
            src={vuiLngNhpSInThoiChngT}
          />
          <img className={styles.nhpSInThoi} alt="" src={buttonTipTc} />
          <img className={styles.nhpSInThoi} alt="" src={tipTc} />
        </div>
      </div>
      <div className={styles.frame51Column1}>
        <div className={styles.columnContent}>
          <div className={styles.gettingStarted}>getting started</div>
          <div className={styles.howWeHelp}>
            How we help brand reach out to more people
          </div>
          <div className={styles.descriptionSpacer} />
        </div>
        <div className={styles.ourApiBankingHelpsYouToG}>
          <div className={styles.ourApiBanking}>
            Our API banking helps you to gain actionable insights, enable
            account aggregation, streamline customer onboarding, KYC, and
            payment initiation, offer predictive budgeting tools, and introduce
            enhanced credit scoring.
            <br />
            Our API banking helps you to gain actionable insights, enable
            account aggregation, streamline customer onboarding, KYC, and
            payment initiation, offer predictive budgeting tools, and introduce
            enhanced credit scoring.
          </div>
        </div>
        <Slide7Component1 property1={property1} />
      </div>
    </div>
  );
};

// slide8 — "Contact Us" outlined button
export type Slide8FrameComponentType = {
  className?: string;
  property1?: string;
};

export const Slide8FrameComponent: FunctionComponent<Slide8FrameComponentType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.contactUsWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.contactUs}>Contact Us</div>
    </button>
  );
};

// slide1 — "Contact Us" outlined button
export type FrameComponent1Type = {
  className?: string;
  property1?: string;
};

export const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.s1ContactUsWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.s1ContactUs}>Contact Us</div>
    </button>
  );
};

// slide7 — "read more" button
export const Slide7FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.s7RequestDemoWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.s7RequestDemo}>read more</div>
    </button>
  );
};

// slide8 — "REQUEST DEMO" gradient CTA button
export const Slide8FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <button
      className={[styles.s8RequestDemoWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.s8RequestDemo}>REQUEST DEMO</div>
    </button>
  );
};

// slide7 — "view all" button
export type Component2Type = {
  className?: string;
  property1?: string;
};

export const Slide7Component2: FunctionComponent<Component2Type> = ({
  className = "",
  property1 = "Frame 61",
}) => {
  return (
    <div
      className={[styles.component5, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.viewAllButton}>
        <div className={styles.viewAll}>view all</div>
        <img className={styles.icon} loading="lazy" alt="" src="/3.svg" />
      </div>
      <div className={styles.component5Child} />
    </div>
  );
};

export default FrameComponent;
