import { create } from 'zustand'

export type DroppableProps = {
  id: string
  data?: DroppableData
}

export type DroppableData = {
  funny: boolean
}

export type DraggableProps = {
  id: string
  data?: DraggableData
  disabled?: boolean
}

export type DraggableData = {
  name: string
  age: number
}

export type DndStore = {
  /**
   * Draggables
   */
  draggables: DraggableProps[]
  addDraggable: (draggable: DraggableProps) => void
  removeDraggable: (draggable: DraggableProps) => void
  /**
   * Droppables
   */
  droppables: DroppableProps[]
  addDroppable: (droppable: DroppableProps) => void
  removeDroppable: (droppable: DroppableProps) => void
}

export const useDndStore = create<DndStore>((set) => ({
  /**
   * Draggables
   */
  draggables: [],
  addDraggable: (draggable) => set((state) => ({ draggables: [...state.draggables, draggable] })),
  removeDraggable: (draggable) =>
    set((state) => ({
      draggables: state.draggables.filter((d) => d.id !== draggable.id),
    })),
  /**
   * Droppables
   */
  droppables: [],
  addDroppable: (droppable) => set((state) => ({ droppables: [...state.droppables, droppable] })),
  removeDroppable: (droppable) =>
    set((state) => ({
      droppables: state.droppables.filter((d) => d.id !== droppable.id),
    })),
}))
