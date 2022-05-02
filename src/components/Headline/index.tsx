import React from "react"

import styles from "./styles.module.scss"

interface HeadlineProps {
  category?: string
  offset?: number
  subtitle?: string
  title?: string
}

function Headline({ category, offset = 0, subtitle, title }: HeadlineProps) {
  return (
    <div className="row">
      <div className={`col col--${12 - offset} col--offset-${offset}`}>
        <div className={styles.headline}>
          {category && <span className={styles.category}>{category}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
        </div>
      </div>
    </div>
  )
}

export default Headline
