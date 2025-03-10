import { CrudList, CrudListItem } from './types/CRUD';

export const LStorage = {
    key: 'localStorageCRUD',
    getData: function () {
        const data: CrudList = [];
        let index = 0;
        let label = localStorage.getItem(`${this.key}_label${index}`);
        while (label != null) {
            const description = localStorage.getItem(`${this.key}_description${index}`) ?? '';
            const item: CrudListItem = {
                label: label,
                description: description,
            };
            data.push(item);
            label = localStorage.getItem(`${this.key}_label${++index}`);
        }
        return data;
    },
    updateByindex: function (index: number, label: string, description: string) {
        localStorage.setItem(`${this.key}_label${index}`, label);
        localStorage.setItem(`${this.key}_description${index}`, description);
    },
    deleteItemByIndex: function (index: number) {
        let i = index;
        let nextLabel: string | null = localStorage.getItem(`${this.key}_label${i + 1}`);
        let nextDescription: string | null = localStorage.getItem(`${this.key}_description${i + 1}`);
        while (nextLabel) {
            localStorage.setItem(`${this.key}_label${i}`, nextLabel);
            if (nextDescription) localStorage.setItem(`${this.key}_description${i}`, nextDescription);
            i++;
            nextLabel = localStorage.getItem(`${this.key}_label${i + 1}`);
            nextDescription = localStorage.getItem(`${this.key}_description${i + 1}`);
        }
        localStorage.removeItem(`${this.key}_label${i}`);
        localStorage.removeItem(`${this.key}_description${i}`);
    },
    createElement: function (label: string, description: string) {
        let index = 0;
        while (localStorage.getItem(`${this.key}_label${index}`) != null) {
            index++;
        }
        localStorage.setItem(`${this.key}_label${index}`, label);
        localStorage.setItem(`${this.key}_description${index}`, description);
    },
};
