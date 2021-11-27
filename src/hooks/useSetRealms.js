import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setQueryString,
  generateRealmOrderArray,
} from "utilities/queryString";
import { getOrderStringFromRealms } from "realms";
import { actionCreators } from "reducers/app";

const useSetRealms = () => {
  // Action Creators
  const dispatch = useDispatch();
  const setRealms = (realmsArray) =>
    dispatch(actionCreators.setRealms(realmsArray));
  const setRealm = (realm, round) =>
    dispatch(actionCreators.setRealm(realm, round));
  const randomizeRealms = () =>
    dispatch(actionCreators.randomizeRealms());

  // Selectors
  const realms = useSelector((state) => state.app.realms);

  // useEffects
  useEffect(() => {
    setRealms(generateRealmOrderArray());
  }, []);

  useEffect(() => {
    setQueryString(`realmOrder=${getOrderStringFromRealms(realms)}`);
  }, [realms]);

  // Returns
  return {
    randomizeRealms,
    realms,
    setRealm,
    setRealms,
  };
};

export default useSetRealms;
