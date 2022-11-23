import { ChangeEvent, useEffect, useState } from "react"

interface IProps {
    required?: boolean;
    value?: string
}
const REQUIRED = 'The field is required!';
export const useTextInput = (props?: IProps) => {

    const [value, setValue] = useState<string>(props?.value ?? '');
    const [isDirty, setIsDirty] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        if (isDirty && !!errors.length) setIsValid(false);
    }, [errors, isDirty]);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value.trim();

        if (props?.required && !newValue.length) {

            setErrors([...errors, REQUIRED]);
        }

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