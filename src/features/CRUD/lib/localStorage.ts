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
    updateDataByindex: function (index: number, label: string, description: string) {
        localStorage.setItem(`${this.key}_label${index}`, label);
        localStorage.setItem(`${this.key}_description${index}`, description);
    },
    deleteItemByIndex: function (index: number) {
        let nextLabel: string | null, nextDescription: string | null;
        do {
            nextLabel = localStorage.getItem(`${this.key}_label${index + 1}`);
            nextDescription = localStorage.getItem(`${this.key}_description${index + 1}`);

            if (nextLabel != null) localStorage.setItem(`${this.key}_label${index}`, nextLabel);
            else localStorage.removeItem(`${this.key}_label${index}`);

            if (nextDescription != null) localStorage.setItem(`${this.key}_description${index}`, nextDescription);
            else localStorage.removeItem(`${this.key}_description${index}`);
        } while (nextLabel != null);
    },
};
