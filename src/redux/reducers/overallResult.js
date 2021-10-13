let data = {
  overall: [0,0,0]
}


const overallResult = (state = data, action) => {
    switch (action.type) {
        case 'GENERAL_LIST_UPDATE':
          return {...state, overall: action.payload}
        
        default:
          return state
      }
}

export default overallResult;