import {create} from 'zustand'

interface StoreState {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

export const useSignInStore = create<StoreState>((set) => ({
   isOpen: false,
    setIsOpen: (isOpen: boolean) => set({isOpen})
}))