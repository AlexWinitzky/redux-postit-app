import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { togglePostit, deletePostit } from '../reducers/postits'
import EditPostitForm from './EditPostitForm';


class Postit extends React.Component {
  state = { showForm: false }

  toggle = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    const { id, title, complete, dispatch } = this.props
    return (
      <Fragment>
        <div class="row">
          <div class="col s12 m5" style={{ display: 'flex', justifyContent: 'center' }}>
            <div class="card-panel yellow" style={{ width: '250px', height: '250px' }}>
              <li>
                <span
                  onClick={() => dispatch(togglePostit(id))}
                  style={complete ? styles.complete : {}}
                >
                  {title}
                </span>
              </li>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <button
                onClick={() => dispatch(deletePostit(id))}
                class="btn-floating btn-small waves-effect waves-light red"><i
                  class="small material-icons">delete</i>
              </button>
              <button
                onClick={this.toggle}
                class="btn-floating btn-small waves-effect waves-light blue"><i
                  class="small material-icons">edit</i>
              </button>
            </div>
          </div>
          <div style={{marginLeft: '360px', marginTop: '100px' }}>
            {this.state.showForm ? <EditPostitForm title={title} id={id} complete={complete} toggle={this.toggle} /> : null}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect()(Postit)

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'green'
  }
}
