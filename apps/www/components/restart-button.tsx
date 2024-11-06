import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import { RotateCcw } from "lucide-react"

export default function BlurInDemo() {
    
    return (
        <Button
            size="icon"
            variant="ghost"
            className={cn(
                "relative z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50"
            )}
        >
            <RotateCcw className="h-3 w-3" />
            <span className="sr-only">Restart</span>
        </Button>
    )
}
