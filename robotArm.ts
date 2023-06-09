//% color=#0fbc11 icon="\uf085" block="Robot Arm"
namespace robotArm {
    // Define servo pins
    let servoPin1 = AnalogPin.P0;
    let servoPin2 = AnalogPin.P1;
    let servoPin3 = AnalogPin.P2;
    let servoPin4 = AnalogPin.P3;

    // Define servo angles
    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;
    let angle4 = 0;

    // Function to move servos with delay
    function moveServos() {
        // Set servo angles
        pins.servoWritePin(servoPin1, angle1);
        pins.servoWritePin(servoPin2, angle2);
        pins.servoWritePin(servoPin3, angle3);
        pins.servoWritePin(servoPin4, angle4);

        // Add delay between servo movements
        basic.pause(100); // Adjust the delay time as needed
    }

    //% block="Move robot arm to angles $angle1, $angle2, $angle3, $angle4"
    export function moveRobotArm(angle1: number, angle2: number, angle3: number, angle4: number) {
        // Calculate step size based on the desired speed
        let stepSize = 1; // Adjust the step size as needed

        // Move each servo gradually to the target position
        while (angle1 != angle1 || angle2 != angle2 || angle3 != angle3 || angle4 != angle4) {
            if (angle1 < angle1) {
                angle1 += stepSize;
            } else if (angle1 > angle1) {
                angle1 -= stepSize;
            }

            if (angle2 < angle2) {
                angle2 += stepSize;
            } else if (angle2 > angle2) {
                angle2 -= stepSize;
            }

            if (angle3 < angle3) {
                angle3 += stepSize;
            } else if (angle3 > angle3) {
                angle3 -= stepSize;
            }

            if (angle4 < angle4) {
                angle4 += stepSize;
            } else if (angle4 > angle4) {
                angle4 -= stepSize;
            }

            moveServos();
        }
    }
}
