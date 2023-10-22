import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

export const StyledLink = (
  props: PropsWithChildren<LinkProps & Omit<React.ComponentProps<"a">, "ref">>,
) => (
  <Link
    className={`text-gray-50 font-extralight text-xl ${props.className} `}
    {...props}
  >
    {props.children}
  </Link>
);
