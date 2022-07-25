const tickInterval = 4000
const tockInterval = 4000
const tockDelay = 2000
let tickIntervalHandle
let tockTimeoutHandle
let tockIntervalHandle
const logEvent = (eventName, functionName, message) =>
console.log(JSON.stringify({
timestamp: new Date(),
eventName,
functionName,
message
}))
const tick = () => logEvent("TICK", "tick()", "Tick...")
const tock = () => logEvent("TOCK", "tock()", "Tock!")
function startClock() {
  // Tick every 4 seconds
tickIntervalHandle = setInterval(tick, tickInterval)
  // Tock every 4 seconds, starting in 2 seconds
tockTimeoutHandle = setTimeout(() =>
tockIntervalHandle = setInterval(tock, tockInterval), tockDelay)
}
logEvent("APPSTART", null, "Starting application...")
startClock()
  // Handle the application receiving an interruption signal
  // so that we can log the end of the application and gracefully
  // clean up all scheduled function calls

var process = require("process")
process.on("SIGINT", () => {
logEvent("APPSTOP", null, "Application stopped!")
  // Clear the timeout and intervals if they have been scheduled
  // i.e. if we have stored the handles for them
if (tickIntervalHandle) {
clearInterval(tickIntervalHandle)
}
if (tockTimeoutHandle) {
clearTimeout(tockTimeoutHandle)
}
if (tockIntervalHandle) {
clearInterval(tockIntervalHandle)
}
  // Stop the application process
process.exit(0)
})