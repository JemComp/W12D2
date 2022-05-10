import { connect } from 'react-redux'
import { createNewUSer } from '../../actions/session'
import signup from './signup'

const mapDispatchToPRops = dispatch => ({
    createNewUSer: formUSer => dispatch(createNewUSer(formUSer))
})

export default connect(null, mapDispatchToPRops)(signup)