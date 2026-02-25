import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#2997ff]/50",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#2997ff] text-white",
        secondary: "border-transparent bg-white/10 text-gray-300 hover:bg-white/20",
        destructive: "border-transparent bg-red-500 text-white",
        outline: "border-white/10 text-gray-400",
        gold: "border-yellow-400/40 bg-yellow-500/10 text-yellow-400",
        silver: "border-slate-400/40 bg-slate-500/10 text-slate-300",
        bronze: "border-orange-600/40 bg-orange-700/10 text-orange-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
