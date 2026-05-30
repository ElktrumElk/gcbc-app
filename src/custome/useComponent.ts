export interface Component {
  props: string | boolean | unknown[] | Record<string, unknown>
}

interface comp {
  prop: string | boolean | unknown[] | Record<string, unknown>
  component: Component
}

export function useComponent({ component, prop }: comp): [Component, unknown] {
  component.props = prop

  console.log(component.props)
  return [component, component.props]
}
