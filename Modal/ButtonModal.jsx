
const ButtonModal = ({setModal, modal}) => {
    return(
        <button onClick={() => setModal(!modal)}>{modal === true ?"Fechar Modal" : "Abrir Modal"}</button>
    )
}

export default ButtonModal;