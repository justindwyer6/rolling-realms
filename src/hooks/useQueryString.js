import { useState, useEffect } from "react";
import {
  getQueryStringValue,
  setQueryStringValue,
} from "../functions/queryString";

function useQueryString(key, initialValue) {
  const [value, setValue] = useState(
    getQueryStringValue(key) || initialValue,
  );
  useEffect(
    (newValue) => {
      setQueryStringValue(key, newValue);
    },
    [value],
  );

  return setValue;
}

export default useQueryString;
