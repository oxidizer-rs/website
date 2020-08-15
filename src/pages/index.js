import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";

// Prism (Rust)
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");

import Examples from "@theme/Examples";
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
        <div className="container">
          <div className="row">
            <div className="col col--5">
              <Features />
            </div>
            <div className="col col--7">
              <Examples />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
