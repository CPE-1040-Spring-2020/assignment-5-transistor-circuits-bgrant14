//Declares variable for input, inits min and max to -1 until calibrated
let reading, min = -1, max = -1

function autoCal() {
    while (pins.analogReadPin(AnalogPin.P0) > 20) {
        basic.showArrow(4)
    }
    min = 0
    for (let i = 0; i < 3; i++) {
        basic.showNumber(i + 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        min += pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(500)
    }
    min /= 3
    basic.showIcon(IconNames.Yes)
    basic.pause(250)

    while (pins.analogReadPin(AnalogPin.P0) < 800) {
        basic.showArrow(0)
    }
    for (let i = 0; i < 3; i++) {
        basic.showNumber(i + 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        max += pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(500)
    }
    max /= 3
    basic.showString("Calibration success")
}

//A simple function to plot up to 4 rows of LEDs corresponding to the sensor reading
function display(rows: number) {
    for (let i = 4; i > 4 - rows; i--) {
        for (let j = 0; j < 5; j++) {
            led.plotBrightness(j, i, i * 63)
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
        basic.clearScreen()
        display(pins.map(reading, min, max, 0, 4))
        basic.pause(2000)
    } else {
        autoCal()
    }
})
