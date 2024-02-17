import Link from "next/link";

export const BaseTemplate = (props) => {
  return (
    <main>
      <h1>{props.pageTitle}</h1>
      <Link href={props.href}><button>{props.linkName}</button></Link>
      {props.children}
    </main>
  );
}

