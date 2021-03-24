import React from "react";
type SelectOptions = {
    value: string,
    text: string | number
}
export interface Props {
    options: Array<SelectOptions>;
    defaultOption: string | number;
    handleSelect: (option: string) => void;
}

const SelectElement: React.FC<Props> = ({ options,
                                            defaultOption,
                                            handleSelect }) => {
    return (
            <select className="form-select custom-select" onChange={(event) => handleSelect(event.target.value)}>
                <option>{defaultOption}</option>
                {
                    options.map((option, index) => {
                        return <option key={index} value={option.value.toLowerCase()}>{option.text}</option>
                    })
                }
            </select>
    )
}
export default SelectElement
