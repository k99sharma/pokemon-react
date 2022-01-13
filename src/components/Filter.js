import './Filter.css';

import { useState } from 'react';


function Filter(){
    return (
        <div className = 'filter rounded-md p-1'>
            <select className = 'filter__select p-1'>
                <option value = 'filter-1'>Filter 1</option>
                <option value = 'filter-2'>Filter 2</option>
                <option value = 'filter-3'>Filter 3</option>
            </select>
        </div> 
    )
}


export default Filter;