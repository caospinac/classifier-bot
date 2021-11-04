import emoji from 'node-emoji'

export const messagesMap = {
  neg: [
    //
    "It doesn't seem well :grimacing:",
    ':white_frowning_face:',
    ':thumbsdown:',
    "That's not good",
  ],
  pos: [
    //
    'Seems good :grinning:',
    ':smiley:',
    ':thumbsup:',
    'Goody!',
  ],
}

Object.entries(messagesMap).forEach(([, messages]) =>
  messages.forEach((msg, i, arr) => {
    arr[i] = emoji.emojify(msg)
  }),
)
