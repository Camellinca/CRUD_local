import { create } from 'zustand';
import { CrudList, CrudListItem } from '../lib/types/CRUD';

interface CrudState {
    news: CrudList;
    currentIndex: number;
    setNews: (data: CrudList) => void;
    editByIndex: (data: CrudListItem, index: number) => void;
    deleteByIndex: (index: number) => void;
    addNew: (item: CrudListItem) => void;
}

export const useCrudStore = create<CrudState>()(set => ({
    news: [],
    currentIndex: 0,
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
    addNew: (item: CrudListItem) =>
        set(state => {
            const newData = [...state.news];
            newData.push(item);
            return { news: newData };
        }),
}));
