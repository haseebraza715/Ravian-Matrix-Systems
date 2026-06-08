"use client";

import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type CombinedLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & NextLinkProps;

export interface LinkProps extends CombinedLinkProps {
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, ...props }, ref) => {
    const params = useParams();
    const locale = params?.locale as string | undefined;

    let localizedHref = href;
    if (locale && typeof href === "string" && href.startsWith("/")) {
      const localePrefix = `/${locale}`;
      // Do not prefix the link if it already starts with the locale prefix
      if (!href.startsWith(localePrefix + "/") && href !== localePrefix) {
        localizedHref = `${localePrefix}${href === "/" ? "" : href}`;
      }
    }

    return <NextLink href={localizedHref} {...props} ref={ref} />;
  }
);

Link.displayName = "Link";

export default Link;
