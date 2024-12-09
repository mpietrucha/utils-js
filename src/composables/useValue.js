import useContext from '@/composables/useContext'

export const {
    useRescue,
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEquals,
    useType,
    useTypeEquals,
    useTag,
    useTagEquals,
} = useContext()

export const useNull = () => null

export const useTrue = () => true

export const useFalse = () => false

export const useUndefined = useNoop

export default () => ({
    useRescue,
    useNoop,
    useIdentity,
    useNegate,
    useConfirm,
    useEquals,
    useType,
    useTypeEquals,
    useTag,
    useTagEquals,
    useNull,
    useTrue,
    useFalse,
    useUndefined,
})
