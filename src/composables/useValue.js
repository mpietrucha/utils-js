import useContext from '@/composables/useContext'

export const {
    useNoop,
    useConfirm,
    useEquals,
    useIdentity,
    useNegate,
    useRescue,
    useTag,
    useTagEquals,
    useType,
    useTypeEquals,
} = useContext()

export const useNull = () => null

export const useTrue = () => true

export const useFalse = () => false

export const useUndefined = useNoop

export default () => ({
    useNoop,
    useConfirm,
    useEquals,
    useIdentity,
    useNegate,
    useRescue,
    useNull,
    useTrue,
    useFalse,
    useUndefined,
    useType,
    useTag,
    useTagEquals,
    useTypeEquals,
})
