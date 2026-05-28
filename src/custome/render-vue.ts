import { ref, computed } from 'vue'

export function useRerender(value: string | boolean | [] | unknown): [unknown, CallableFunction] {
  const __init_value = ref(value)

  const __updatedVale = computed(() => {
    return __init_value.value
  })

  const __handle_value: CallableFunction = (value: unknown, cb: CallableFunction) => {
    __init_value.value = value
    cb?.(__init_value.value)
  }

  return [__updatedVale, __handle_value]
}
