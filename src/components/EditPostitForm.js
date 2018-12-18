import React from 'react'
import { connect } from 'react-redux'
import { editPostit } from '../reducers/postits'

class EditPostitForm extends React.Component {
  state = { title: '' }

  componentDidMount() {
    this.setState({ title: this.props.title})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id, complete} = this.props
    const postit = { ...this.state, id, complete }
    dispatch(editPostit(postit))
    this.setState({ title: ''})
    this.props.toggle()
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render() {
    const { title } = this.state
    return (
      <div >
        <h4>Reinvent Your Creation:</h4>
        <form style={{marginTop: '40px'}} onSubmit={this.handleSubmit}>
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

export default connect()(EditPostitForm)