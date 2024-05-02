import { Client, EmbedBuilder, GatewayIntentBits } from "discord.js";

import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }

  if(interaction.commandName === "add") {
    const nums1 = interaction.options.getInteger("num1") as number;
    const nums2 = interaction.options.getInteger("num2") as number;
    await interaction.reply(`${nums1} + ${nums2} = ${nums1 + nums2}`);
  }
  if(interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle('Some title')
      .setURL('https://discord.js.org')
      .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
      .setDescription('Some description here')
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
      )
      .setImage('https://i.imgur.com/AfFp7pu.png')
      .setTimestamp()
      .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    await interaction.reply({ embeds: [embed] });
  }
  if (interaction.commandName === "porn") {
    const embedPorn = new EmbedBuilder()
      .setTitle('Pornhub')
      .setColor('Random')
      .setImage(
        'https://drive.google.com/file/d/1C5aHpPSc5uAn9MfYGM_otg-mlkz9AWU2/view?usp=sharing'
      )

    await interaction.reply({ embeds: [embedPorn] });
  }
});

client.on("messageCreate", async (message) => {
  if(message.author.bot) return;

  console.log(message.content);
  message.reply("Pong!");
});

client.login(process.env.TOKEN);
