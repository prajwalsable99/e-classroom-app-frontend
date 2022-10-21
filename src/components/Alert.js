import React from 'react'

const Alert = (props) => {
    return (
        <div className='container' style={{height:"3.5rem"}} >
            <div className={`alert alert-${props.type} alert-dismissible fade show`}  role="alert">
                {props.msg}

            </div>
        </div>
    )
}

export default Alert
