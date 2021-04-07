const shareLinks = document.querySelector('.shareLinks')
const sendClose = document.querySelector('.sendClose')

sendClose.addEventListener('click', function () {
    shareLinks.classList.toggle('active')
    sendClose.classList.toggle('active')
})