import React from 'react'

function Alert(props) {
    return (
        props.alert &&

        <div className={`alert  alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.type} : {props.alert.msg}
        </div>

    )
}

export default Alert