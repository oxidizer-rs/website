import React from "react";
import clsx from "clsx";
import { FiDatabase, FiPackage, FiZap } from "react-icons/fi";

import styles from "./styles.module.scss";

const size = 24;
const data = [
  {
    icon: <FiPackage size={size} />,
    title: <>Dead simple, but powerful</>,
    description: (
      <>
        Oxidizer is a Rust ORM based on tokio-postgres and refinery. Two
        powerful libraries that give Oxidizer the performance and reliability to
        perform database interactions.
      </>
    ),
  },
  {
    icon: <FiZap size={size} />,
    title: <>Asynchronous from the ground up</>,
    description: (
      <>
        By using tokio and tokio-postgres, all the database operations are
        efficiently handled by tokio at runtime.
      </>
    ),
  },
  {
    icon: <FiDatabase size={size} />,
    title: <>Relations</>,
    description: (
      <>
        Oxidizer macros generate code to access relations between entities with
        ease. Forward and reverse relations are supported.
      </>
    ),
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--12", styles.feature)}>
      <div className="item">
        <div className={styles.header}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <>
      {data && data.length && (
        <div id="features" className={styles.features}>
          <div className="container">
            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Features;
