import { CrudItem } from '../CrudItem/CrudItem';
import styles from './CrudList.module.css';

export const CrudList = () => {
    return (
        <div className={styles.list}>
            <CrudItem label="123" description="32122212" index={0} />
            <CrudItem
                label="456"
                description="4566gdhi fdshysdfhyusdfuh ysdfhuysfhuysfafhfusydh usdfbsdfbuhds sdugss gsuyhgsd s g hfghggdyh sdguyhgudh  gfdgdggudu gfdhuyg huyhuhuyhgh gfhgfdhyg dhfuhy hghdhgduyh ghuduh hjghhgfh hgfghuihg duhgdfuybguyhg dfhufdhugh hdfhd uhgdihdgihdgs ihdgdssoioi jddhgpigs dpojigigj oijgdiojdoijhhgd sihgfuhgdf huyg yhgs duhyug df uy yuhg hgduyhg ugfhyu yhuhy g564545"
                index={1}
            />
            <CrudItem label="789" description="979878978998" index={2} />
        </div>
    );
};
