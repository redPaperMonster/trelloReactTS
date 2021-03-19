import styled from "styled-components";

interface Props {
    onChange: (e: any) => void,
    value?: string,
    customSize?: number,
    focused?: boolean
}
const CommonInput = styled.input`
margin: 1em;
font-size: 1em;`


const Input: React.FC<Props> = ({
    onChange,
    value,
    customSize,
    focused }) => {

    const size: number = customSize || 20

    return (

        <CommonInput
            onChange={onChange}
            value={value}
            type="text"
            size={size}
            autoFocus={focused} />
    )
}

export default Input;