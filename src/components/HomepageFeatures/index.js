import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Flexible Booking by App',
    Svg: require('@site/static/img/undraw_mobile_apps_re_3wjf.svg').default,
    description: (
      <>
        Seatsurfing’s web app runs on any current mobile device, desktop computer and even integrated into Confluence. Already on your way to the office? Just select an available seat in the app, book it, and you’re done.
      </>
    ),
  },
  {
    title: 'Simple Management',
    Svg: require('@site/static/img/undraw_cms_re_asu0.svg').default,
    description: (
      <>
        Use your web browser to upload your floor plans to Seatsurfing. Place seats and rooms using drag & drop. Keep an eye on upcoming bookings, utilization and your users.
      </>
    ),
  },
  {
    title: 'Cloud Native',
    Svg: require('@site/static/img/undraw_cloud_files_wmo8.svg').default,
    description: (
      <>
        Seatsurfing comes as a Docker container for your cloud. You can set it up within minutes and get started. Your data belongs to you and stays on your server.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
