import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const data = [
  {
    title: <>Preventing Runtime Errors</>,
    description: (
      <>
        Eliminate the possibility of incorrect database interactions at compile
        time.
      </>
    ),
  },
  {
    title: <>Built for Performance</>,
    description: (
      <>
        A high level query builder that lets you think about your problems in
        Rust, not SQL.
      </>
    ),
  },
  {
    title: <>Productive and Extensible</>,
    description: (
      <>
        Write reusable code and think in terms of your problem domain and not
        SQL.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="item">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length > 0 && (
        <section id="features" className={styles.features}>
          <div className="container">
            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Features;
