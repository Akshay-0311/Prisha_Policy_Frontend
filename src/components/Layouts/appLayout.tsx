import React from "react";
import Header from "../Header";

function appLayout(props: any) {
  const { children } = props;

  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default appLayout;
