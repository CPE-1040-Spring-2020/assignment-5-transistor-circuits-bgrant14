//Declares variable for input, inits min and max to -1 until calibrated
let reading, min = -1, max = -1

//On pressing button A the sensor is activated, read, and deactivated
//This stores the min, a reference point for completely dry soil
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
    min = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})

//On pressing button B the sensor is activated, read, and deactivated
//This stores the max, a reference point for completely saturated soil
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(500)
    max = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P0, 0)
})

//A simple function to plot up to 4 rows of LEDs corresponding to the sensor reading
function display (rows: number) {
    basic.clearScreen()
    for (let i = 4; i > 4-rows; i--) {
        for (let j = 0; j < 5; j++) {
            led.plot(j, i)
        }
    }
}

basic.forever(function () {
    //prevents the code from running prior to calibration
    if (min > -1 && max > -1) {
        //Turns on, reads, and turns off the sensor
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        reading = pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        //Calls the display function, with the value read from the sensor mapped to between 0 and 4
        display(pins.map(reading, min, max, 0, 4))
        basic.pause(2000)
    }
})
