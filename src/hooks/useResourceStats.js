import { useSelector } from "react-redux";

// Usage
// const { earned, spent } = useResourceStats(round, resourceType);
export default (round, resourceType) => {
  const defaultReturn = {
    earned: 0,
    spent: 0,
  };

  return useSelector(
    (state) =>
      state?.rounds[round - 1]?.resources[resourceType] ||
      defaultReturn,
  );
};
