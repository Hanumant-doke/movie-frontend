import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLinks from '../CustomLinks'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'


export default function Signin() {
    ;
    return (
        <FormContainer>
            <Container>
                <form className={commonModalClasses + ' w-80'}>
                    <Title>Sign in</Title>
                    <FormInput label="Email" placeholder='hanumant@gmail.com' name='email' />
                    <FormInput label="Password" placeholder='********' name='Password' />
                    <Submit value="Sign in" />

                    <div className="flex justify-between">
                        <CustomLinks to="/auth/forget-password">Forget Password</CustomLinks>
                        <CustomLinks to="/auth/signup">Sign up</CustomLinks>
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}
