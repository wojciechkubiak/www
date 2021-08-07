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
      <h4 className={isTransparent ? "logo-in" : "logo-out"}>
        WOJCIECH KUBIAK
      </h4>
    </>
  );
};

export default Logo;
