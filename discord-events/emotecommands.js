const config = require('../config.json')
const discordDatabase = require('../discorddatabase')
const fs = require('fs')
const enableEvent = function (discordClient, websocketConnection) {
  discordClient.on('message', msg => {
    if (msg.channel.type == 'dm') {
      msg.author.send('DM is not Supportet!')
      return
    }
    if (msg.channel.type != 'text') {
      return
    }
    if (msg.author.id != discordClient.user.id) {
      return
    }
    if (msg.embeds.length == 0) {
      return
    }
    const id = msg.embeds[0].title.toLowerCase().replace(/\s/g, '')
    if (!fs.existsSync(__dirname + '/../discord-commandreactions/' + id + '.js')) {
      return
    }
    const emoteModule = require('../discord-commandreactions/' + id)
    emoteModule(discordClient, websocketConnection, msg)
  })
}
module.exports = enableEvent
