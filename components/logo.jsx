import { useState, useEffect } from "react";

const Logo = (props) => {
  const [isTransparent, setIsTransparent] = useState(
    props.isTransparent ?? false
  );

  useEffect(() => {
    if (props.isTransparent != null && props.isTransparent != undefined)
      setIsTransparent(props.isTransparent);
  }, [props.isTransparent]);

  return (
    <>
      <a href="https://wojciechkubiak.com">
        <h4 className={isTransparent ? "logo-in" : "logo-out"}>
          WOJCIECH KUBIAK
        </h4>
      </a>
    </>
  );
};

export default Logo;
