export default function Modal() {

    const wrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener("click", close)

    function open(){
        //funcionalidade de atribuir a classe active para a modal
        wrapper.classList.add("active")
    }
    function close(){
        wrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}