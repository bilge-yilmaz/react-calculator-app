import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={(e) => {
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
        e.target.blur(); 
      }}
    >
      {operation}
    </button>
  )
}
