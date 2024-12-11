const value = Object

const { prototype } = value

export const useValue = () => {
    return value
}

export const usePrototype = () => {
    return prototype
}

export default () => ({ useValue, usePrototype })
