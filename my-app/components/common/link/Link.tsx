import {
  AnchorHTMLAttributes,
  forwardRef,
  FunctionComponent,
  Ref,
} from "react";

export interface LinkProps
  extends Pick<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "style" | "children" | "target" | "onClick"
  > {
  ref?: Ref<HTMLAnchorElement>;
  href?: string;
}

export const Link: FunctionComponent<LinkProps> = forwardRef<
  HTMLAnchorElement,
  LinkProps
>(({ children, href, ...rest}, ref) => <a href={href} ref={ref} {...rest}>{children}</a>);
