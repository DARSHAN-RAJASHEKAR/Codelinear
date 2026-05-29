import { FunctionComponent, useState } from "react";
import { FrameComponent2 } from "./slides-frame-component";
import ComponentTab from "./component-tab";
import styles from "./star-icon.module.css";

export type StarIconType = {
  className?: string;
};

const StarIcon: FunctionComponent<StarIconType> = ({ className = "" }) => {
  const [frameComponent2Items] = useState([
    {
      frame26: "/Frame-26.svg",
      coreBankingCB7: "Core Banking CB7",
      coreBankingCB7Opacity: undefined,
      cBHelpsYourFinancialInstitutio:
        "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      property1: "Frame 61" as const,
    },
    {
      frame26: "/Frame-261.svg",
      coreBankingCB7: "Digital Banking N7",
      coreBankingCB7Opacity: "0.9" as const,
      cBHelpsYourFinancialInstitutio:
        "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients ",
      property1: "Frame 61" as const,
    },
    {
      frame26: "/Code-View.svg",
      coreBankingCB7: "Open Banking",
      coreBankingCB7Opacity: undefined,
      cBHelpsYourFinancialInstitutio:
        "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      property1: "Frame 61" as const,
    },
  ]);
  return (
    <div className={[styles.starIcon, className].join(" ")}>
      {frameComponent2Items.map((item, index) => (
        <FrameComponent2
          key={index}
          frame26={item.frame26}
          coreBankingCB7={item.coreBankingCB7}
          coreBankingCB7Opacity={item.coreBankingCB7Opacity}
          cBHelpsYourFinancialInstitutio={item.cBHelpsYourFinancialInstitutio}
          property1={item.property1}
        />
      ))}
      <ComponentTab
        componentTab="/Component-tab1.svg"
        loanOriginationSystem="Loan Origination System"
        property1="Frame 61"
      />
      <ComponentTab
        componentTabPadding="unset"
        componentTab="/Component-tab.svg"
        loanOriginationSystem="Loan Management System"
        loanOriginationSystemWidth="unset"
        loanOriginationSystemDisplay="unset"
        property1="Frame 61"
      />
    </div>
  );
};

export default StarIcon;
