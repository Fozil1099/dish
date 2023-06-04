export type Items =  {
  createdAt: Date
  title: string
  description: string
  photo: string
  id: number
}

export type Params =  {
  page: number
  limit: number
  title: string
}