let number = 0
function showThree () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.pause(250)
    showOne()
    basic.pause(250)
    showTwo()
    basic.pause(250)
    showThree()
    randomizeAndShow()
})
function showTwo () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
}
function showOne () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function randomizeAndShow() {
    number = randint(1, 6)
    basic.showNumber(number)
}