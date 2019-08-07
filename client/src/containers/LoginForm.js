import { connect } from 'react-redux'

import LoginForm from './../components/LoginForm'
import { loginUser } from './../reducers/auth/actions'

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: data => loginUser(dispatch, data),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(LoginForm)
