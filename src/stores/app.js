import create from 'zustand'
import shallow from 'zustand/shallow'

const appStore = create(() => {
  return {
    router: null,
    dom: null,
  }
})

const useStore = (sel) => appStore(sel, shallow)
Object.assign(useStore, appStore)

const { getState, setState } = appStore

export { getState, setState }
export default useStore
