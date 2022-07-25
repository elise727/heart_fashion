import React from 'react'

function Head( {title} ) {
  return (
    <div>
        <div className="hder p-5">
            <h3 className="hr">
                {title}
            </h3>
        </div>
    </div>
  )
}

Head.defaultProps = 
    {
    title: 'Title'
}


export default Head