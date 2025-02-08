import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { DraggableProps } from '../context/useDndStore'

export default function Draggable({ className, children, ...props }: DraggableProps & { className?: string; children?: React.ReactNode }) {
  const { setNodeRef, attributes, listeners, transform } = useDraggable(props)

  const style = {
    transform: CSS.Transform.toString(transform),
  }

  return (
    <button ref={setNodeRef} className={className} style={style} {...attributes} {...listeners}>
      {children}
    </button>
  )
}
