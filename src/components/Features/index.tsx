import React, { ReactNode } from "react"

import clsx from "clsx"
import { FiCoffee, FiDatabase, FiPackage, FiZap } from "react-icons/fi"

import styles from "./styles.module.scss"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const size = 24
const data: Feature[] = [
  {
    icon: <FiPackage size={size} />,
    title: "Dead simple, but powerful",
    description:
      "Oxidizer is a Rust ORM based on tokio-postgres and refinery. Two powerful libraries that give performance and reliability to perform database interactions.",
  },
  {
    icon: <FiZap size={size} />,
    title: "Asynchronous from the ground up",
    description:
      "By using tokio and tokio-postgres, all the database operations are efficiently handled by tokio at runtime.",
  },
  {
    icon: <FiDatabase size={size} />,
    title: "Relations",
    description:
      " Oxidizer macros generate code to access forward and reverse relations between entities with ease.",
  },
  {
    icon: <FiCoffee size={size} />,
    title: "Productive and Extensible",
    description:
      "Write reusable code and think in terms of your problem domain, not SQL.",
  },
]

const Feature = ({ icon, title, description }: Feature) => {
  return (
    <div className={clsx("col col--6", styles.feature)}>
      <div className="item">
        <div className={styles.header}>
          <div className={styles.icon}>{icon}</div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--11 col--offset-1">
            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
