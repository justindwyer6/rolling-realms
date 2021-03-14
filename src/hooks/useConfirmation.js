import { useState, useEffect } from "react";

const useConfirmation = () => {
  const [confirmationRequested, setConfirmationRequested] = useState(
    false,
  );

  useEffect(() => {
    const confirmationTimeout = setTimeout(
      () => setConfirmationRequested(false),
      5000,
    );
    return () => clearTimeout(confirmationTimeout);
  }, [confirmationRequested]);

  return [confirmationRequested, setConfirmationRequested];
};

export default useConfirmation;
