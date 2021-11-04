import axios from 'axios'
import { API_URL, TEL_TOKEN } from './const'
import { PerceptionResponse } from './schemas'
import { Telegraf } from 'telegraf'

const telBot = new Telegraf(TEL_TOKEN)

telBot.start(ctx => ctx.reply('Welcome!'))

telBot.on('text', async ctx => {
  try {
    const { data: result } = await axios.request<PerceptionResponse>({
      baseURL: API_URL,
      data: {
        input: ctx.message.text,
      },
      method: 'POST',
      url: '/v1/get-perception',
    })

    ctx.reply(result.data.perception)
  } catch (err) {
    console.error(err)
    ctx.reply('Error processing text')
  }
})

telBot.launch()

process.once('SIGINT', () => telBot.stop('SIGINT'))
process.once('SIGTERM', () => telBot.stop('SIGTERM'))
