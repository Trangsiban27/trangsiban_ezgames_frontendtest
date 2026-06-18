import { create } from "zustand"

interface State {
    bag: any[],
    setBags: (newBag: any) => void,
    syncFromLocalStorage: () => void
}

export const useBagStore = create<State>((set) => ({
    bag: [],
    setBags: (newBag: any) => {
        localStorage.setItem('bag', JSON.stringify(newBag))
        set({bag: newBag})
    },
    syncFromLocalStorage: () => {
        const stored = localStorage.getItem('bag')
        if (stored) set({bag: JSON.parse(stored)})
    }
}))