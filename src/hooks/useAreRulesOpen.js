import { useSelector } from "react-redux";

export default function useAreRulesOpen() {
  useSelector((state) => state.app.areRulesOpen);
}
