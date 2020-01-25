import * as React from 'react';

import Select from '../select';
import SelectItem from '../select-item';

const SelectPage = () => {

    const [value, setValue] = React.useState('');

    return(
        <section>
            <div>
                <h4>Простой выпадающий список</h4>
                <Select>
                    <SelectItem>Item one</SelectItem>
                    <SelectItem>Item two</SelectItem>
                    <SelectItem>Item three</SelectItem>
                </Select>
            </div>
            <div>
                <h4>Выпадающий список с неактивным пунктом</h4>
                <Select>
                    <SelectItem>Item one</SelectItem>
                    <SelectItem>Item two</SelectItem>
                    <SelectItem disabled>Item three</SelectItem>
                </Select>
            </div>
            <div>
                <h4>Контролируемый выпадающий список</h4>
                <Select setValue={setValue}> 
                    <SelectItem>Заяц</SelectItem>
                    <SelectItem>Медведь</SelectItem>
                    <SelectItem>Волк</SelectItem>
                    <SelectItem>Лось</SelectItem>
                </Select>
                <p>{value}</p>
            </div>
        </section>
    )
}


export default SelectPage;