client.on('message', message => {
  
  if(message.content.startsWith(`!공지`)) {
  
    if(message.guild.id === '764431390246436895') {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
     let contents = message.content.slice(`!공지`.length);
     let embed = new Discord.MessageEmbed()
      .setAuthor('공지가 도착했어요!')
      .setColor('#0059C4')
      .setTimestamp()

      embed.setDescription(contents);
  
      message.guild.members.cache.forEach(member => {
        if(member.user.bot) return;
        if(member.roles.cache.find(r => r.name == 'testt') != undefined) {
            member.send(embed)
        }});

      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
}}});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
  return true;
  } else {
  return false;
  }
};


client.login(token);