const CHANGE_SECONDS = "CHANGE_SECONDS";
const RESTART = "RESTART";

const defaultValue = {
  seconds: 15,
};

const changeSecondsInternal = (state, value) => {
  let nextStateValue = state.seconds + value;

  if (nextStateValue >= 15) nextStateValue = 15;
  if (nextStateValue <= 0) nextStateValue = 0;

  return { seconds: nextStateValue };
};

export const changeSeconds = (value) => {
  return {
    type: CHANGE_SECONDS,
    value,
  };
};

export const restart = () => {
  return {
    type: RESTART,
  };
};

export const timerReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case CHANGE_SECONDS:
      return changeSecondsInternal(state, action.value);

    case RESTART:
      return defaultValue;

    default:
      return state;
  }
};
