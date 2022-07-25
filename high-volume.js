const { Client } = require("@elastic/elasticsearch")
const client = new Client({ node: "http://elasticsearch:9200" })

const logCount = 1000000
for (let i = 1; i <= logCount; i++) {
console.log(JSON.stringify({
timestamp: new Date(),
messageId: i,
message: `Message #${i} of ${logCount}`
}))
}

const logEvent = async (eventName, functionName, message) => {
    const logMessage = {
    timestamp: new Date(),
    eventName,
    functionName,
    message
    }
    console.log(JSON.stringify(logMessage))
    await client.index({
    index: "application-logs",
    body: logMessage
    })
    }