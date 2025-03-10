import { useLayoutEffect, useRef, useState } from 'react';
import styles from './CrudItem.module.css';
import { ArrowInCircleIcon } from '../../../../shared/icons/ArrowInCircleIcon';
import { EditIcon } from '../../../../shared/icons/EditIcon';
import { DeleteIcon } from '../../../../shared/icons/DeleteIcon';

interface Props {
    label: string;
    description: string;
    index: number;
}

export const CrudItem = ({ label, description, index }: Props) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const fullHeight = useRef<number>(0);
    const textbox = useRef<HTMLParagraphElement>(null);

    const onClick = () => {
        if (fullHeight.current > 21) {
            setOpen(prev => !prev);
        }
    };

    useLayoutEffect(() => {
        if (textbox.current) fullHeight.current = textbox.current.scrollHeight;
    });

    return (
        <div onClick={onClick} className={styles.item}>
            <div className={styles.item_up}>
                <div className={styles.item_up_part}>
                    <div className={`${styles.arrow} , ${isOpen ? styles.arrow_open : ''}`}>
                        <ArrowInCircleIcon />
                    </div>
                    <h2>{label}</h2>
                </div>

                <div className={styles.item_up_part}>
                    <label className={styles.svg_container}>
                        <div className={styles.svg_container}>
                            <EditIcon />
                        </div>

                        <button style={{ visibility: 'hidden' }}>edit</button>
                    </label>
                    <label className={styles.svg_container}>
                        <div className={styles.svg_container}>
                            <DeleteIcon />
                        </div>

                        <button style={{ visibility: 'hidden' }}>edit</button>
                    </label>
                </div>
            </div>
            <p
                ref={textbox}
                style={isOpen ? { paddingBottom: '63px' } : { paddingBottom: '0px' }}
                className={` ${styles.text} , ${isOpen ? styles.text_open : ''} `}
            >
                {description}
            </p>
        </div>
    );
};
