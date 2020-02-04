import * as React from 'react';
import classnames from 'classnames';


export interface TextFieldProps {
    className?: string;
    htmlId?: string;
    name: string;
    type?: string;
    autoComplete?: 'off' | 'on';
    label?: string;
    size?: 'normal' | 'small';
    value?: number | string | [];
    disabled?: boolean;
    onChange?: React.EventHandler<any>;
    required?: boolean;
}

const TextField = ({
    className, name, type, 
    label, size, autoComplete,
    value, disabled, onChange,
    required, htmlId
}: TextFieldProps): JSX.Element => {

    const [filled, setFilled] = React.useState(false);

    const classes = classnames(
        'text-field',
        className,
        size,
        { filled },
        { disabled }
    )

    const handleChange = (e: any): void => {
        if(e.target.value.length > 0) {
            setFilled(true);
        } else {
            setFilled(false);
        }

        return onChange(e);
    }

    return(
        <div className={classes}>
            <input
                type={type}
                className="text-field__input"
                id={htmlId}
                name={name}
                required={required}
                value={value}
                autoComplete={autoComplete}
                onChange={(e) => handleChange(e)}
                disabled={disabled}
            />
            <label className="text-field__label">{label}</label>          
        </div>
    )
}


TextField.defaultProps = {
    name: '',
    className: '',
    type: 'text',
    label: 'text field',
    size: 'normal',
    autoComplete: 'off',
    disabled: false,
    required: false,
    onChange: null
}


export default TextField;