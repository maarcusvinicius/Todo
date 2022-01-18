import React, { useState } from "react";
import Card from './Card';

function Modal(props) {

    function hideModal(e){
        let target = e.target;
        if (target.id == "modal") {
            props.onHideModal(false);
        }
        console.log(target)
    }

    return (
        <div id="modal" onClick={hideModal} className={props.show ? "modal" : "modal hide"}>
            <Card className="cardModal">
                {props.children}
            </Card>
        </div>
    )
}

export default Modal;