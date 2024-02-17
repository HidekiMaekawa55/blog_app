import Link from "next/link";

export const DetailButton = (props) => (
  <Link href={props.href}><button>詳細</button></Link>
);

export const EditButton = (props) => (
  <Link href={props.href}><button>編集</button></Link>
);

export const DeleteButton = (props) => (
  <button onClick={props.onClick}>削除</button>
);
