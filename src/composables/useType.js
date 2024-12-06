import { useType } from '@/composables/useContext'

export const useValue = useType

export const useObject = () => 'object'

export const useFunction = () => 'function'

export default useValue
