import { useLayoutEffect, useRef, useState } from 'react';
import styles from './CrudItem.module.css';
import { ArrowInCircleIcon } from '../../../../shared/icons/ArrowInCircleIcon';
import { EditIcon } from '../../../../shared/icons/EditIcon';
import { DeleteIcon } from '../../../../shared/icons/DeleteIcon';
import { NavLink } from 'react-router';
import { LStorage } from '../../lib/LStorage';
import { useCrudStore } from '../../model/store';

interface Props {
    label: string;
    description: string;
    index: number;
}

export const CrudItem = ({ label, description, index }: Props) => {
    const { deleteByIndex } = useCrudStore();
    //Если описание больше одной строки, элемент на клик увеличивается в размерах
    const [isOpen, setOpen] = useState<boolean>(false);
    const fullHeight = useRef<number>(0);
    const textbox = useRef<HTMLParagraphElement>(null);

    const isInteractable = () => {
        return fullHeight.current > 21;
    };

    const onClick = () => {
        if (isInteractable()) {
            setOpen(prev => !prev);
        }
    };

    const onDelete = () => {
        LStorage.deleteItemByIndex(index);
        deleteByIndex(index);
    };

    const onResize = () => {
        setOpen(false);
        setTimeout(() => {
            if (textbox.current) fullHeight.current = textbox.current.scrollHeight;
        }, 500);
    };

    useLayoutEffect(() => {
        if (textbox.current) fullHeight.current = textbox.current.scrollHeight;
        addEventListener('resize', onResize);
        return () => {
            removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div onClick={onClick} className={styles.item}>
            <div className={styles.item_up}>
                <div className={styles.item_up_part}>
                    <div className={`${styles.arrow} , ${isOpen ? styles.arrow_open : ''}`}>
                        <ArrowInCircleIcon className={isInteractable() ? styles.bluesvg : ''} />
                    </div>
                    <h2 className={styles.header}>{label}</h2>
                </div>

                <div className={styles.item_up_part}>
                    <NavLink className={styles.svg_container} to={`/edit/${index}`}>
                        <EditIcon className={styles.bluesvg} />
                    </NavLink>

                    <label className={styles.svg_container}>
                        <DeleteIcon className={styles.bluesvg} />
                        <button onClick={onDelete} style={{ visibility: 'hidden' }}>
                            edit
                        </button>
                    </label>
                </div>
            </div>
            <p ref={textbox} style={isOpen ? { paddingBottom: fullHeight.current } : { paddingBottom: '0px' }} className={styles.text}>
                {description != '' ? description : 'Без описания'}
            </p>
        </div>
    );
};
