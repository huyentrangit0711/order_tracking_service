import React from "react";
interface Props {
    buttonText: string,
    buttonId: string,
    isActive: boolean | undefined,
    isHidden: boolean,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonElement: React.FC<Props> = ({ buttonText,
                                            buttonId,
                                            isActive,
                                            isHidden,
                                            handleClick }) => {
    return (
        // onChange={(event) => handleSelect(event.target.value)}
        <button type="button"
                className={"btn btn-outline-primary mx-3 " + (isActive ? 'active' : '')+ (isHidden ? 'active' : '')}
                id={buttonId}
                disabled={isHidden}
                onClick={(event) => {event.preventDefault(); handleClick(event)}}>{buttonText}{isActive}</button>
    )
}
export default ButtonElement
