//Declares variable for input, inits min and max to -1 until calibrated
let reading, min = -1, max = -1
let ledPins = [DigitalPin.P1, DigitalPin.P11, DigitalPin.P13, DigitalPin.P14, DigitalPin.P15]

function autoCal() {
    //Allows the user 5 seconds to dry the sensors
    for (let i = 0; i < 5; i++) {
        basic.showArrow(4)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(50)
    }
    //takes three readings, adds them to min
    for (let i = 0; i < 3; i++) {
        basic.showNumber(i + 1) //displays reading number
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        min += pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(500)
    }
    min /= 3 //takes the average
    basic.showIcon(IconNames.Yes)
    basic.pause(250)

    //Allows the user five seconds to submerse the sensors
    for (let i = 0; i < 5; i++) {
        basic.showArrow(0)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(50)
    }
    //takes three readings, adds them to max
    for (let i = 0; i < 3; i++) {
        basic.showNumber(i + 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        max += pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.pause(500)
    }
    max /= 3 //calculates the average
    basic.showIcon(IconNames.Yes)
    //basic.showString("Calibration success")
}

//A simple function to plot up to 4 rows of LEDs corresponding to the sensor reading
function display(rows: number) {
    for (let i = 0; i < 5; i++) pins.digitalWritePin(ledPins[i], 0)
    for (let i = 0; i <= rows; i++) pins.digitalWritePin(ledPins[i], 1)
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
