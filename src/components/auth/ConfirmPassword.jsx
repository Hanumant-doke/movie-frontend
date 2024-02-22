import React from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import CustomLinks from '../CustomLinks'
import Submit from '../form/Submit'
import FormContainer from '../form/FormContainer'
import { commonModalClasses } from '../../utils/theme'

export default function ConfirmPassword() {
    return (
        <FormContainer>
            <Container>
                <form className={commonModalClasses + ' w-96'}>
                    <Title>Enter New Password</Title>
                    <FormInput label="New Passord"
                        placeholder='********'
                        name='newPassword'
                        type="password"
                    />
                    <FormInput label="Confirm Passord"
                        placeholder='********'
                        name='confirmPassword'
                        type="password"
                    />
                    <Submit value="Confirm Password" />
                </form>
            </Container>
        </FormContainer>
    )
}
