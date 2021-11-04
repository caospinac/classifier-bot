export type Perception = 'pos' | 'neg'
export type PerceptionDetail = {
  [key in Perception]: number
}

export type PerceptionResponse = {
  data: {
    perception: Perception
    detail: PerceptionDetail
  }
}
