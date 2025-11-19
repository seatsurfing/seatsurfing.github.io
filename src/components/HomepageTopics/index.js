import clsx from "clsx";
import styles from "./styles.module.css";
import { translate } from "@docusaurus/Translate";
import Translate from "@docusaurus/Translate";

const TopicList = [
  {
    title: translate({ message: "Benefits" }),
    list: (
      <ul>
        <li>
          <Translate>Free for 10 users</Translate>
        </li>
        <li>
          <Translate>Self-hosted or SaaS</Translate>
        </li>
        <li>
          <Translate>Premium support</Translate>
        </li>
      </ul>
    ),
  },
  {
    title: translate({ message: "Facts" }),
    list: (
      <ul>
        <li>
          <Translate>400+ active instances</Translate>
        </li>
        <li>
          <Translate>Open-source since 2021</Translate>
        </li>
        <li>
          <Translate>250+ stars on GitHub</Translate>
        </li>
      </ul>
    ),
  },

  {
    title: translate({ message: "Vision" }),
    list: (
      <ul>
        <li>
          <Translate>Continuously evolving</Translate>
        </li>
        <li>
          <Translate>Built with passion</Translate>
        </li>
        <li>
          <Translate>User-focused</Translate>
        </li>
      </ul>
    ),
  },
];

function Topic({ title, list }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding--sm margin--sm item shadow--lw">
        <h3>{title}</h3>
        {list}
      </div>
    </div>
  );
}

export default function HomepageTopics() {
  return (
    <section className={styles.topics}>
      <div className="container">
        <div className="row">
          {TopicList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
