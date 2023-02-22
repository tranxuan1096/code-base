import { ReactNode } from 'react'

export type WithChildren<T = {}> = T & { children: ReactNode }

export type SearchParams = {}
export type SearchResponse<T = any> = {
  data: T[]
}
