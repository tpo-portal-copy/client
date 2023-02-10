import { MutableRefObject, useEffect } from 'react'

type HandlerType = () => void

export default function useOnOutsideClick(
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: HandlerType,
) {
  useEffect(() => {
    const listener = (event: any) => {
      if (ref == null) return

      if (!ref.current || ref.current.contains(event.target)) return
      console.log('called')

      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
