import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    return (
        <label>
            Currency{' '}
            <select
                className='dropdown'
                onChange={(e) =>
                    dispatch({
                        type: 'CHG_CURRENCY',
                        payload: e.target.value,
                    })
                }
            >
                <option value={'$'}>$ Dollar</option>
                <option value={'£'}>£ Pound</option>
                <option value={'€'}>€ Euro</option>
                <option value={'₹'}>₹ Ruppee</option>
            </select>
        </label>
    );
};

export default CurrencyDropdown;
