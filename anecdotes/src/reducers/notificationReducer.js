const NotificationReducer = (state = null, action) => {
  switch(action.type) {
    case 'LIKE_NOTI':
      const content = action.data.content
      return `you voted '${content}'`
    case 'REMOVE_NOTI':
      return null
    case 'CREATE_NOTI':
      const anecdote = action.data.content
      return `you created '${anecdote}'`
    default:
      return state
  }
}

export const likeNotification = content => {
  return {
    type: 'LIKE_NOTI',
    data: { content }
  }
}

export const createNotification = content => {
  return {
    type: 'CREATE_NOTI',
    data: { content }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTI'
  }
}

export default NotificationReducer