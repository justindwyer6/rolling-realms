import { useState, useEffect } from "react";

const useConfirmation = () => {
  const [confirmationRequested, setConfirmationRequested] = useState(
    false,
  );

  useEffect(() => {
    if (confirmationRequested) {
      const confirmationTimeout = setTimeout(
        () => setConfirmationRequested(false),
        5000,
      );
      return () => clearTimeout(confirmationTimeout);
    }
    return undefined;
  }, [confirmationRequested]);

  return [confirmationRequested, setConfirmationRequested];
};

export default useConfirmation;
