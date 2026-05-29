import { FunctionComponent } from "react";
import {
  FrameComponent,
  Slide3Component1,
  Slide6Component1,
  Slide6FrameComponent,
  Slide7Component2,
  Slide7FrameComponent,
  Slide7FrameComponent1,
  Slide7Logo,
  Slide8FrameComponent,
  Slide8FrameComponent1,
} from "../components/slides-frame-component";
import {
  Slide5Ticker,
  Slide5FeatureCards,
  Slide5RequestDemo,
  Slide5LearnMore,
  Slide5ContactUs,
  Slide5RequestDemoDark,
} from "../components/slide5";
import styles from "./slides.module.css";

export const Slide3: FunctionComponent = () => {
  return (
    <div className={styles.s3Root}>
      <h1 className={styles.s3Cb7}>CB7</h1>
      <img
        className={styles.s3RootChild}
        loading="lazy"
        alt=""
        src="/slide3-dashboard.png"
      />
      <section className={styles.s3FrameParent}>
        <div className={styles.s3FrameGroup}>
          <div className={styles.s3ACompleteCloudBasedCoreBaParent}>
            <h1 className={styles.s3ACompleteCloudBased}>
              A complete cloud-based core banking.
            </h1>
            <div className={styles.s3FasterTimeTo}>
              Faster time to market with our cloud-based core banking services
            </div>
          </div>
          <FrameComponent property1="Default" />
        </div>
        <Slide3Component1 property1="Frame 61" />
      </section>
    </div>
  );
};

export const Slide4: FunctionComponent = () => {
  return (
    <div className={styles.s4Div}>
      {/* Dashboard image + feature list */}
      <div className={styles.s4TopSection}>
        <img
          className={styles.s4Child}
          loading="lazy"
          alt=""
          src="/laptop-dashboard.png"
        />
        <section className={styles.s4RunAMoreEfficientFlexibleParent}>
          <div className={styles.s4RunAMore}>
            Run a more efficient, flexible, and digitally connected core banking
            system
          </div>
          <div className={styles.s4WarumFindmeoFrSuchende}>
            <div className={styles.s4WhatYouWill}>What you will get:</div>
            <div className={styles.s4Div2}>
              <div className={styles.s4Container}>
                <div className={styles.s4En}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4CustomerOnBoarding}>Customer-On Boarding</div>
                </div>
                <div className={styles.s4En}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4CustomerOnBoarding}>Managing deposits and withdrawals</div>
                </div>
                <div className={styles.s4En}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4CustomerOnBoarding}>Transaction management</div>
                </div>
                <div className={styles.s4En}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4CustomerOnBoarding}>Interest Calculation</div>
                </div>
                <div className={styles.s4FrameGroup}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4PaymentsProcessingCash}>
                    Payments processing (cash, cheques, mandates, NEFT, RTGS etc)
                  </div>
                </div>
              </div>
              <div className={styles.s4Div3}>
                <div className={styles.s4Div4}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4CustomerOnBoarding}>CRM Activities</div>
                </div>
                <div className={styles.s4FrameGroup}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4PaymentsProcessingCash}>Configuring New Banking Products</div>
                </div>
                <div className={styles.s4FrameGroup}>
                  <img className={styles.s4EnChild} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4PaymentsProcessingCash}>Loan disbursal and Loan management</div>
                </div>
                <div className={styles.s4Heart}>
                  <img className={styles.s4InfoIcon} loading="lazy" alt="" src="/Frame-15.svg" />
                  <div className={styles.s4EstablishingCriteriaFor}>
                    Establishing criteria for minimum balances, interest rates,
                    number of withdrawals allowed and so on.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Dark CTA card — from fusion-starter design */}
      <div className={styles.s4DarkCard}>
        <div className={styles.s4DarkCardWatermark}>CB7</div>
        <div className={styles.s4DarkCardText}>
          <h1 className={styles.s4DarkCardHeading}>
            Take the full advantage of going paper-less now.
          </h1>
          <p className={styles.s4DarkCardDesc}>
            CB7 helps your financial institution improve the client experience,
            automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className={styles.s4DarkCardButtons}>
          <button className={styles.s4ContactUsBtn}>Contact Us</button>
          <button className={styles.s4RequestDemoBtn}>Request Demo</button>
        </div>
      </div>
    </div>
  );
};

export const Slide5: FunctionComponent = () => {
  return (
    <div className={styles.s5Root}>
      <Slide5Ticker property1="Default" />
      <main className={styles.s5EllipseParent}>
        <div className={styles.s5FrameChild} />
        <div className={styles.s5FrameItem} />
        <h2 className={styles.s5N7}>N7</h2>
        <Slide5FeatureCards />
        <section className={styles.s5OutoftheboxContainerParent}>
          <section className={styles.s5OutoftheboxContainer}>
            <div className={styles.s5OutoftheboxContentParent}>
              <div className={styles.s5OutoftheboxContent}>
                <h1 className={styles.s5DigitalBankingOutOfTheBox}>
                  Digital banking out-of-the-box
                </h1>
                <div className={styles.s5N7HelpsYour}>
                  N7 helps your financial institution improve the client
                  experience, automate and optimize procedures
                </div>
              </div>
              <Slide5RequestDemo property1="Default" />
            </div>
            <Slide5LearnMore property1="Frame 61" />
          </section>
          <div className={styles.s5PaperlessContentParent}>
            <div className={styles.s5PaperlessContent}>
              <h1 className={styles.s5TakeTheFull}>
                Take the full advantage of going paper-less now.
              </h1>
              <div className={styles.s5N7HelpsYour2}>
                {`N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}
              </div>
            </div>
            <h2 className={styles.s5N72}>N7</h2>
            <div className={styles.s5InstanceParent}>
              <Slide5ContactUs property1="Default" />
              <Slide5RequestDemoDark property1="Default" />
            </div>
          </div>
        </section>
        <img className={styles.s5VectorIcon} alt="" src="/Vector1@2x.png" />
        <h1 className={styles.s5H1}>7</h1>
        <div className={styles.s5FrameInner} />
      </main>
    </div>
  );
};

export const Slide6: FunctionComponent = () => {
  return (
    <div className={styles.s6Root}>
      <div className={styles.s6Artboard} />
      <section className={styles.s6Placeholder}>
        <h1 className={styles.s6GetYourselfUpToSpeed}>
          Get yourself up-to-speed on all the things happening in fintech
        </h1>
        <Slide6FrameComponent property1="Default" requestDemo="Insights" />
      </section>
      <section className={styles.s6ArticlesColumn}>
        <div className={styles.s6ContentColumnParent}>
          <div className={styles.s6ContentColumn}>
            <div className={styles.s6VectorParent}>
              <img
                className={styles.s6VectorIcon}
                loading="lazy"
                alt=""
                src="/Vector@2x.png"
              />
              <img
                className={styles.s6VectorIcon}
                loading="lazy"
                alt=""
                src="/Vector@2x.png"
              />
              <img
                className={styles.s6VectorIcon}
                loading="lazy"
                alt=""
                src="/Vector@2x.png"
              />
              <img
                className={styles.s6VectorIcon}
                loading="lazy"
                alt=""
                src="/Vector@2x.png"
              />
            </div>
          </div>
          <div className={styles.s6Frame50Column1}>
            <div className={styles.s6ArticleDetails}>
              <div className={styles.s6GettingStarted}>getting started</div>
              <h2 className={styles.s6HowToTransition}>
                How to transition from a traditional to a digital bank
              </h2>
              <div className={styles.s6DavidGrohlParent}>
                <div className={styles.s6DavidGrohl}>David Grohl</div>
                <div className={styles.s6DavidGrohl}>17/08/24</div>
              </div>
            </div>
            <Slide6FrameComponent
              property1="Default"
              requestDemo="read more"
              frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
              frameButtonPadding="10px 111px"
              requestDemoFontSize="12px"
              requestDemoColor="rgba(233, 244, 249, 0.5)"
            />
          </div>
        </div>
        <div className={styles.s6CombinedArticles}>
          <div className={styles.s6ArticlesContainer}>
            <div className={styles.s6ArticleDuplicates}>
              <div className={styles.s6GettingStarted}>getting started</div>
              <h2 className={styles.s6HowToTransition}>
                How to transition from a traditional to a digital bank
              </h2>
              <div className={styles.s6DavidGrohlParent}>
                <div className={styles.s6DavidGrohl}>David Grohl</div>
                <div className={styles.s6DavidGrohl}>17/08/24</div>
              </div>
            </div>
            <Slide6FrameComponent
              property1="Default"
              requestDemo="read more"
              frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
              frameButtonPadding="10px 111px"
              requestDemoFontSize="12px"
              requestDemoColor="rgba(233, 244, 249, 0.5)"
            />
          </div>
          <div className={styles.s6ArticlesContainer}>
            <div className={styles.s6ArticleDuplicates}>
              <div className={styles.s6GettingStarted}>getting started</div>
              <h2 className={styles.s6HowToTransition}>
                How to transition from a traditional to a digital bank
              </h2>
              <div className={styles.s6DavidGrohlParent}>
                <div className={styles.s6DavidGrohl}>David Grohl</div>
                <div className={styles.s6DavidGrohl}>17/08/24</div>
              </div>
            </div>
            <Slide6FrameComponent
              property1="Default"
              requestDemo="read more"
              frameButtonBorder="1px solid rgba(233, 244, 249, 0.5)"
              frameButtonPadding="10px 111px"
              requestDemoFontSize="12px"
              requestDemoColor="rgba(233, 244, 249, 0.5)"
            />
          </div>
        </div>
        <Slide6Component1 property1="Frame 61" />
      </section>
    </div>
  );
};

const Slide7: FunctionComponent = () => {
  return (
    <div className={styles.s7QunMtKhu}>
      <h1 className={styles.s7OurCaseStudies}>Our Case Studies</h1>
      <main className={styles.s7StatusBar}>
        <div className={styles.s7QunMtKhu2}>
          <section className={styles.s7CaseStudiesCarouselGrid1}>
            <Slide7FrameComponent
              nhpSInThoi="/Nh-p-s-i-n-tho-i@2x.png"
              vuiLngNhpSInThoiChngT="/Nh-p-s-i-n-tho-i@2x.png"
              buttonTipTc="/Nh-p-s-i-n-tho-i@2x.png"
              tipTc="/Nh-p-s-i-n-tho-i@2x.png"
              property1="Frame 61"
            />
            <Slide7FrameComponent
              nhpSInThoi="/Nh-p-s-i-n-tho-i@2x.png"
              vuiLngNhpSInThoiChngT="/Nh-p-s-i-n-tho-i@2x.png"
              buttonTipTc="/Nh-p-s-i-n-tho-i@2x.png"
              tipTc="/Nh-p-s-i-n-tho-i@2x.png"
              frameDivLeft="0.1px"
              frameDivPadding="22.3px 20px"
              property1="Frame 61"
            />
          </section>
          <section className={styles.s7DetailsContainer}>
            <div className={styles.s7DetailsWrapper}>
              <div className={styles.s7VectorParent}>
                <img
                  className={styles.s7VectorIcon}
                  alt=""
                  src="/Vector@2x.png"
                />
                <img
                  className={styles.s7VectorIcon}
                  loading="lazy"
                  alt=""
                  src="/Vector@2x.png"
                />
                <img
                  className={styles.s7VectorIcon}
                  alt=""
                  src="/Vector@2x.png"
                />
                <img
                  className={styles.s7VectorIcon}
                  loading="lazy"
                  alt=""
                  src="/Vector@2x.png"
                />
              </div>
            </div>
            <div className={styles.s7DetailsContent}>
              <div className={styles.s7ContentWrapper}>
                <div className={styles.s7GettingStartedParent}>
                  <div className={styles.s7GettingStarted}>getting started</div>
                  <h1 className={styles.s7HowWeHelp}>
                    How we help brand reach out to more people
                  </h1>
                  <div className={styles.s7FrameChild} />
                </div>
                <Slide7Logo name1="Zoomerr" />
              </div>
              <Slide7FrameComponent1 property1="Default" />
            </div>
          </section>
        </div>
        <div className={styles.s7Frame110Row1}>
          <div className={styles.s7Frame110Row12}>
            <div className={styles.s7Frame110Row13}>
              <img
                className={styles.s7ActionDetailsIcon}
                loading="lazy"
                alt=""
                src="/Action-Details@2x.png"
              />
              <Slide7Component2 property1="Frame 61" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const Slide8: FunctionComponent = () => {
  return (
    <div className={styles.slide8Root}>
      <div className={styles.slide8TextParent}>
        <h1 className={styles.slide8Heading}>
          Take the full advantage of going paper-less now.
        </h1>
        <div
          className={styles.slide8Desc}
        >{`CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations `}</div>
      </div>
      <div className={styles.slide8ContactRequest}>
        <div className={styles.slide8Buttons}>
          <Slide8FrameComponent property1="Default" />
          <Slide8FrameComponent1 property1="Default" />
        </div>
      </div>
    </div>
  );
};

export const Slide9: FunctionComponent = () => {
  return (
    <div className={styles.slide9Root}>
      <section className={styles.slide9RootChild} />
      <div className={styles.slide9Copyright}>
        Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
        Commercial Brand] — [Registered under the Companies Act 2006 in England
        and Wales | Number of Incorporation 13100992]
      </div>
      <div className={styles.slide9Credits}>
        Built with{" "}
        <a href="https://www.locofy.ai" target="_blank" rel="noopener noreferrer">Locofy.ai</a>
        {" · "}
        <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">Claude.ai</a>
        {" · "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel.com</a>
      </div>
      <img
        className={styles.slide9MaskGroupIcon}
        loading="lazy"
        alt=""
        src="/Mask-group@2x.png"
      />
      <footer className={styles.slide9FrameParent}>
        <div className={styles.slide9FrameGroup}>
          <div className={styles.slide9LondonParent}>
            <div className={styles.slide9London}>London</div>
            <div className={styles.slide9Address}>
              Linktia Infosystems Ltd – CB7,
              <br />
              26 Main Road Sundridge,TN14 6EP, England, United Kingdom.
            </div>
          </div>
          <div className={styles.slide9SolutionsParent}>
            <div className={styles.slide9London}>Solutions</div>
            <div className={styles.slide9FrameContainer}>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Address}>Core Banking CB7</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Address}>Digital Banking N7</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Link}>Open Banking</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9LoanParent}>
                <button className={styles.slide9LoanBtn}>
                  Loan Origination System
                </button>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9LoanParent}>
                <button className={styles.slide9LoanBtn}>
                  Loan Management System
                </button>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9LoanParent}>
                <button className={styles.slide9LoanBtn}>
                  Digital Transformation
                </button>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slide9FrameDiv}>
          <div className={styles.slide9DubaiParent}>
            <div className={styles.slide9London}>Dubai</div>
            <div className={styles.slide9Address}>
              Linktia Infosystems Ltd – CB7,Jumeirah Business, Center 5 Cluster
              W, Jumeirah Lakes Towers, Dubai, United Arab Emirates
            </div>
          </div>
          <div className={styles.slide9N7Parent}>
            <div className={styles.slide9London}>N7 Banking</div>
            <div className={styles.slide9FrameParent2}>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Link}>About Us</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Link}>Solutions</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Link}>Contact</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9CompanyParent}>
                <div className={styles.slide9Link}>Company</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9CompanyParent}>
                <div className={styles.slide9Link}>Careers</div>
                <img
                  className={styles.slide9DelimitersIcon}
                  loading="lazy"
                  alt=""
                  src="/31.svg"
                />
              </div>
              <div className={styles.slide9CompanyParent}>
                <div className={styles.slide9Link}>Insights</div>
                <img className={styles.slide9DelimitersIcon} alt="" src="/31.svg" />
              </div>
              <div className={styles.slide9CompanyParent}>
                <div className={styles.slide9Link}>Core Team</div>
                <img className={styles.slide9DelimitersIcon} alt="" src="/31.svg" />
              </div>
            </div>
            <div className={styles.slide9CompanyParent}>
              <div className={styles.slide9Link}>Brand Center</div>
              <img
                className={styles.slide9DelimitersIcon}
                loading="lazy"
                alt=""
                src="/31.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.slide9FrameParent3}>
          <div className={styles.slide9LondonGroup}>
            <div className={styles.slide9London}>London</div>
            <div className={styles.slide9Address}>
              Linktia Infosystems Ltd – CB7,Nirmal, Anand Nagar, Suncity Road,
              Pune, Maharashtra, 411041, India
            </div>
          </div>
          <div className={styles.slide9SocialsParent}>
            <div className={styles.slide9London}>Our Socials</div>
            <div className={styles.slide9SocialLinks}>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Link}>LinkedIn</div>
                <img className={styles.slide9DelimitersIcon} alt="" src="/31.svg" />
              </div>
              <div className={styles.slide9Item}>
                <div className={styles.slide9Link}>X</div>
                <img className={styles.slide9DelimitersIcon} alt="" src="/31.svg" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Slide7;
