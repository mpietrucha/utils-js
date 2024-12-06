import { useEquals, useNoop } from '@/composables/useContext'

export { useEquals }

export const useNull = () => null

export const useTrue = () => true

export const useFalse = () => false

export const useUndefined = useNoop

export default useEquals
