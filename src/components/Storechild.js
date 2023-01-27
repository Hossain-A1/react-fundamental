import React from 'react'

const Storechild = ({decreaseFruit}) => {
  return (
    <div>
      <button onClick={()=>decreaseFruit('mango')}>Graph fruit</button>
    </div>
  )
}

export default Storechild;