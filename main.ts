let a = 0
let b = 0
input.onButtonPressed(Button.AB, function () {
    a = randint(0, 6)
    basic.showNumber(a)
    basic.pause(100)
    basic.clearScreen()
    b = randint(0, 6)
    basic.showNumber(b)
    basic.pause(100)
    basic.clearScreen()
    if (a < b) {
        basic.showString("B win")
    } else if (b < a) {
        basic.showString("A win")
    } else if (a == b) {
        basic.showString("Dual")
    }
    basic.clearScreen()
})
