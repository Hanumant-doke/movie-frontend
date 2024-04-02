import React, { useState } from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLinks from '../CustomLinks'
import FormContainer from '../form/FormContainer'
import { commonModalClasses } from '../../utils/theme'
import { forgetPassword } from '../../api/auth'
import { isValiadEmail } from '../../utils/helper'
import { useNotification } from '../../hooks'

export default function ForgetPassword() {
    const [email, setEmail] = useState("");

    const { updateNotification } = useNotification()
    const handleChange = ({ target }) => {
        const { value } = target;
        setEmail(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isValiadEmail(email)) return updateNotification('error', 'Invalid email!')
        const { error, message } = await forgetPassword(email)
        if (error) return updateNotification('error', error)
        updateNotification('success', message)
    }
    return (
        <FormContainer>
            <Container>
                <form onSubmit={handleSubmit} className={commonModalClasses + ' w-96'}>
                    <Title>Please Enter Your Email</Title>
                    <FormInput onChange={handleChange} value={email}
                        label="Email" placeholder='hanumant@gmail.com'
                        name='email' />
                    <Submit value="Send Link" />

                    <div className="flex justify-between">
                        <CustomLinks to="/auth/signin">Sign in</CustomLinks>
                        <CustomLinks to="/auth/signup">Sign up</CustomLinks>
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}
