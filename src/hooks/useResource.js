import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "reducers/rounds";
import useResourceStats from "./useResourceStats";

export default (round, resourceType) => {
  const { earned, spent } = useResourceStats(round, resourceType);

  const dispatch = useDispatch();
  const earnResource = useCallback(
    () => dispatch(actionCreators.earnResource(round, resourceType)),
    [round, resourceType],
  );
  const spendResource = useCallback(
    () => dispatch(actionCreators.spendResource(round, resourceType)),
    [round, resourceType],
  );
  const resetResource = useCallback(
    () => dispatch(actionCreators.resetResource(round, resourceType)),
    [round, resourceType],
  );

  return {
    resourcesEarned: earned,
    resourcesSpent: spent,
    earnResource,
    spendResource,
    resetResource,
  };
};
