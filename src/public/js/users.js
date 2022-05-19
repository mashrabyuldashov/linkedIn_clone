const modalBtn = document.querySelector(".modal_btn")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".close_btn")
const openPostModal = document.querySelector(".modal_post_input")
const postModal = document.querySelector(".post_modal")

modalBtn.addEventListener("click", () => {
    modal.style.display = "block"
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
})

openPostModal.addEventListener("focus", () => {
    postModal.style.display = "block"
})
