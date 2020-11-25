export type Image = {
  id: number
  src: string
}

export type ImageGroup = {
  id: number
  name: string
  children: Image[]
}
