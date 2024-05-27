
const Modal = ({modal, setModal}) => {
    if(modal === true ){
    return(
        <div>
            Esse é um modal
            <button onClick={()=> setModal()}>Fechar Modal</button>
        </div>
    )
} else {
    return null
}
}

export default Modal;