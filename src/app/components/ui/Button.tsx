import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/util";

// Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#FFD200] text-primary-foreground hover:bg-[#FFD200]/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Improved Button Props Type
type ButtonProps = 
  & React.ButtonHTMLAttributes<HTMLButtonElement>
  & React.AnchorHTMLAttributes<HTMLAnchorElement>
  & VariantProps<typeof buttonVariants>
  & {
    asChild?: boolean;
    href?: string;
  };

// Button Component
const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    const Comp = asChild ? Slot : href ? "a" : "button";

    // Separate props for button and anchor
    const buttonProps = !href ? props : {};
    const anchorProps = href ? { href, ...props } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
        {...(href ? anchorProps : buttonProps)}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };