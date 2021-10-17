import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setQueryStringValue,
  setRealmsUsingQueryString,
} from "../utilities/queryString";
import { actionCreators } from "../reducers/app";

const useSetRealms = () => {
  const dispatch = useDispatch();

  const realms = useSelector((state) => state.app.realms);
  const setRealms = (payload) =>
    dispatch(actionCreators.setRealms(payload));

  const randomizeRealms = () =>
    dispatch(actionCreators.randomizeRealms());

  useEffect(() => {
    setRealmsUsingQueryString(realms, setRealms);
  }, []);

  useEffect(() => {
    setQueryStringValue(realms);
  }, [realms]);

  const updateGameOrder = (minigame, round) => {
    const updatingRoundOrder = { ...realms };
    updatingRoundOrder[round] = minigame;
    setRealms({ ...updatingRoundOrder });
  };

  return { updateGameOrder, randomizeRealms, realms, setRealms };
};

export default useSetRealms;
