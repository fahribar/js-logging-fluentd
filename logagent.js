const { Client } = require("@elastic/elasticsearch")
const client = new Client({ node: "http://elastichost:9200" })
const { Tail } = require("tail")
const tail = new Tail("/var/log/app/log-file.log")
tail.on("line", async body => {
    console.log(JSON.stringify(body))
    await client.index({
        index: "application-logs",
        body
    })
})
