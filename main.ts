microbitApp.onButtonOption(ButtonOption.Left, function () {
	
})
microbitApp.onButtonUpOption(ButtonOption.Up, function () {
    motor.servo(motor.Servos.S4, 120)
})
microbitApp.onButtonOption(ButtonOption.Up, function () {
    motor.servo(motor.Servos.S4, 50)
})
motor.servo(motor.Servos.S1, 95)
motor.servo(motor.Servos.S2, 26)
motor.servo(motor.Servos.S3, 15)
motor.servo(motor.Servos.S4, 100)
let home = 0
basic.forever(function () {
    motor.servo(motor.Servos.S1, microbitApp.getSliderValue(SliderValue.X))
    motor.servo(motor.Servos.S2, microbitApp.getSliderValue(SliderValue.Y))
    motor.servo(motor.Servos.S3, microbitApp.getSliderValue(SliderValue.Z))
})
