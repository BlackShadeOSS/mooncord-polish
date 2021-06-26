const variables = require('../utils/variablesUtil')

const event = (message, connection, discordClient) => {
  if (message.type === 'utf8') {
    const messageJson = JSON.parse(message.utf8Data)
    if (typeof (messageJson.result) === 'undefined') { return }
    if (typeof (messageJson.result.moonraker_stats) === 'undefined') { return }
    console.log(messageJson.result.moonraker_stats)
  }
}
module.exports = event