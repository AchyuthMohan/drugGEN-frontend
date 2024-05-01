import React, { FC } from "react";
import { Helmet } from "react-helmet";

interface CustomTitleProps {
  title: string;
}

const CustomTitle: FC<CustomTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>Excel 2023 | {title}</title>
    </Helmet>
  );
}

export default CustomTitle;