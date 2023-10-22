import { PropsWithChildren } from "react";

export const Container = (props: PropsWithChildren) => (
  <div className={"px-4 max-w-6xl w-full mx-auto"}>{props.children}</div>
);
