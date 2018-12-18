import React from 'react'
import { connect } from 'react-redux'
import Postit from './Postit'

const filtered = (postits, currentFilter) => {
  switch(currentFilter) {
    case 'Underway':
      return postits.filter( p => !p.complete )
    case 'Concluded':
      return postits.filter( p => p.complete )
    default:
      return postits
  }
}

const PostitList = ({ postits, postitCount, filter }) => (
  <div>
    <h3>You have lovingly crafted {postitCount} Posteles</h3>
    <ul className="container">
      { filtered(postits, filter).map( (p) =>
        <Postit key={p.id} {...p} /> 
      )}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  const { postits, filter } = state
  return { 
    postits,
    filter,
    postitCount: postits.length,
  }
}

export default connect(mapStateToProps)(PostitList)