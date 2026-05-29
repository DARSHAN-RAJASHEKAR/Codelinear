import { FunctionComponent } from "react";
import Nav from "./nav";
import styles from "./home.module.css";

export type HomeType = {
  className?: string;
};

const Home: FunctionComponent<HomeType> = ({ className = "" }) => {
  return (
    <div className={[styles.home, className].join(" ")}>
      <div className={styles.tag}>
        <div className={styles.cardHeader}>
          <div className={styles.userInfo}>
            <img
              className={styles.userInfoChild}
              alt=""
              src="/Rectangle-111.svg"
            />
            <div className={styles.toniKrossParent}>
              <b className={styles.toniKross}>Toni Kross</b>
              <div className={styles.goodMorning}>Good Morning</div>
            </div>
          </div>
          <img
            className={styles.cardHeaderChild}
            loading="lazy"
            alt=""
            src="/Group-51.svg"
          />
        </div>
        <div className={styles.totalBalanceParent}>
          <div className={styles.totalBalance}>Total balance</div>
          <div className={styles.usd}>$42,295.00 USD</div>
        </div>
        <div className={styles.appointmentDetails} />
        <div className={styles.actionButtons}>
          <div className={styles.frameParent}>
            <img
              className={styles.rectangleParent}
              alt=""
              src="/Group-61.svg"
            />
            <div className={styles.fundTransfer}>Fund Transfer</div>
          </div>
          <div className={styles.frameParent}>
            <img
              className={styles.rectangleParent}
              alt=""
              src="/Group-121.svg"
            />
            <div className={styles.addMoney}>Add Money</div>
          </div>
          <div className={styles.frameContainer}>
            <img
              className={styles.rectangleParent}
              alt=""
              src="/Group-71.svg"
            />
            <div className={styles.more}>More</div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.recentActivity}>Recent activity</div>
        <div className={styles.filterTabs}>
          <div className={styles.thisDayWrapper}>
            <div className={styles.thisDay}>This Day</div>
          </div>
          <div className={styles.thisWeekWrapper}>
            <div className={styles.thisWeek}>This Week</div>
          </div>
          <div className={styles.thisDayWrapper}>
            <div className={styles.thisMonth}>This Month</div>
          </div>
          <div className={styles.thisDayWrapper}>
            <div className={styles.month}>6 Month</div>
          </div>
        </div>
        <div className={styles.group27Row0Parent}>
          <div className={styles.group27Row0}>
            <img
              className={styles.group27Row0Child}
              alt=""
              src="/Group-161.svg"
            />
            <div className={styles.groupDiv}>
              <div className={styles.toJinParent}>
                <div className={styles.toJin}>To Jin</div>
                <div className={styles.activityIcon} />
                <div className={styles.work}>Work</div>
              </div>
              <div className={styles.jun2022}>12 jun 2022</div>
            </div>
            <div className={styles.activitySeparator}>-$59</div>
          </div>
          <div className={styles.div} />
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.group27Row0}>
            <img
              className={styles.group27Row0Child}
              alt=""
              src="/Group-172.svg"
            />
            <div className={styles.groupDiv}>
              <div className={styles.fromGoogleParent}>
                <div className={styles.fromGoogle}>From Google</div>
                <div className={styles.ellipseDiv} />
                <div className={styles.salary}>Salary</div>
              </div>
              <div className={styles.jun2022}>10 jun 2022</div>
            </div>
            <div className={styles.toJin}>+$859</div>
          </div>
          <div className={styles.div} />
        </div>
        <div className={styles.frameParent5}>
          <div className={styles.group27Row0}>
            <img
              className={styles.group27Row0Child}
              alt=""
              src="/Group-161.svg"
            />
            <div className={styles.groupDiv}>
              <div className={styles.toDavidParent}>
                <div className={styles.toDavid}>To David</div>
                <div className={styles.ellipseDiv} />
                <div className={styles.work}>Work</div>
              </div>
              <div className={styles.jun2022}>7 jun 2022</div>
            </div>
            <div className={styles.appointment2}>-$479</div>
          </div>
          <div className={styles.div} />
        </div>
      </div>
      <div className={styles.frameParent8}>
        <div className={styles.group27Row0}>
          <img
            className={styles.group27Row0Child}
            alt=""
            src="/Group-173.svg"
          />
          <div className={styles.groupDiv}>
            <div className={styles.fromGoogleGroup}>
              <div className={styles.fromGoogle}>From Google</div>
              <div className={styles.ellipseDiv} />
              <div className={styles.bonus}>Bonus</div>
            </div>
            <div className={styles.jun2022}>10 jun 2022</div>
          </div>
          <div className={styles.toJin}>+$859</div>
        </div>
        <div className={styles.div} />
      </div>
      <Nav
        property1="Home"
        homeButton1="/006-home-button-11.svg"
        creditCard11="/004-credit-card-1-11.svg"
        user11="/008-user-1-11.svg"
        swap1="/002-swap-11.svg"
        navPosition="relative"
        navTop="unset"
        navLeft="unset"
        navWidth="unset"
        navHeight="43px"
        navAlignSelf="stretch"
        ellipseDivWidth="20.67%"
        ellipseDivTop="4%"
        ellipseDivRight="79.52%"
        ellipseDivBottom="-4%"
        ellipseDivLeft="-0.19%"
        ellipseDivBackdropFilter="blur(43px)"
        rectangleDivTop="4%"
        rectangleDivRight="-0.67%"
        rectangleDivBottom="-4%"
        rectangleDivLeft="-0.19%"
        rectangleDivBackdropFilter="blur(43px)"
        rectangleDivBorderRadius="16.14px 16.14px 0px 0px"
        navItemsHeight="67.91%"
        navItemsWidth="10.1%"
        navItemsTop="20.28%"
        navItemsRight="83.89%"
        navItemsBottom="11.81%"
        navItemsLeft="6.01%"
        homeButton1IconHeight="44.18%"
        homeButton1IconWidth="61.43%"
        homeButton1IconRight="20.48%"
        homeButton1IconBottom="55.82%"
        homeButton1IconLeft="18.1%"
        homeTop="58.9%"
        homeFontSize="7.5px"
        homeMinWidth="21px"
        navItemsHeight1="67.91%"
        navItemsWidth1="8.65%"
        navItemsTop1="20.28%"
        navItemsRight1="62.07%"
        navItemsBottom1="11.81%"
        navItemsLeft1="29.28%"
        cardTop="58.9%"
        cardFontSize="7.5px"
        cardMinWidth="18px"
        creditCard11IconHeight="44.18%"
        creditCard11IconWidth="71.67%"
        creditCard11IconRight="13.33%"
        creditCard11IconBottom="55.82%"
        creditCard11IconLeft="15%"
        navItemsHeight2="67.91%"
        navItemsWidth2="10.58%"
        navItemsTop2="20.28%"
        navItemsRight2="5.29%"
        navItemsBottom2="11.81%"
        navItemsLeft2="84.13%"
        profileTop="58.9%"
        profileFontSize="7.5px"
        profileMinWidth="22px"
        user11IconHeight="44.18%"
        user11IconWidth="58.64%"
        user11IconRight="21.82%"
        user11IconBottom="55.82%"
        user11IconLeft="19.55%"
        navItemsHeight3="67.91%"
        navItemsWidth3="19.71%"
        navItemsTop3="20.28%"
        navItemsRight3="28.99%"
        navItemsBottom3="11.81%"
        navItemsLeft3="51.3%"
        transactionTop="58.9%"
        transactionFontSize="7.5px"
        transactionMinWidth="41px"
        swap1IconHeight="44.18%"
        swap1IconWidth="31.46%"
        swap1IconRight="35.61%"
        swap1IconBottom="55.82%"
        swap1IconLeft="32.93%"
        rectangleDivHeight="1.86%"
        rectangleDivWidth="9.57%"
        rectangleDivTop1="4%"
        rectangleDivRight1="84.18%"
        rectangleDivBottom1="94.14%"
        rectangleDivLeft1="6.25%"
        rectangleDivBorderRadius1="12.9px"
      />
    </div>
  );
};

export default Home;
