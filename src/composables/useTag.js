import { useTag } from '@/composables/useContext'

export const useValue = useTag

export const useProxy = () => '[object Proxy]'

export const useArray = () => '[object Array]'

export const useString = () => '[object String]'

export const useNumber = () => '[object Number]'

export const useBoolean = () => '[object Boolean]'

export const useFunction = () => '[object Function]'

export const useAsync = () => '[object AsyncFunction]'

export const useGenerator = () => '[object GeneratorFunction]'

export default useValue
