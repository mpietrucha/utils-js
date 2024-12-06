export const value = Object

export const { prototype } = value

export const toString = value => {
    const { toString } = prototype

    return toString.call(value)
}

export const { defineProperty } = value

export default () => ({ value, toString, defineProperty })
