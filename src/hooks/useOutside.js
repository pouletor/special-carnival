import { useEffect } from 'react'

export function useOutside(ref, action = () => {}) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action(event)
      }
    }

    function handleKeyOutside(event) {
      if (event.key === 'Escape') {
        action(event)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyOutside)
    }
  }, [ref, action])
}
