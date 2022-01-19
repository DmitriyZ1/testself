let datalist = {
  list: []
}

const extendedResult = (state = datalist, action) => {
    switch (action.type) {
        case 'LIST_UPDATE':
          return {...state, list: action.payload}
        
        default:
          return state
      }
}

export default extendedResult;