import type { Ref } from 'vue'

export const splitNumber = (inp: Ref<string[], string[]>) => {
  const numbers = inp.value.toString().replace(/\D/g, '')
  inp.value = Number(numbers).toLocaleString() as unknown as string[]
}

//}
