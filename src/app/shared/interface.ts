export interface Post {
  volumeInfo: Info
  id?: any
  icon: boolean
}

export interface Info {
  title: string,
  description: string,
  authors: string
}