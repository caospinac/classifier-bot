import axios from 'axios'
import { API_URL, TEL_TOKEN } from './lib/const'
import { PerceptionResponse } from './schemas'
import { Telegraf } from 'telegraf'
import { randomChoice } from './lib/utils'
import { messagesMap } from './lib/messages'

const telBot = new Telegraf(TEL_TOKEN)

telBot.start(ctx => ctx.reply('Hey! Start sending texts and I will tell you what I think 🙈'))

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

    const reply = randomChoice(messagesMap[result.data.perception])

    ctx.reply(reply)
  } catch (err) {
    console.error(err)
    ctx.reply('Error processing text')
  }
})

telBot
  .launch()
  .then(() => console.log('Ready'))
  .catch(err => console.error(err))

process.once('SIGINT', () => telBot.stop('SIGINT'))
process.once('SIGTERM', () => telBot.stop('SIGTERM'))
