import React from 'react'

function LoginDot(props) {

  const numbers = [...Array(9).keys()];

   
  const row =   numbers.map(()=> <h1>{props.symbol}</h1>);

  return (
    <div>
        <div className="flex text-5xl pl-20 space-x-2">
          {row}
          </div>
    </div>
  )
}

export default LoginDot
