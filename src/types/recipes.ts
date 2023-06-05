export type Items =  {
  createdAt: Date
  title: string
  description: string
  photo: string
  id: number
}

export type Recipes =  {
  count: number
  next: number
  page_size: number
  results: Items[]
  total_pages: number
}

export type Params =  {
  page: number
  page_size: number
  search: string
}

export type Form = {
  title: string,
  photo:  Blob | string,
  description: string
}
