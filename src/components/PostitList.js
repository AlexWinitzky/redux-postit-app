import React from 'react'
import { connect } from 'react-redux'
import Postit from './Postit'
// import Warning from './Warning'

const filtered = (postits, currentFilter) => {
  switch(currentFilter) {
    case 'Active':
      return postits.filter( p => !p.complete )
    case 'Completed':
      return postits.filter( p => p.complete )
    default:
      return postits
  }
}

const PostitList = ({ postits, postitCount, filter }) => (
  <div>
    <h3>There are {postitCount} postits</h3>
    {/* <Warning /> */}
    <ul>
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