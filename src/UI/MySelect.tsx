import React from "react";

type MySelectType = {
    options: Array<{value: string, name: string}>
    defaultValue: string
    value: string
    onChange: (sort: string) => void
}

const MySelect: React.FC<MySelectType> = (
    {options, defaultValue, value, onChange}
) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option disabled value={""}>{defaultValue}</option>
            {
                options.map(option => <option key={option.value} value={option.value}>
                    {option.name}
                    </option>
                )
            }
        </select>
    )
}

export default MySelect;