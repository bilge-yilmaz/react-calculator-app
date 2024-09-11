import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={(e) => {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
        e.target.blur(); 
      }}
    >
      {digit}
    </button>
  )
}
