/* eslint-disable react/static-property-placement */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import ActionTypes from '../constants/ActionTypes'
import { incrementIfOdd } from '../actions/counter'

export class CounterContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  increment = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
  }

  decrement = () => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.dispatch({ type: ActionTypes.DECREMENT_COUNTER })
  }

  incrementIfOdd = () => {
    incrementIfOdd()
  }

  render() {
    return (
      <Counter
        // eslint-disable-next-line react/destructuring-assignment
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(CounterContainer)
