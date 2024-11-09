const successButton = document.querySelector('div .btn-success h2')
const infoButton = document.querySelector('div .btn-info h2')
const warningButton = document.querySelector('div .btn-warning h2')
const errorButton = document.querySelector('div .btn-error h2')

const successNotification = document.querySelector('.success-notification-bar')
const infoNotification = document.querySelector('.info-notification-bar')
const warningNotification = document.querySelector('.warning-notification-bar')
const errorNotification = document.querySelector('.error-notification-bar')

const quitNotificationButton = document.querySelectorAll('.quit-btn')

successButton.addEventListener('click', () => {
  successNotification.style.display = 'flex'
})

infoButton.addEventListener('click', () => {
  infoNotification.style.display = 'flex'
})

warningButton.addEventListener('click', () => {
  warningNotification.style.display = 'flex'
})

errorButton.addEventListener('click', () => {
  errorNotification.style.display = 'flex'
})

for (let i = 0; i < quitNotificationButton.length; i++) {
  quitNotificationButton[i].addEventListener('click', () => {
    successNotification.style.display = 'none'
    infoNotification.style.display = 'none'
    warningNotification.style.display = 'none'
    errorNotification.style.display = 'none'
  })
}