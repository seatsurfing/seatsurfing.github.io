import clsx from "clsx";
import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: translate({ message: "Book Anywhere, Anytime" }),
    Svg: require("@site/static/img/undraw_mobile_apps_re_3wjf.svg").default,
    description: (
      <>
        <Translate>Access Seatsurfing from your phone, desktop,</Translate>{" "}
        <a
          href="https://appsource.microsoft.com/en-us/product/office/WA200008773"
          target="_blank"
        >
          Microsoft Teams
        </a>{" "}
        <Translate>or</Translate>{" "}
        <a
          href="https://marketplace.atlassian.com/apps/1224242"
          target="_blank"
        >
          Atlassian Confluence
        </a>
        <Translate>
          . Heading to the office? Find and reserve your perfect seat in seconds
          – it's that simple.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: "Hybrid Work Features" }),
    Svg: require("@site/static/img/undraw_cms_re_asu0.svg").default,
    description: (
      <>
        <Translate>
          Upload floor plans and set up your space layout with drag & drop. Our
        </Translate>{" "}
        <a href="/features">
          <Translate>enterprise features</Translate>
        </a>{" "}
        <Translate>take your workplace management to the next level.</Translate>
      </>
    ),
  },
  {
    title: translate({ message: "Ready When You Are" }),
    Svg: require("@site/static/img/undraw_cloud_files_wmo8.svg").default,
    description: (
      <>
        <Translate>
          Start using Seatsurfing instantly with our cloud-native platform.
          Begin with our
        </Translate>{" "}
        <a href="/sign-up">
          <Translate>free plan</Translate>
        </a>{" "}
        <Translate>today and</Translate>{" "}
        <a href="/pricing">
          <Translate>scale up</Translate>
        </a>{" "}
        <Translate>
          seamlessly as your team grows – no installation required.
        </Translate>
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
