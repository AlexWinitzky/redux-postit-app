import React from 'react'
import { connect } from 'react-redux'
import { addPostit } from '../reducers/postits'
import { incId } from '../reducers/nextId'

class PostitForm extends React.Component {
  state = { title: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title } = this.state
    const { dispatch, id } = this.props
    const postit = { title, id, complete: false }
    dispatch(addPostit(postit))
    dispatch(incId())
    this.setState({ title: '' })
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render() {
    const { title } = this.state
    return (
      <div>
        <h3>Inscribe a Novel Postele</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={title}
            onChange={this.handleChange}
            autoFocus='true'
            required
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(PostitForm)
