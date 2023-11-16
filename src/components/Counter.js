import { connect } from "react-redux"
import {inc, dec, rnd} from '../actions'
const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec()),
        rnd: () => dispatch(rnd())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);