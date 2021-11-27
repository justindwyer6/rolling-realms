import { useState, useEffect } from "react";

const useBooleanTimeout = (timeout = 1000) => {
  const [booleanValue, setBooleanValue] = useState(false);

  useEffect(() => {
    if (booleanValue) {
      const booleanTimeout = setTimeout(
        () => setBooleanValue(false),
        timeout,
      );
      return () => clearTimeout(booleanTimeout);
    }
    return undefined;
  }, [booleanValue]);

  return [booleanValue, setBooleanValue];
};

export default useBooleanTimeout;
