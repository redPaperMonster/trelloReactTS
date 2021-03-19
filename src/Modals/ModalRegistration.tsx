
import React, { useState } from 'react'
import { Button, Modal, FormInput } from '../Components';
import { Form, Field } from 'react-final-form'

interface Props {
    isOpen: boolean,
    close: () => void,
    handleNameEnterSubmit: (name: string) => void
}

const ModalRegistration: React.FC<Props> = ({
    isOpen,
    close,
    handleNameEnterSubmit }) => {

    const handleSubmit = (values: any) => {
        handleNameEnterSubmit(values.userName)
    }
    const required = (value: string) => (value ? undefined : 'Required')


    return (
        <Modal
            isOpen={isOpen}
            close={close}
            hideCloseButton>
            <Form
                onSubmit={handleSubmit}>
                {props => (
                    <form>
                        <div>
                            <label>Enter your name</label>
                            <Field
                                name="userName"
                                validate={required}
                                component={FormInput} />
                            <Button
                                onClick={props.handleSubmit}
                                text="Submit" />
                        </div>
                    </form>
                )}
            </Form>
        </Modal >
    )
}

export default ModalRegistration;
