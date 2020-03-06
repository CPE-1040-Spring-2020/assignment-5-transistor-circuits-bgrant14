basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 1) pins.digitalWritePin(DigitalPin.P12, 1)
    else pins.digitalWritePin(DigitalPin.P12, 0)
})
