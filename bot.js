require("dotenv").config();
const { Client, IntentsBitField, ActivityType } = require("discord.js");

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildModeration,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildIntegrations,
        IntentsBitField.Flags.GuildWebhooks,
        IntentsBitField.Flags.GuildInvites,
        IntentsBitField.Flags.GuildVoiceStates,
        IntentsBitField.Flags.GuildPresences,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMessageTyping,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.DirectMessageReactions,
        IntentsBitField.Flags.DirectMessageTyping,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildScheduledEvents,
        IntentsBitField.Flags.AutoModerationConfiguration,
        IntentsBitField.Flags.AutoModerationExecution
    ]
})

bot.on("messageCreate", (msg) => {
    if (msg.author.bot) {
        return;
    }
    if (msg.content == "test") {
        msg.author.send("test")
    }
})

bot.on("ready", (b) => {
    console.log(b.user.tag+" is now online!");
    bot.user.setActivity({
        name: "to your demands.",
        type: ActivityType.Listening
    })
})

bot.on("interactionCreate", (interaction) => {
    if (interaction.isChatInputCommand()) {
        if (interaction.commandName == "hey") {
            interaction.reply("Hey!")
        }
    }
})

bot.login(process.env.token);