import { SOULENGINESTATUS_TITLESCREEN } from '../types'

const soulEngineStatus = (state = 'idle', action) => {
  switch (action.type) {
    case SOULENGINESTATUS_TITLESCREEN:
      return 'titlescreen'
    default:
      return state;
  }
}

export default soulEngineStatus;