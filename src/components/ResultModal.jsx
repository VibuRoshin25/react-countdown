const ResultModal = ({ result, targetTime }) => {
  return (
    <dialog>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{targetTime} seconds left.</strong>
      </p>
      <form method="dialog"></form>
    </dialog>
  );
};

export default ResultModal;