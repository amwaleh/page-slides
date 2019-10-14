import React, { useState } from "react";

export const Pages = props => {
  const [page, setPage] = useState(0);

  return <div>{props.children}</div>;
};

export const CarHOC = Comp => {
  console.log(Comp.props.children);
  return (
    <div>
      {React.createElement(
        "div",
        { ...Comp.props },
        Comp.props.children[Comp.props.page]
      )}
    </div>
  );
};

const Slide = CarHOC(
  <Pages page={0}>
    <div>page 1</div>
    <div>page 2</div>
    <div>page 3</div>
    <div>page 4</div>
  </Pages>
);
export default Slide;
