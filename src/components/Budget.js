import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget, currency, dispatch } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type='number'
                value={budget}
                step={10}
                onChange={(e) => {
                    if (e.target.value > 20000) {
                        alert('Budget cannot exceed 20000');
                        return;
                    }
                    if (
                        e.target.value <
                        expenses.reduce((total, item) => total + item.cost, 0)
                    ) {
                        alert('Budget cannot be lower than spending');
                        return;
                    }
                    dispatch({
                        type: 'SET_BUDGET',
                        payload: e.target.value,
                    });
                }}
            />
        </div>
    );
};
export default Budget;
