import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {

    //HandleAdd
    const HandleAdd = (e) => {
       // console.log(e)

        return ()=> console.log('hola mundo');
    }


  return (
    <>
        <h1>CounterApp</h1>
        <h2>{value}</h2>

        <button onClick = {HandleAdd }>+1</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number 
}

export default CounterApp