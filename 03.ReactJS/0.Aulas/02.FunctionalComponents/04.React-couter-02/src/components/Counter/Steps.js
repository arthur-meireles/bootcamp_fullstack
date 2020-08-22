import React from 'react'
import css from './counter.module.css';

export default function Steps ({steps}){
   
        return (
            <div>
                <span className={css.counterValue}>({steps})</span>
            </div>
        )
}
