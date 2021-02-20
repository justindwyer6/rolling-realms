export default function toggleRules(rulesOpen, setRulesOpen) {
  console.log(rulesOpen);
  if (rulesOpen) {
    setRulesOpen(false);
  } else {
    setRulesOpen(true);
  }
}
