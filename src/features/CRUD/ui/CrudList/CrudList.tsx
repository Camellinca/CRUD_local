import { useCrudStore } from '../../model/store';
import { CrudItem } from '../CrudItem/CrudItem';
import styles from './CrudList.module.css';

export const CrudList = () => {
    const { news } = useCrudStore();
    return (
        <div className={styles.list}>
            {news.length != 0
                ? news.map((item, index) => (
                      <CrudItem
                          key={`crud${item.label}${item.description}`}
                          label={item.label}
                          description={item.description}
                          index={index}
                      />
                  ))
                : `Здесь тихо и одиноко`}
        </div>
    );
};
