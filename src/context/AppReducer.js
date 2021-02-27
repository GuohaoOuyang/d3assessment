 // eslint-disable-next-line
 export default (state, action) => {
    switch(action.type) {
      case 'GET_DATAS':
      return {
        ...state,
        gaugeDatas: action.payload.gaugeData,
        areaDatas: action.payload.areaData
      }
      case 'GET_ERROR':
      return {
        ...state,
        error: action.payload
      }
      default:
        return state;
    }
  }