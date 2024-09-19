import { ReactNode } from "react";

type Props = {
  title: string;
  subTitle?: string;
  children: ReactNode;
};

function Title({ title, subTitle, children }: Props) {
  return (
    <header className="container p-4 bg-dark text-white">
      <h1 className="col display-1 text-center">{title}</h1>
      <h5 className="text-center">{subTitle}</h5>
      <p style={{ textAlign: "center" }}>{children}</p>
    </header>
  );
}

export default Title;
