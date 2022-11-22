import { ChangeEvent, useState } from "react"

export const useTextInput = () => {
    const [value, setValue] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value;

        setValue(newValue);
    }

    return {
        value,
        onChange,
        setValue
    }
}