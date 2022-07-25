import React from 'react'

function Address() {
    const mapURL = 'https://maps.google.com/maps?q=3500%20American%20River%20Dr,%20Sacramento,%20CA%2095864&t=&z=17&ie=UTF8&iwloc=&output=embed'

    if(!mapURL){
        return (
            <div>
                Map Loading......
            </div>
        )
    }
    else{
        return (
          <div>
                  <div style={{overflow: 'hidden', width: '100%'}} className="box-1 box col-md-7 .col-xl-7 col-lg-7">
                    <iframe title='address' src={mapURL} width="100%" height="300" style={{border: 0 }} loading="lazy"></iframe>
                  </div>
          </div>
        )
    }
}



export default Address