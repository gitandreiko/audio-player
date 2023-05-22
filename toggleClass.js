const serverParams = document.getElementsByClassName('own-server')
const instanceParams = document.getElementsByClassName('amazon-instance')

const ownServer = document.getElementById('own-server')
const instance = document.getElementById('amazon-instance')

ownServer.addEventListener('click', () => {
  if (!ownServer.classList.contains('active')) {
    ownServer.classList.add('active')
  }
  instance.classList.remove('active')
  instanceParams[0].classList.add('hide')
  serverParams[0].classList.remove('hide')
})

instance.addEventListener('click', () => {
  if (!instance.classList.contains('active')) {
    instance.classList.add('active')
  }
  ownServer.classList.remove('active')
  instanceParams[0].classList.remove('hide')
  serverParams[0].classList.add('hide')
})
