import React from "react"
import './formItem.sass'

const FormItem = ({handlerChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handlerChange} {...otherProps}/>
        {
            label ? (
                <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)
export default FormItem