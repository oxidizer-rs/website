import React from "react";
import clsx from "clsx";
import CodeSnippet from "@theme/CodeSnippet";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import snippets from "./snippets";
import styles from "./styles.module.scss";

function Examples() {
  return (
    <>
      {snippets && snippets.length && (
        <div id="examples" className={styles.examples}>
          <div className="container">
            <Tabs
              defaultValue={snippets[0].label}
              values={snippets.map((props, idx) => {
                return { label: props.label, value: props.label };
              })}
              className={styles.tabs}
            >
              {snippets.map((props, idx) => (
                <TabItem key={idx} value={props.label}>
                  <CodeSnippet key={idx} {...props} />
                </TabItem>
              ))}
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
}

export default Examples;
