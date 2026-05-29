import { FunctionComponent } from "react";
import styles from "./slide5.module.css";

// ===== contact-us =====
export type Slide5ContactUsType = { className?: string; property1?: string };

export const Slide5ContactUs: FunctionComponent<Slide5ContactUsType> = ({
  className = "",
  property1 = "Default",
}) => (
  <button
    className={[styles.contactUsWrapper, className].join(" ")}
    data-property1={property1}
  >
    <div className={styles.contactUs}>Contact Us</div>
  </button>
);

// ===== request-demo =====
export type Slide5RequestDemoType = { className?: string; property1?: string };

export const Slide5RequestDemo: FunctionComponent<Slide5RequestDemoType> = ({
  className = "",
  property1 = "Default",
}) => (
  <button
    className={[styles.requestDemoWrapper, className].join(" ")}
    data-property1={property1}
  >
    <div className={styles.requestDemo}>REQUEST DEMO</div>
  </button>
);

// ===== request-demo-dark =====
export type Slide5RequestDemoDarkType = { className?: string; property1?: string };

export const Slide5RequestDemoDark: FunctionComponent<Slide5RequestDemoDarkType> = ({
  className = "",
  property1 = "Default",
}) => (
  <button
    className={[styles.darkRequestDemoWrapper, className].join(" ")}
    data-property1={property1}
  >
    <div className={styles.darkRequestDemo}>REQUEST DEMO</div>
  </button>
);

// ===== learn-more =====
export type Slide5LearnMoreType = { className?: string; property1?: string };

export const Slide5LearnMore: FunctionComponent<Slide5LearnMoreType> = ({
  className = "",
  property1 = "Frame 61",
}) => (
  <div
    className={[styles.component4, className].join(" ")}
    data-property1={property1}
  >
    <div className={styles.learnContainer}>
      <div className={styles.learnMore}>learn more</div>
      <img className={styles.icon} alt="" src="/3.svg" />
    </div>
  </div>
);

// ===== handwave =====
export type Slide5HandwaveType = { className?: string; n7?: string };

export const Slide5Handwave: FunctionComponent<Slide5HandwaveType> = ({
  className = "",
  n7,
}) => (
  <div className={[styles.handwaveElements, className].join(" ")}>
    <img className={styles.vectorIcon} loading="lazy" alt="" src="/Vector.svg" />
    <h2 className={styles.n7}>{n7}</h2>
    <img className={styles.vectorIcon} loading="lazy" alt="" src="/Vector.svg" />
    <h2 className={styles.say}>Say</h2>
    <img
      className={styles.httpslottiefilescomanimatIcon}
      loading="lazy"
      alt=""
      src="/https-lottiefiles-com-animations-hand-wave-animation-Y3i4NmO8TS@2x.png"
    />
    <h2 className={styles.say}>to the new way of banking</h2>
  </div>
);

// ===== ticker-inner =====
export type Slide5TickerInnerType = {
  className?: string;
  handwaveElementsN7?: string;
  handwaveElementsN71?: string;
};

export const Slide5TickerInner: FunctionComponent<Slide5TickerInnerType> = ({
  className = "",
  handwaveElementsN7,
  handwaveElementsN71,
}) => (
  <div className={[styles.handwaveElementsParent, className].join(" ")}>
    <Slide5Handwave n7={handwaveElementsN7} />
    <Slide5Handwave n7={handwaveElementsN71} />
    <Slide5Handwave n7={handwaveElementsN7} />
    <Slide5Handwave n7={handwaveElementsN71} />
  </div>
);

// ===== ticker =====
export type Slide5TickerType = { className?: string; property1?: string };

export const Slide5Ticker: FunctionComponent<Slide5TickerType> = ({
  className = "",
  property1 = "Default",
}) => (
  <header
    className={[styles.rootInner, className].join(" ")}
    data-property1={property1}
  >
    <Slide5TickerInner handwaveElementsN7="N7" handwaveElementsN71="CB7" />
  </header>
);

// ===== feature-cards =====
const CheckIcon = () => (
  <svg className={styles.checkIcon} viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15.5" cy="15.5" r="15.5" fill="url(#checkGrad5)" />
    <path d="M9 16l4.5 4.5L22 11" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="checkGrad5" x1="0" y1="0" x2="31" y2="31" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00B4FD" />
        <stop offset="1" stopColor="#003ACE" />
      </linearGradient>
    </defs>
  </svg>
);

export const Slide5FeatureCards: FunctionComponent = () => (
  <div className={styles.frameParent}>
    <section className={styles.iphone13ProParent}>
      <img className={styles.iphone13Pro} loading="lazy" alt="" src="/iPhone-13-Pro@2x.png" />
      <div className={styles.complianceItemsParent}>
        <div className={styles.complianceItems}>
          <div className={styles.branchlessDetails}>
            <div className={styles.fullyCompliantWith}>Fully compliant with regulatory requirement</div>
          </div>
          <div className={styles.ourDigitalBanking}>
            The governance of risk management with regulations is achieved by our risk management framework
            that is fully integrated to work with digital bank's operational-risk protocols and procedures.
          </div>
        </div>
        <div className={styles.securityDetails}>
          <div className={styles.securityItems}>
            <CheckIcon />
            <div className={styles.adaptiveIntelligent}>Pre-integrated Security System</div>
          </div>
          <div className={styles.transformationDetails}>
            <CheckIcon />
            <div className={styles.adaptiveIntelligent}>Fully Compliant With Regulatory Requirement</div>
          </div>
          <div className={styles.coreDetails}>
            <CheckIcon />
            <div className={styles.adaptiveIntelligent}>Digitally Connected Core</div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.frameGroup}>
      <div className={styles.frameContainer}>
        <div className={styles.featureItemsParent}>
          <div className={styles.featureItems}>
            <div className={styles.fullyCompliantWithLabel}>No legacy IT systems</div>
          </div>
          <div className={styles.ourDigitalBanking}>
            Our Digital Banking solution and multilayered approach help financial institutions take
            advantage of digital transformation by ensuring customer trust and regulatory compliance.
          </div>
        </div>
        <div className={styles.adaptiveItems}>
          <div className={styles.adaptiveBackgroundParent}>
            <CheckIcon />
            <div className={styles.adaptiveIntelligentBold}>{`Adaptive & Intelligent API monetization`}</div>
          </div>
          <div className={styles.adaptiveBackgroundParent}>
            <CheckIcon />
            <div className={styles.adaptiveIntelligent}>Ambient User Experience</div>
          </div>
          <div className={styles.adaptiveBackgroundParent}>
            <CheckIcon />
            <div className={styles.adaptiveIntelligent}>Cloud-native With lower TCO</div>
          </div>
        </div>
      </div>
      <img className={styles.iphone13Pro} loading="lazy" alt="" src="/iPhone-13-Pro1@2x.png" />
    </section>

    <section className={styles.iphone13ProGroup}>
      <img className={styles.iphone13Pro} loading="lazy" alt="" src="/iPhone-13-Pro2@2x.png" />
      <div className={styles.frameDiv}>
        <div className={styles.featureItemsParent}>
          <div className={styles.featureItems}>
            <div className={styles.fullyCompliantWithLabel}>No traditional branches</div>
          </div>
          <div className={styles.ourDigitalBanking}>
            Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks
            and optimising operational costs for a seamless branchless experience.
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <CheckIcon />
            <div className={styles.branchlessPaperless}>{`Branchless & Paperless Banking`}</div>
          </div>
          <div className={styles.frameParent5}>
            <CheckIcon />
            <div className={styles.branchlessPaperless}>Digital Transformation Capability</div>
          </div>
          <div className={styles.frameParent5}>
            <CheckIcon />
            <div className={styles.branchlessPaperless}>Optimized, Adoptable and Scalable</div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Slide5Ticker;
