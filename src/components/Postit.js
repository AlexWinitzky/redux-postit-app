import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePostit, deletePostit } from '../reducers/postits'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'green'
  }
}

const Postit = ({ id, title, complete, dispatch }) => (
  <Fragment>
    <li
      onClick={() => dispatch(togglePostit(id))}
      style={ complete ? styles.complete : {}}
    >
      {title}
    </li>
    <button onClick={() => dispatch(deletePostit(id))}>Delete</button> 
  </Fragment>
)

export default connect()(Postit)