import { randomUUID } from 'crypto'

import { sum } from './sameFolder'

function asdfg(b: string) {
  const a = 2
  return sum(a, 3) + randomUUID()
}

console.log(asdfg('asd'))
