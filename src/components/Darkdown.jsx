import React, { useState } from 'react'
import QustionBtn from './QustionBtn';

function Darkdown({question}) {

    const [value, setValue] = useState();
    

    console.log(value);

    return (
        <div className='markdown'>
            
            <div className="col-1">
                <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                name="" id="">

                </textarea>
            </div>
            <div className="col-1">
                <div className="text">
                    
                    {question ? <QustionBtn/> : value}
                </div>
            </div>

            
        </div>
    )
}

export default Darkdown