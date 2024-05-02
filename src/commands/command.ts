import { REST, Routes } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  },
  {
    name: 'add',
    description: 'Adds two numbers',
    options: [
      {
        name: 'num1',
        description: 'The first number',
        type: 4,
        required: true
      },
      {
        name: 'num2',
        description: 'The second number',
        type: 4,
        required: true
      }
    ]
  },
  {
    name: 'embed',
    description: 'Sends an embed',
    options: [
      {
        name: 'title',
        description: 'The title of the embed',
        type: 3,
        required: true
      },
      {
        name: 'description',
        description: 'The description of the embed',
        type: 3,
        required: true
      }
    ]
  },
  {
    name: 'porn',
    description: 'Sends a pornhub image'
  }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN as string)

try {
  console.log('Started refreshing application (/) commands.')

  rest.put(Routes.applicationCommands(process.env.CLIENT_ID as string), {
    body: commands
  })

  console.log('Successfully reloaded application (/) commands.')
} catch (error) {
  console.error(error)
}
