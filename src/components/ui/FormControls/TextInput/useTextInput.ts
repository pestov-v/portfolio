import { ChangeEvent, useEffect, useState } from "react"

interface IProps {
    required?: boolean;
    value?: string
}
const REQUIRED = 'The field is required!';
export const useTextInputMy = (props?: IProps) => {

    const [value, setValue] = useState<string>(props?.value ?? '');
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        if (isDirty && !!errors.length) setIsValid(false);
    }, [errors, isDirty]);

    const validate = (value: string) => {
        const newErrors = errors.filter(err => err !== REQUIRED)
        
        if (props?.required && !value.length) {
            setErrors([...newErrors, REQUIRED]);
            return;
        }
        setErrors(newErrors)
    }

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value.trim();
        // console.log('onChange', newValue);
            
        validate(newValue);

        setIsDirty(true);
        setValue(newValue);
    }

    return {
        value,
        onChange,
        setValue,

        errors,
        isDirty,
        isValid
    }
}