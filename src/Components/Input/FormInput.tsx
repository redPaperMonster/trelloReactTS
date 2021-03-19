
import { FieldRenderProps } from "react-final-form";
import React from "react";
import { CommonInput, ErrorLabel } from "./InputStyles";

interface Props
    extends FieldRenderProps<string> { }



const FormInput: React.FC<Props> = ({
    meta,
    input }) => {

    return (
        <div>
            <CommonInput {...input}
                type="text" />
            { meta && meta.touched && meta.error && <ErrorLabel>{meta.error}</ErrorLabel>}
        </div>
    )
}


export default FormInput;