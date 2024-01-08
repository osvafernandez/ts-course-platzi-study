import { subDays, format } from 'date-fns'

const date = new Date(1998, 1, 28)
const resp = subDays(date, 30)
const str = format(resp, 'yyy/MMM/ddd')

console.log(str)
