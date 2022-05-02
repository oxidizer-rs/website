import React from "react"

import CodeSnippet from "@site/src/components/CodeSnippet"
import Headline from "@site/src/components/Headline"
import TabItem from "@theme/TabItem"
import Tabs from "@theme/Tabs"

import snippets from "./snippets"

const renderTabs = () => {
  return (
    <Tabs
      defaultValue={snippets[0].label}
      values={snippets.map((props, idx) => {
        return { label: props.label, value: props.label }
      })}
    >
      {snippets.map((props, idx) => (
        <TabItem key={idx} value={props.label}>
          <CodeSnippet key={idx} {...props} />
        </TabItem>
      ))}
    </Tabs>
  )
}

const Examples = () => {
  return (
    <section id="examples">
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <Headline
              category="Examples"
              title="Quick snippets to get started with Oxidizer"
            />
            {renderTabs()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Examples
