import { SOULCOUNTER_INCREMENT, SOULCOUNTER_RESET } from "../types";

export const storeSoulCounter = (state = 0, action) => {
  switch (action.type) {
    case SOULCOUNTER_INCREMENT:
      return state + action.payload;
    case SOULCOUNTER_RESET:
      return 0;
    default:
      return state;
  }
}