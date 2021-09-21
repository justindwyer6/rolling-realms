import { useEffect, useState } from "react";
import { shuffle, take } from "lodash";
import defaultRounds from "../rounds";
// Utilities
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../utilities/queryString";

const REALMS = 9;

const getRealms = (realms = REALMS) =>
  take(shuffle(defaultRounds), realms);

const useSetRounds = () => {
  const [rounds, setRounds] = useState(getRealms());

  const randomizeRealms = () => setRounds(getRealms());

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
