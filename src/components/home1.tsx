import { FunctionComponent } from "react";
import Nav from "./nav";
import styles from "./home1.module.css";

export type Home1Type = {
  className?: string;
};

const Home1: FunctionComponent<Home1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.home, className].join(" ")}>
      <div className={styles.homeInner}>
        <div className={styles.recentActivityParent}>
          <div className={styles.recentActivity}>Recent activity</div>
          <div className={styles.filterTabs}>
            <div className={styles.default}>
              <div className={styles.thisDay}>This Day</div>
            </div>
            <div className={styles.filterOptions}>
              <div className={styles.thisWeek}>This Week</div>
            </div>
            <div className={styles.default}>
              <div className={styles.thisMonth}>This Month</div>
            </div>
            <div className={styles.default}>
              <div className={styles.month}>6 Month</div>
            </div>
          </div>
          <div className={styles.group27Row0Parent}>
            <div className={styles.group27Row0}>
              <img
                className={styles.group27Row0Child}
                alt=""
                src="/Group-16.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.toJinParent}>
                  <div className={styles.toJin}>To Jin</div>
                  <div className={styles.frameChild} />
                  <div className={styles.work}>Work</div>
                </div>
                <div className={styles.jun2022}>12 jun 2022</div>
              </div>
              <div className={styles.div}>-$59</div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.group27Row0Parent}>
            <div className={styles.frameContainer}>
              <img
                className={styles.group27Row0Child}
                alt=""
                src="/Group-17.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.fromGoogleParent}>
                  <div className={styles.fromGoogle}>From Google</div>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.salary}>Salary</div>
                </div>
                <div className={styles.jun2022}>10 jun 2022</div>
              </div>
              <div className={styles.toJin}>+$859</div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.group27Row0Parent}>
            <div className={styles.frameContainer}>
              <img
                className={styles.group27Row0Child}
                alt=""
                src="/Group-16.svg"
              />
              <div className={styles.frameParent}>
                <div className={styles.toDavidParent}>
                  <div className={styles.toDavid}>To David</div>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.work}>Work</div>
                </div>
                <div className={styles.jun2022}>7 jun 2022</div>
              </div>
              <div className={styles.tag}>-$479</div>
            </div>
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
      <div className={styles.appHeaderSection}>
        <div className={styles.userHeaderRow}>
          <div className={styles.userIdentity}>
            <img
              className={styles.userIdentityChild}
              alt=""
              src="/Rectangle-11.svg"
            />
            <div className={styles.toniKrossParent}>
              <b className={styles.toniKross}>Toni Kross</b>
              <div className={styles.goodMorning}>Good Morning</div>
            </div>
          </div>
          <img
            className={styles.userHeaderRowChild}
            alt=""
            src="/Group-5.svg"
          />
        </div>
        <div className={styles.totalBalanceParent}>
          <div className={styles.totalBalance}>Total balance</div>
          <div className={styles.usd}>$42,295.00 USD</div>
        </div>
        <div className={styles.balanceDivider} />
        <div className={styles.quickActionsRow}>
          <div className={styles.frameParent5}>
            <img
              className={styles.appointmentHeaderParent}
              alt=""
              src="/Group-6.svg"
            />
            <div className={styles.fundTransfer}>Fund Transfer</div>
          </div>
          <div className={styles.frameParent5}>
            <img
              className={styles.appointmentHeaderParent}
              alt=""
              src="/Group-12.svg"
            />
            <div className={styles.addMoney}>Add Money</div>
          </div>
          <div className={styles.frameParent5}>
            <img
              className={styles.appointmentHeaderParent}
              alt=""
              src="/Group-7.svg"
            />
            <div className={styles.more}>More</div>
          </div>
        </div>
      </div>
      <Nav
        property1="Home"
        homeButton1="/006-home-button-1.svg"
        creditCard11="/004-credit-card-1-1.svg"
        user11="/008-user-1-1.svg"
        swap1="/002-swap-1.svg"
      />
      <div className={styles.frameParent8}>
        <div className={styles.frameParent9}>
          <img className={styles.frameChild5} alt="" src="/Group-171.svg" />
          <div className={styles.frameParent10}>
            <div className={styles.fromGoogleGroup}>
              <div className={styles.fromGoogle2}>From Google</div>
              <div className={styles.content} />
              <div className={styles.bonus}>Bonus</div>
            </div>
            <div className={styles.jun20224}>10 jun 2022</div>
          </div>
          <div className={styles.appointmentDetails}>+$859</div>
        </div>
        <div className={styles.frameChild6} />
      </div>
    </div>
  );
};

export default Home1;
