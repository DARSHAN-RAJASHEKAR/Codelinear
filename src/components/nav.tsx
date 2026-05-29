import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./nav.module.css";

export type NavType = {
  className?: string;
  homeButton1?: string;
  creditCard11?: string;
  user11?: string;
  swap1?: string;

  /** Variant props */
  property1?: string;

  /** Style props */
  navPosition?: CSSProperties["position"];
  navTop?: CSSProperties["top"];
  navLeft?: CSSProperties["left"];
  navWidth?: CSSProperties["width"];
  navHeight?: CSSProperties["height"];
  navAlignSelf?: CSSProperties["alignSelf"];
  ellipseDivWidth?: CSSProperties["width"];
  ellipseDivTop?: CSSProperties["top"];
  ellipseDivRight?: CSSProperties["right"];
  ellipseDivBottom?: CSSProperties["bottom"];
  ellipseDivLeft?: CSSProperties["left"];
  ellipseDivBackdropFilter?: CSSProperties["backdropFilter"];
  rectangleDivTop?: CSSProperties["top"];
  rectangleDivRight?: CSSProperties["right"];
  rectangleDivBottom?: CSSProperties["bottom"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivBackdropFilter?: CSSProperties["backdropFilter"];
  rectangleDivBorderRadius?: CSSProperties["borderRadius"];
  navItemsHeight?: CSSProperties["height"];
  navItemsWidth?: CSSProperties["width"];
  navItemsTop?: CSSProperties["top"];
  navItemsRight?: CSSProperties["right"];
  navItemsBottom?: CSSProperties["bottom"];
  navItemsLeft?: CSSProperties["left"];
  homeButton1IconHeight?: CSSProperties["height"];
  homeButton1IconWidth?: CSSProperties["width"];
  homeButton1IconRight?: CSSProperties["right"];
  homeButton1IconBottom?: CSSProperties["bottom"];
  homeButton1IconLeft?: CSSProperties["left"];
  homeTop?: CSSProperties["top"];
  homeFontSize?: CSSProperties["fontSize"];
  homeMinWidth?: CSSProperties["minWidth"];
  navItemsHeight1?: CSSProperties["height"];
  navItemsWidth1?: CSSProperties["width"];
  navItemsTop1?: CSSProperties["top"];
  navItemsRight1?: CSSProperties["right"];
  navItemsBottom1?: CSSProperties["bottom"];
  navItemsLeft1?: CSSProperties["left"];
  cardTop?: CSSProperties["top"];
  cardFontSize?: CSSProperties["fontSize"];
  cardMinWidth?: CSSProperties["minWidth"];
  creditCard11IconHeight?: CSSProperties["height"];
  creditCard11IconWidth?: CSSProperties["width"];
  creditCard11IconRight?: CSSProperties["right"];
  creditCard11IconBottom?: CSSProperties["bottom"];
  creditCard11IconLeft?: CSSProperties["left"];
  navItemsHeight2?: CSSProperties["height"];
  navItemsWidth2?: CSSProperties["width"];
  navItemsTop2?: CSSProperties["top"];
  navItemsRight2?: CSSProperties["right"];
  navItemsBottom2?: CSSProperties["bottom"];
  navItemsLeft2?: CSSProperties["left"];
  profileTop?: CSSProperties["top"];
  profileFontSize?: CSSProperties["fontSize"];
  profileMinWidth?: CSSProperties["minWidth"];
  user11IconHeight?: CSSProperties["height"];
  user11IconWidth?: CSSProperties["width"];
  user11IconRight?: CSSProperties["right"];
  user11IconBottom?: CSSProperties["bottom"];
  user11IconLeft?: CSSProperties["left"];
  navItemsHeight3?: CSSProperties["height"];
  navItemsWidth3?: CSSProperties["width"];
  navItemsTop3?: CSSProperties["top"];
  navItemsRight3?: CSSProperties["right"];
  navItemsBottom3?: CSSProperties["bottom"];
  navItemsLeft3?: CSSProperties["left"];
  transactionTop?: CSSProperties["top"];
  transactionFontSize?: CSSProperties["fontSize"];
  transactionMinWidth?: CSSProperties["minWidth"];
  swap1IconHeight?: CSSProperties["height"];
  swap1IconWidth?: CSSProperties["width"];
  swap1IconRight?: CSSProperties["right"];
  swap1IconBottom?: CSSProperties["bottom"];
  swap1IconLeft?: CSSProperties["left"];
  rectangleDivHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  rectangleDivTop1?: CSSProperties["top"];
  rectangleDivRight1?: CSSProperties["right"];
  rectangleDivBottom1?: CSSProperties["bottom"];
  rectangleDivLeft1?: CSSProperties["left"];
  rectangleDivBorderRadius1?: CSSProperties["borderRadius"];
};

const Nav: FunctionComponent<NavType> = ({
  className = "",
  property1 = "profile",
  homeButton1,
  creditCard11,
  user11,
  swap1,
  navPosition,
  navTop,
  navLeft,
  navWidth,
  navHeight,
  navAlignSelf,
  ellipseDivWidth,
  ellipseDivTop,
  ellipseDivRight,
  ellipseDivBottom,
  ellipseDivLeft,
  ellipseDivBackdropFilter,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivBackdropFilter,
  rectangleDivBorderRadius,
  navItemsHeight,
  navItemsWidth,
  navItemsTop,
  navItemsRight,
  navItemsBottom,
  navItemsLeft,
  homeButton1IconHeight,
  homeButton1IconWidth,
  homeButton1IconRight,
  homeButton1IconBottom,
  homeButton1IconLeft,
  homeTop,
  homeFontSize,
  homeMinWidth,
  navItemsHeight1,
  navItemsWidth1,
  navItemsTop1,
  navItemsRight1,
  navItemsBottom1,
  navItemsLeft1,
  cardTop,
  cardFontSize,
  cardMinWidth,
  creditCard11IconHeight,
  creditCard11IconWidth,
  creditCard11IconRight,
  creditCard11IconBottom,
  creditCard11IconLeft,
  navItemsHeight2,
  navItemsWidth2,
  navItemsTop2,
  navItemsRight2,
  navItemsBottom2,
  navItemsLeft2,
  profileTop,
  profileFontSize,
  profileMinWidth,
  user11IconHeight,
  user11IconWidth,
  user11IconRight,
  user11IconBottom,
  user11IconLeft,
  navItemsHeight3,
  navItemsWidth3,
  navItemsTop3,
  navItemsRight3,
  navItemsBottom3,
  navItemsLeft3,
  transactionTop,
  transactionFontSize,
  transactionMinWidth,
  swap1IconHeight,
  swap1IconWidth,
  swap1IconRight,
  swap1IconBottom,
  swap1IconLeft,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop1,
  rectangleDivRight1,
  rectangleDivBottom1,
  rectangleDivLeft1,
  rectangleDivBorderRadius1,
}) => {
  const navStyle: CSSProperties = useMemo(() => {
    return {
      position: navPosition,
      top: navTop,
      left: navLeft,
      width: navWidth,
      height: navHeight,
      alignSelf: navAlignSelf,
    };
  }, [navPosition, navTop, navLeft, navWidth, navHeight, navAlignSelf]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      width: ellipseDivWidth,
      top: ellipseDivTop,
      right: ellipseDivRight,
      bottom: ellipseDivBottom,
      left: ellipseDivLeft,
      backdropFilter: ellipseDivBackdropFilter,
    };
  }, [
    ellipseDivWidth,
    ellipseDivTop,
    ellipseDivRight,
    ellipseDivBottom,
    ellipseDivLeft,
    ellipseDivBackdropFilter,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      backdropFilter: rectangleDivBackdropFilter,
      borderRadius: rectangleDivBorderRadius,
    };
  }, [
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivBackdropFilter,
    rectangleDivBorderRadius,
  ]);

  const navItemsStyle: CSSProperties = useMemo(() => {
    return {
      height: navItemsHeight,
      width: navItemsWidth,
      top: navItemsTop,
      right: navItemsRight,
      bottom: navItemsBottom,
      left: navItemsLeft,
    };
  }, [
    navItemsHeight,
    navItemsWidth,
    navItemsTop,
    navItemsRight,
    navItemsBottom,
    navItemsLeft,
  ]);

  const homeButton1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: homeButton1IconHeight,
      width: homeButton1IconWidth,
      right: homeButton1IconRight,
      bottom: homeButton1IconBottom,
      left: homeButton1IconLeft,
    };
  }, [
    homeButton1IconHeight,
    homeButton1IconWidth,
    homeButton1IconRight,
    homeButton1IconBottom,
    homeButton1IconLeft,
  ]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      top: homeTop,
      fontSize: homeFontSize,
      minWidth: homeMinWidth,
    };
  }, [homeTop, homeFontSize, homeMinWidth]);

  const navItems1Style: CSSProperties = useMemo(() => {
    return {
      height: navItemsHeight1,
      width: navItemsWidth1,
      top: navItemsTop1,
      right: navItemsRight1,
      bottom: navItemsBottom1,
      left: navItemsLeft1,
    };
  }, [
    navItemsHeight1,
    navItemsWidth1,
    navItemsTop1,
    navItemsRight1,
    navItemsBottom1,
    navItemsLeft1,
  ]);

  const cardStyle: CSSProperties = useMemo(() => {
    return {
      top: cardTop,
      fontSize: cardFontSize,
      minWidth: cardMinWidth,
    };
  }, [cardTop, cardFontSize, cardMinWidth]);

  const creditCard11IconStyle: CSSProperties = useMemo(() => {
    return {
      height: creditCard11IconHeight,
      width: creditCard11IconWidth,
      right: creditCard11IconRight,
      bottom: creditCard11IconBottom,
      left: creditCard11IconLeft,
    };
  }, [
    creditCard11IconHeight,
    creditCard11IconWidth,
    creditCard11IconRight,
    creditCard11IconBottom,
    creditCard11IconLeft,
  ]);

  const navItems2Style: CSSProperties = useMemo(() => {
    return {
      height: navItemsHeight2,
      width: navItemsWidth2,
      top: navItemsTop2,
      right: navItemsRight2,
      bottom: navItemsBottom2,
      left: navItemsLeft2,
    };
  }, [
    navItemsHeight2,
    navItemsWidth2,
    navItemsTop2,
    navItemsRight2,
    navItemsBottom2,
    navItemsLeft2,
  ]);

  const profileStyle: CSSProperties = useMemo(() => {
    return {
      top: profileTop,
      fontSize: profileFontSize,
      minWidth: profileMinWidth,
    };
  }, [profileTop, profileFontSize, profileMinWidth]);

  const user11IconStyle: CSSProperties = useMemo(() => {
    return {
      height: user11IconHeight,
      width: user11IconWidth,
      right: user11IconRight,
      bottom: user11IconBottom,
      left: user11IconLeft,
    };
  }, [
    user11IconHeight,
    user11IconWidth,
    user11IconRight,
    user11IconBottom,
    user11IconLeft,
  ]);

  const navItems3Style: CSSProperties = useMemo(() => {
    return {
      height: navItemsHeight3,
      width: navItemsWidth3,
      top: navItemsTop3,
      right: navItemsRight3,
      bottom: navItemsBottom3,
      left: navItemsLeft3,
    };
  }, [
    navItemsHeight3,
    navItemsWidth3,
    navItemsTop3,
    navItemsRight3,
    navItemsBottom3,
    navItemsLeft3,
  ]);

  const transactionStyle: CSSProperties = useMemo(() => {
    return {
      top: transactionTop,
      fontSize: transactionFontSize,
      minWidth: transactionMinWidth,
    };
  }, [transactionTop, transactionFontSize, transactionMinWidth]);

  const swap1IconStyle: CSSProperties = useMemo(() => {
    return {
      height: swap1IconHeight,
      width: swap1IconWidth,
      right: swap1IconRight,
      bottom: swap1IconBottom,
      left: swap1IconLeft,
    };
  }, [
    swap1IconHeight,
    swap1IconWidth,
    swap1IconRight,
    swap1IconBottom,
    swap1IconLeft,
  ]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop1,
      right: rectangleDivRight1,
      bottom: rectangleDivBottom1,
      left: rectangleDivLeft1,
      borderRadius: rectangleDivBorderRadius1,
    };
  }, [
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop1,
    rectangleDivRight1,
    rectangleDivBottom1,
    rectangleDivLeft1,
    rectangleDivBorderRadius1,
  ]);

  return (
    <div
      className={[styles.nav, className].join(" ")}
      data-property1={property1}
      style={navStyle}
    >
      <div className={styles.navChild} style={ellipseDivStyle} />
      <div className={styles.navItem} style={rectangleDivStyle} />
      <div className={styles.navItems} style={navItemsStyle}>
        <img
          className={styles.homeButton1Icon}
          loading="lazy"
          alt=""
          src={homeButton1}
          style={homeButton1IconStyle}
        />
        <div className={styles.home} style={homeStyle}>
          Home
        </div>
      </div>
      <div className={styles.navItems2} style={navItems1Style}>
        <div className={styles.card} style={cardStyle}>
          Card
        </div>
        <img
          className={styles.creditCard11Icon}
          loading="lazy"
          alt=""
          src={creditCard11}
          style={creditCard11IconStyle}
        />
      </div>
      <div className={styles.navItems3} style={navItems2Style}>
        <div className={styles.profile} style={profileStyle}>
          Profile
        </div>
        <img
          className={styles.user11Icon}
          loading="lazy"
          alt=""
          src={user11}
          style={user11IconStyle}
        />
      </div>
      <div className={styles.navItems4} style={navItems3Style}>
        <div className={styles.transaction} style={transactionStyle}>
          Transaction
        </div>
        <img
          className={styles.swap1Icon}
          loading="lazy"
          alt=""
          src={swap1}
          style={swap1IconStyle}
        />
      </div>
      <div className={styles.navInner} style={rectangleDiv1Style} />
    </div>
  );
};

export default Nav;
