import useResourceStats from "./useResourceStats";

// Usage
// const score = useResourceScoreForRound(round, resourceType); //=> 0.4
export default (round, resourceType) => {
  const { earned, spent } = useResourceStats(round, resourceType);

  if (earned === 0) return 0;
  return (earned - spent) / 10;
};
