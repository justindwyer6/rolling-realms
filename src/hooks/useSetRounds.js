import { useState, useEffect } from "react";
import { shuffle } from "lodash";
import defaultRounds from "../rounds";

// Utilities
import {
  setQueryStringValue,
  setRoundsUsingQueryString,
} from "../utilities/queryString";

const useSetRounds = () => {
  const [rounds, setRounds] = useState(shuffle(defaultRounds));

  const randomizeMinigames = () => setRounds(shuffle(defaultRounds));

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

  return { updateGameOrder, randomizeMinigames, rounds, setRounds };
};

export default useSetRounds;
