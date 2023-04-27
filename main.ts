let dif = 0
let pos_ant = 0
let des = 0
let pos = 0
AlphaBot2.MotorRun(Motors.M1, 0)
AlphaBot2.MotorRun(Motors.M2, 0)
basic.pause(200)
AlphaBot2.SensorCalibrated()
basic.forever(function () {
    pos = AlphaBot2.readLine() - 2000
    des = pos - pos_ant
    pos_ant = pos
    dif = pos / 20 + des / 5
    dif = Math.max(dif, -120)
    dif = Math.min(dif, 120)
    if (dif > 0) {
        AlphaBot2.MotorRun(Motors.M1, 120)
        AlphaBot2.MotorRun(Motors.M2, 120 - dif)
    } else {
        AlphaBot2.MotorRun(Motors.M1, 120 + dif)
        AlphaBot2.MotorRun(Motors.M2, 120)
    }
})
