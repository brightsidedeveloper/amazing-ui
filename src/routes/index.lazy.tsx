import { DndContext } from '@dnd-kit/core'
import { createLazyFileRoute } from '@tanstack/react-router'
import Draggable from '../components/Draggable'
import Droppable from '../components/Droppable'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DndContext>
      <div className="size-full min-h-dvh flex ">
        <div className="w-72 border-r flex flex-col items-center p-8">
          <Draggable id="new-draggable" className="bg-red-500 size-fit p-4">
            Dwag Me
          </Draggable>
        </div>
        <div className="flex-1 p-8 flex items-center justify-center">
          <Droppable id="new-droppable" className="w-96 h-72 border border-dashed flex items-center justify-center">
            Dwop him here
          </Droppable>
        </div>
      </div>
    </DndContext>
  )
}
