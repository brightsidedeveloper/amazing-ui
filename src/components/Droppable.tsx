import { useDroppable } from '@dnd-kit/core'
import { DroppableProps } from '../context/useDndStore'

export default function Droppable({ id, data, className, children }: DroppableProps & { className?: string; children?: React.ReactNode }) {
  const { setNodeRef } = useDroppable({
    id,
    data,
  })
  return (
    <div ref={setNodeRef} className={className}>
      {children}
    </div>
  )
}
