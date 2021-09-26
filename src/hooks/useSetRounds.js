import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../utilities/queryString";
// import getInitialRealms from "../utilities/getInitialRealms";
import actionCreators from "../reducers/actionCreators";

const useSetRounds = () => {
  const dispatch = useDispatch();

  const rounds = useSelector((state) => state.app.rounds);
  const setRounds = (payload) =>
    dispatch(actionCreators.setRealms(payload));

  const randomizeRealms = () =>
    dispatch(actionCreators.randomizeRealms());

  useEffect(() => {
    setRoundsUsingQueryString(rounds, setRounds);
  }, []);

  useEffect(() => {
    setQueryStringValue(rounds);
  }, [rounds]);

  const updateGameOrder = (minigame, round) => {
    const updatingRoundOrder = { ...rounds };
    updatingRoundOrder[round] = minigame;
    setRounds({ ...updatingRoundOrder });
  };

  return { updateGameOrder, randomizeRealms, rounds, setRounds };
};

export default useSetRounds;
