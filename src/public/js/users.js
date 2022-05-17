const modalBtn = document.querySelector(".modal_btn")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close_btn")

modalBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
})