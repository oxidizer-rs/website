import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";

import Features from "@theme/Features";
import Hero from "@theme/Hero";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { tagline } = siteConfig;

  return (
    <Layout description={tagline}>
      <Hero />

      <main className={styles.main}>
        <Features />
      </main>
    </Layout>
  );
}

export default Home;
