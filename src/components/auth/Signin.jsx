import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLinks from '../CustomLinks'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'
import { useAuth, useNotification } from '../../hooks'
import { useNavigate } from 'react-router-dom'
import { isValiadEmail } from '../../utils/helper'

const validateUserInfo = ({ email, password }) => {
    if (!email.trim()) return { ok: false, error: "Email is  missing!" }
    if (!isValiadEmail(email)) return { ok: false, error: "Invalid email!" }
    if (!password.trim()) return { ok: false, error: "Password is  missing!" }
    if (password.length < 8) return { ok: false, error: "Password is min 8 char!" }
    return { ok: true }
}

export default function Signin() {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const { updateNotification } = useNotification();
    const { handleLogin, authInfo } = useAuth();
    const { isPending, isLoggedIn } = authInfo;


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { ok, error } = validateUserInfo(userInfo);
        if (!ok) return updateNotification('error', error);
        handleLogin(userInfo.email, userInfo.password)
    }

    useEffect(() => {
        if (isLoggedIn)
            navigate("/")
    }, [isLoggedIn])

    return (
        <FormContainer>
            <Container>
                <form onSubmit={handleSubmit} className={commonModalClasses + ' w-80'}>
                    <Title>Sign in</Title>
                    <FormInput
                        value={userInfo.email}
                        onChange={handleChange}
                        label="Email"
                        placeholder='hanumant@gmail.com'
                        name='email'
                    />
                    <FormInput
                        value={userInfo.password}
                        onChange={handleChange}
                        label="Password"
                        placeholder='********'
                        name='password'
                        type="password"
                    />

                    <Submit value="Sign in" busy={isPending} />

                    <div className="flex justify-between">
                        <CustomLinks to="/auth/forget-password">Forget Password</CustomLinks>
                        <CustomLinks to="/auth/signup">Sign up</CustomLinks>
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}
