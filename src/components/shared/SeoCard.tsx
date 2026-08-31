import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const seoCardVariants = cva(
  "group/card flex flex-col gap-3 rounded-xl bg-card py-5 text-sm text-card-foreground ring-1 ring-foreground/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:ring-primary/20",
  {
    variants: {
      size: {
        default: "px-5",
        sm: "px-4 py-4",
        lg: "px-6 py-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface SeoCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  href?: string;
  badge?: React.ReactNode;
  size?: VariantProps<typeof seoCardVariants>["size"];
  className?: string;
  children?: React.ReactNode;
}

function SeoCard({
  icon,
  title,
  description,
  href,
  badge,
  size = "default",
  className,
  children,
}: SeoCardProps) {
  const inner = (
    <>
      {(icon || badge) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && (
              <div
                data-slot="seo-card-icon"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
              >
                {icon}
              </div>
            )}
            {badge && (
              <span
                data-slot="seo-card-badge"
                className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {badge}
              </span>
            )}
          </div>
        </div>
      )}
      <div
        data-slot="seo-card-content"
        className="flex flex-col gap-1"
      >
        <h3
          data-slot="seo-card-title"
          className="font-heading text-base font-semibold leading-snug text-foreground"
        >
          {href ? (
            <a
              href={href}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {description && (
          <p
            data-slot="seo-card-description"
            className="text-sm text-muted-foreground"
          >
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        data-slot="seo-card"
        className={cn(seoCardVariants({ size }), "block", className)}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      data-slot="seo-card"
      className={cn(seoCardVariants({ size }), className)}
    >
      {children}
      {inner}
    </div>
  );
}

export { SeoCard, seoCardVariants };
export type { SeoCardProps };
