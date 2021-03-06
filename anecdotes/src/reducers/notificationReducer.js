let timeoutID

const NotificationReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_NOTI':
      const content = action.data
      return content
    case 'REMOVE_NOTI':
      return null
    default:
      return state
  }
}

export const setNotification = (content, time) => {
  return async dispatch => {
    clearTimeout(timeoutID)
    dispatch({
      type: 'SET_NOTI',
      data: content
    })
    timeoutID = setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTI'
      })
    }, time * 1000)
  }
}

export default NotificationReducer