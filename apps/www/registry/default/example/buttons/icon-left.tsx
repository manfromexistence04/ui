import { ArrowLeftIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonIconLeft() {
  return (
    <Button variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left">
      Icon left
    </Button>
  )
}
