const config = require('../config.json')
const admin = false
const master = false
const discordDatabase = require('../discorddatabase')
const Discord = require('discord.js')
const fs = require('fs')
let commands = ''
const executeCommand = function (command, channel, user, guild, discordClient, websocketConnection) {
  channel.startTyping()
  commands = ''
  fs.readdir(__dirname + '/', (err, files) => {
    files.forEach(file => {
      commands = commands.concat(' `' + file.replace('.js', '') + '`')
    })
  })
  setTimeout(function () {
    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Help')
      .setThumbnail(discordClient.user.avatarURL())
      .setDescription('Aviable Commands:\n' + commands)
      .setTimestamp()
      .setFooter(user.tag, user.avatarURL())
    channel.stopTyping()
    channel.send(embed)
  }, 2000)
}
module.exports = executeCommand
module.exports.needAdmin = function () { return admin }
module.exports.needMaster = function () { return master }
