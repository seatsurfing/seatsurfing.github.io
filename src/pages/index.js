import Translate from "@docusaurus/Translate";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageTopics from "@site/src/components/HomepageTopics";

import styles from "./index.module.css";
import Screenshot from "@site/static/img/screenshot.webp";
import { translate } from "@docusaurus/Translate";

const title = translate({
  message: "Desk sharing, room reservation, free seating & co-working",
});
const subtitle = translate({
  message:
    "Desk sharing, room reservation, free seating, and co-working for enterprises.",
});
const videoPosterSrc = translate({
  message: "/video/videothumb.jpg",
});
const videoSrc = translate({
  message: "/video/seatsurfing_en.mp4",
});

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg button-gradient"
            to="/sign-up?paid"
          >
            <Translate>Start free trial</Translate>
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
            <video
              id="video"
              controls
              className={styles.video}
              preload="none"
              poster={videoPosterSrc}
              onClick={(e) => {
                const video = document.getElementById("video");
                // see https://stackoverflow.com/a/35563612
                video.paused ? video.play() : video.pause();
                e.preventDefault();
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
        <HomepageTopics />
      </main>
    </Layout>
  );
}
