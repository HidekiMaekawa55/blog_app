import Link from "next/link";
import { ClickButtonProps, LinkButtonProps, SubmitButtonProps } from "interfaces/atom";

export const DetailButton = (props: LinkButtonProps) => (
  <Link href={props.href}><button>詳細</button></Link>
);

export const EditButton = (props: LinkButtonProps) => (
  <Link href={props.href}><button>編集</button></Link>
);

export const DeleteButton = (props: ClickButtonProps) => (
  <button onClick={props.onClick}>削除</button>
);

export const SubmitButton = (props: SubmitButtonProps) => (
  <button onClick={props.onSubmit}>{props.buttonName}</button>
);
