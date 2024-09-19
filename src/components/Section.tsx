import { ReactNode } from "react";

type Props = {
  img: string;
  title: string;
  children: ReactNode;
  imgRight?: boolean;
};

function Section({ img, title, children, imgRight }: Props) {
  return (
    <section className={`row ${imgRight && "flex-row-reverse"}`}>
      <img className="col-md-4 " src={img} />
      <div className="col-8 align-content-center">
        <h4 style={{ textAlign: imgRight ? "right" : "left" }}>{title}</h4>
        <p style={{ textAlign: "justify" }}>{children}</p>
      </div>
    </section>
  );
}

export default Section;
