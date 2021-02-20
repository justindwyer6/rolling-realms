export default function toggleRules(rulesOpen, setRulesOpen) {
  if (rulesOpen) {
    setRulesOpen(false);
  } else {
    setRulesOpen(true);
  }
}
