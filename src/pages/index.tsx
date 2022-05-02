import React from "react"

import Prism from "prism-react-renderer/prism"
import { IconContext } from "react-icons"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Comparison from "@site/src/components/Comparison"
import Examples from "@site/src/components/Examples"
import Features from "@site/src/components/Features"
import Hero from "@site/src/components/Hero"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

;(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-rust")

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig } = context
  const { tagline } = siteConfig

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Layout description={tagline}>
        <Hero />

        <main className={styles.main}>
          <Features />
          <Comparison />
          <Examples />
        </main>
      </Layout>
    </IconContext.Provider>
  )
}

export default Home
