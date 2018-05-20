import Login from './login'
import Signin from './signin'

const SUPPORTED_COMPONENTS = {
  login: Login,
  signin: Signin,
}

export default {
  name: 'Auth',
  functional: true,
  render(h, { props }) {
    if (!props.type) {
      return null
    }

    const Component = SUPPORTED_COMPONENTS[props.type]

    if (!Component) {
      return null
    }

    return h(Component, { props })
  }
}
