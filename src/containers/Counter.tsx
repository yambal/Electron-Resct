import React from 'react';

import { connect } from 'react-redux'
import { iRootState } from '../redux/rootState'

import counterModule from '../modules/counterModule';

interface iTest{
  count: number
  add: (n: number) => void
}

const Counter:React.FC<iTest> = props => {
  const handleAdd = React.useCallback(
    () => {
      props.add(1)
    },
    []
  )
  return (
    <div>
      <div>{props.count}</div>
      <button type="button" onClick={handleAdd}>add</button>
    </div>
  )
}

const mapStateToProps = (state:iRootState) => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = {
  add: counterModule.actionCreators.add
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
