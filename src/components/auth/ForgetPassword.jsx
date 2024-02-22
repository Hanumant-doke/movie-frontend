import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLinks from '../CustomLinks'
import FormContainer from '../form/FormContainer'
import { commonModalClasses } from '../../utils/theme'

export default function ForgetPassword() {
    return (
        <FormContainer>
            <Container>
                <form className={commonModalClasses + ' w-96'}>
                    <Title>Please Enter Your Email</Title>
                    <FormInput label="Email" placeholder='hanumant@gmail.com' name='email' />
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
