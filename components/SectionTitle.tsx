interface SectionTitleProps {
  subTitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subTitle, title }) => {
  return (
    <div>
      <div className="wrapper text-center pb-10">
        <span className=" uppercase font-semibold tracking-wider text-accent">
          {subTitle}
        </span>
        <h2 className=" text-3xl">{title}</h2>
      </div>
      ;
    </div>
  );
};

export default SectionTitle;
