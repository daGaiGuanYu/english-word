import danger from '../../../../_snowpack/pkg/@ppzp/utils/danger.js'
import confetti from '../../../../_snowpack/pkg/canvas-confetti.js'

const audio = (function() {
  const el = document.createElement('audio')
  return function(name) {
    el.src = `/audio/${name}.mp3`
    el.play()
  }
})()

function onWrongType() {
  audio('error')
}

function onRightType() {
}

function onFinishOne() {
  audio('di')
}

function onFinish() {
  audio('applause')
  confetti({
    angle: 60,
    origin: { x: 0 }
  })
  confetti({
    angle: 120,
    origin: { x: 1 }
  })
}

export default {
  onWrongType: danger(onWrongType),
  onRightType: danger(onRightType),
  onFinishOne: danger(onFinishOne),
  onFinish: danger(onFinish)
}