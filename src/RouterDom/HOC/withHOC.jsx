import React from "react";

const WithHOC = (WrapedComponent, startCount) => {
  const NewComponent = () => {
    const [count, setCount] = React.useState(startCount);
    const countHandle = () => {
      setCount((c) => c + startCount);
    };
    return (
      <WrapedComponent setCount={countHandle} name={"TOHO"} count={count} />
    );
  };
  return NewComponent;
};

export default WithHOC;
