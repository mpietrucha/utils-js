const value = Object

const { prototype } = value

export const useValue = () => value

export const usePrototype = () => prototype

export default () => ({ useValue, usePrototype })
