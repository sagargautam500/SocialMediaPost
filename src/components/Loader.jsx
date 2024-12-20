/* eslint-disable no-unused-vars */
import React from 'react'

function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center" style={{margin:"20% 0",textAlign:'center'}}>
        <div className="spinner-border" role="status" style={{width:'4rem',height:'4rem'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Loader;