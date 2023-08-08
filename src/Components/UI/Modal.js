import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop'
import ModalOverlay from './ModalOverlay';

function Modal(props){

        return <React.Fragment>
            {ReactDOM.createPortal(<Backdrop backdropOnClick={props.closeClick}></Backdrop>,document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </React.Fragment>
}

export default Modal;