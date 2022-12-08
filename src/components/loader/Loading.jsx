import React from 'react'

const Loader = () => {
  return (
    <div>
        <div className="text-center">
             <div className="spinner-grow text-primary  m-5" style={{width: '8rem' , height: '8rem' }} role="status">
               <span className="sr-only"></span>
             </div>
         </div>
    </div>
  )
}

export default Loader