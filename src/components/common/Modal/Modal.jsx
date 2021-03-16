import { useEffect, useMemo } from 'react'
import reactDom from 'react-dom'

const wrapStyle = `
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0 ,0, 0, .4);
`

function createWrapper() {
  const el = document.createElement('div')
  el.style.cssText = wrapStyle
  return el
}

const Modal = ({ onClose, children }) => {
  const wrapper = useMemo(createWrapper, [])

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    document.body.append(wrapper)

    wrapper.onclick = (e) => {
      if (e.target === wrapper)
        onClose()
    }

    return () => {
      wrapper.remove()
      document.body.style.overflow = bodyOverflow
    }
  }, [onClose, wrapper])


  return reactDom.createPortal(children, wrapper)
}

export default Modal
