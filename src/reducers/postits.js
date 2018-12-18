const ADD_POSTIT = 'ADD_POSTIT'
const DELETE_POSTIT = 'DELETE_POSTIT'
const EDIT_POSTIT = 'EDIT_POSTIT'
const TOGGLE_POSTIT = 'TOGGLE_POSTIT'

export const deletePostit = (id) => {
  return { type: DELETE_POSTIT, id }
}

export const togglePostit = (id) => {
  return { type: TOGGLE_POSTIT, id }
}

export const addPostit = (postit) => {
  return { type: ADD_POSTIT, postit }
}

export const editPostit = (postit) => {
  return { type: EDIT_POSTIT, postit }
}

export default (state = [], action) => {
  switch (action.type) {
    case ADD_POSTIT:
      return [action.postit, ...state]
    case EDIT_POSTIT:
      return state.map(postit => {
        if (postit.id === action.postit.id)
          return action.postit
        return postit
      })
    case TOGGLE_POSTIT:
      return state.map(postit => {
        if (postit.id === action.id)
          return { ...postit, complete: !postit.complete }
        return postit
      })
    case DELETE_POSTIT:
      return state.filter(p => p.id !== action.id)
    default:
      return state
  }
}
