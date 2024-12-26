import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

export function Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        "flex items-center text-sm text-muted-foreground",
        className,
      )}
      {...props}
    >
      <ol className="flex items-center gap-2">{children}</ol>
    </nav>
  );
}

interface BreadcrumbItemProps {
  children: React.ReactNode;
  isCurrentPage?: boolean;
}

export function BreadcrumbItem({
  children,
  isCurrentPage,
  ...props
}: BreadcrumbItemProps) {
  return (
    <li
      className="flex items-center gap-2"
      aria-current={isCurrentPage ? "page" : undefined}
      {...props}
    >
      {children}
      {!isCurrentPage && <ChevronRight className="h-4 w-4" />}
    </li>
  );
}

interface BreadcrumbLinkProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function BreadcrumbLink({
  children,
  href,
  className,
  ...props
}: BreadcrumbLinkProps) {
  return href ? (
    <a
      href={href}
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    >
      {children}
    </a>
  ) : (
    <span className={cn("font-medium text-foreground", className)} {...props}>
      {children}
    </span>
  );
}
