import type { AnyRecord } from 'dns'

export interface component {
  props: AnyRecord<unknown, CallableFunction>
}

interface comp {
  prop: string | boolean | [] | unknown
  component: component
}

export function useComponent({ component, prop }: comp): [component, unknown] {
  component.props = prop

  console.log(component.props)
  return [component, component.props]
}
