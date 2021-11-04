import { Telegraf } from 'telegraf'

const telBot = new Telegraf(process.env.TEL_TOKEN || '')

telBot.start(ctx => ctx.reply('Welcome!'))

telBot.on('text', ctx => {
  ctx.reply('Hello World')
})

telBot.launch()

process.once('SIGINT', () => telBot.stop('SIGINT'))
process.once('SIGTERM', () => telBot.stop('SIGTERM'))
