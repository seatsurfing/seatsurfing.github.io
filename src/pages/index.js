import Translate from "@docusaurus/Translate";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Screenshot from "@site/static/img/screenshot.webp";
import ReactPlayer from "react-player";
import { translate } from "@docusaurus/Translate";

const title = translate({
  message: "Desk sharing, room reservation, free seating & co-working",
});
const subtitle = translate({
  message:
    "Desk sharing, room reservation, free seating, and co-working for enterprises.",
});
const video = translate({
  message: "https://www.youtube.com/watch?v=WYa08A7iJNo",
});

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/sign-up">
            <Translate>Start for free</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={title} description={subtitle}>
      <HomepageHeader />
      <main>
        <div className={styles.screenshotContainer}>
          <img src={Screenshot} className={styles.screenshot} />
        </div>
        <HomepageFeatures />
        <div className={styles.videoContainerWrapper}>
          <div className={styles.videoContainer}>
            <div className={styles.videoHeight}></div>
            <ReactPlayer
              url={video}
              light={true}
              width="100%"
              height="100%"
              className={styles.videoPlayer}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
