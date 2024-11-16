type First<T extends unknown[]> = T extends [] ? never : T[0]

type XX = First<[3, 2, 1]>
type YY = First<[undefined]>
