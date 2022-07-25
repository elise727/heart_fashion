import React from 'react'

function ErrorComp({title, img}) {
  return (
    <div>
        <div className="container center">
            <img src={img} />
            <p>{title}</p>
        </div>
    </div>
  )
}

ErrorComp.defaultProps = {
    title : "Error Message",
    img: "https://www.svgrepo.com/show/139020/wireless-error.svg"
}

    
export default ErrorComp