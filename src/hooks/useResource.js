import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "reducers/rounds";

export default (round, resourceType) => {
  const { earned = 0, spent = 0 } = useSelector(
    (state) => state?.rounds[round]?.resources[resourceType] || {},
  );

  const dispatch = useDispatch();
  const earnResource = useCallback(
    () => dispatch(actionCreators.earnResource(round, resourceType)),
    [round, resourceType],
  );
  const spendResource = useCallback(
    () => dispatch(actionCreators.spendResource(round, resourceType)),
    [round, resourceType],
  );

  return [earned, spent, earnResource, spendResource];
};
