import { cn } from "@/lib/utils"

const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  )
}

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:shadow-elevated hover:border-primary/20",
        className
      )}
    >
      {header}
      <div className="transition duration-300 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-semibold text-foreground text-lg">
          {title}
        </div>
        <div className="font-normal text-muted-foreground text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}

export { BentoGrid, BentoGridItem }
