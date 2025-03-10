import { create } from 'zustand';
import { CrudList, CrudListItem } from '../lib/types/CRUD';

interface BearState {
    news: CrudList;
    setNews: (data: CrudList) => void;
    editByIndex: (data: CrudListItem, index: number) => void;
    deleteByIndex: (index: number) => void;
}

export const useStore = create<BearState>()(set => ({
    news: [],
    setNews: data => set(() => ({ news: data })),
    editByIndex: (data, index) =>
        set(state => {
            const newData = [...state.news];
            newData[index] = data;
            return { news: newData };
        }),
    deleteByIndex: (index: number) =>
        set(state => {
            const newData = [...state.news];
            newData.splice(index, 1);
            return { news: newData };
        }),
}));
