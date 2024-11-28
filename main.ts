let step = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(step)
})
input.onGesture(Gesture.Shake, function () {
    step += 1
})
basic.forever(function () {
	
})
