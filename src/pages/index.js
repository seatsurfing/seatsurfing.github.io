import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import Screenshot from "@site/static/img/screenshot.webp";
import ReactPlayer from "react-player";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/sign-up">
            Start for free
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Desk sharing, room reservation, free seating & co-working"
      description={siteConfig.tagline}
    >
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
              url="https://www.youtube.com/watch?v=WYa08A7iJNo"
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
