import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

export default function ButtonIconRight() {
  return (
    <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
      Icon Right
    </Button>
  )
}
