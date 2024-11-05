import * as React from "react"

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/registry/default/ui/multi-select"

export default function SelectDemo() {
  return (
    <MultiSelector
      values={[]}
      onValuesChange={function (value: string[]): void {
        throw new Error("Function not implemented.")
      }}
      loop
      className="max-w-xs"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select languages" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
          <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
          <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  )
}
