const Discord = require("discord.js-selfbot-v13");
const { joinVoiceChannel, getVoiceConnection, VoiceConnectionStatus } = require('@discordjs/voice');
const colors = require("colors");

//การตั้งค่า
token = "" //โทเคนคน!
channel_id = "" //ไอดีช่อง

const client = new Discord.Client({
    checkUpdate: false
});

client.on("ready", async () => {
    console.log(colors.red("Online channel")+" | Ready!");
    console.log("- Logined as "+client.user.tag);

    const channel = client.channels.cache.get(channel_id);

    if (channel) {
        if (channel.type == "GUILD_VOICE") {
            const connection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator,
            });

            connection.on(VoiceConnectionStatus.Ready, () => {
                console.log('- The connection has entered the channel!');
            });
        } else {
            console.log("- The channel isn't voice channel!")
        }
    } else {
        console.log("- Channel isn't found!");
    }
});

client.login(token)
.catch(async () => {
    console.log(colors.red("Online channel")+" | Error!");
    console.log("- Token is incorrect!");
});
