export const value = Object

export const toString = value => {
    const { toString } = value

    return toString.call(value)
}

export default () => ({ value, toString })
