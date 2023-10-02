import React from "react";

const Grid = ({ count, children }) => {
 return <div className="grid grid-cols-5  items-center gap-5">{children}</div>;
};

export default Grid;
