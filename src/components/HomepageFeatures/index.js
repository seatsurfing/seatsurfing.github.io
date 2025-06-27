import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Book Anywhere, Anytime",
    Svg: require("@site/static/img/undraw_mobile_apps_re_3wjf.svg").default,
    description: (
      <>
        Access Seatsurfing from your phone, desktop,{" "}
        <a
          href="https://appsource.microsoft.com/en-us/product/office/WA200008773"
          target="_blank"
        >
          Microsoft Teams
        </a>{" "}
        or{" "}
        <a
          href="https://marketplace.atlassian.com/apps/1224242"
          target="_blank"
        >
          Atlassian Confluence
        </a>
        . Heading to the office? Find and reserve your perfect seat in seconds
        &ndash; it's that simple.
      </>
    ),
  },
  {
    title: "Hybrid Work Features",
    Svg: require("@site/static/img/undraw_cms_re_asu0.svg").default,
    description: (
      <>
        Upload floor plans and set up your space layout with drag & drop. Our{" "}
        <a href="/features">enterprise features</a> take your workplace
        management to the next level.
      </>
    ),
  },
  {
    title: "Ready When You Are",
    Svg: require("@site/static/img/undraw_cloud_files_wmo8.svg").default,
    description: (
      <>
        Start using Seatsurfing instantly with our cloud-native platform. Begin
        with our <a href="/sign-up/">free plan</a> today and{" "}
        <a href="/pricing/">scale up</a> seamlessly as your team grows &ndash;
        no installation required.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
