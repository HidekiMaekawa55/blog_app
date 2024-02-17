import Link from "next/link";
import { BaseTemplateProps } from "interfaces/Template";

export const BaseTemplate = (props: BaseTemplateProps) => {
  return (
    <main>
      <h1>{props.pageTitle}</h1>
      <Link href={props.href}><button>{props.linkName}</button></Link>
      {props.children}
    </main>
  );
}
