import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionHeaderVariants = cva(
  "flex flex-col gap-2",
  {
    variants: {
      align: {
        left: "items-start text-left",
        center: "items-center text-center",
      },
    },
    defaultVariants: {
      align: "center",
    },
  }
);

const titleVariants = cva(
  "font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
  {
    variants: {
      size: {
        default: "text-3xl sm:text-4xl",
        sm: "text-2xl sm:text-3xl",
        lg: "text-4xl sm:text-5xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface SectionHeaderProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof sectionHeaderVariants>,
    VariantProps<typeof titleVariants> {
  title: string;
  description?: string;
  badge?: React.ReactNode;
  as?: "h2" | "h3";
}

function SectionHeader({
  title,
  description,
  badge,
  align = "center",
  size = "default",
  as = "h2",
  className,
  ...props
}: SectionHeaderProps) {
  const TitleTag = as;

  return (
    <div
      data-slot="section-header"
      className={cn(sectionHeaderVariants({ align }), className)}
      {...props}
    >
      {badge && (
        <span
          data-slot="section-header-badge"
          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
        >
          {badge}
        </span>
      )}
      <TitleTag
        data-slot="section-header-title"
        className={cn(titleVariants({ size }))}
      >
        {title}
      </TitleTag>
      {description && (
        <p
          data-slot="section-header-description"
          className="max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeader, sectionHeaderVariants, titleVariants };
export type { SectionHeaderProps };
