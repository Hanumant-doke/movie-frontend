import React, { useState } from 'react'
import Container from '../Container'
import Title from '../form/Title'
import FormInput from '../form/FormInput'
import Submit from '../form/Submit'
import CustomLinks from '../CustomLinks'
import { commonModalClasses } from '../../utils/theme'
import FormContainer from '../form/FormContainer'
import { createUser } from '../../api/auth'
import { useNavigate } from 'react-router-dom'


const validateUserInfo = ({ name, email, password }) => {
    const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidName = /^[a-z A-Z]+$/;
    if (!name.trim()) return { ok: false, error: "Name is  missing!" }
    if (!isValidName.test(name)) return { ok: false, error: "Invalid name" }
    if (!email.trim()) return { ok: false, error: "Email is  missing!" }
    if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email!" }
    if (!password.trim()) return { ok: false, error: "Password is  missing!" }
    if (password.length < 8) return { ok: false, error: "Password is min 8 char!" }
    return { ok: true }
}

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const { name, email, password } = userInfo;

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value })
        console.log(target.name, target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { ok, error } = validateUserInfo(userInfo);
        if (!ok) return console.log(error);
        const response = await createUser(userInfo);
        if (response.error) return console.log(response.error);
        navigate("/auth/verification", { state: { user: response.user }, replace: true })
    }
    return (
        <FormContainer>
            <Container>
                <form onSubmit={handleSubmit} className={commonModalClasses + ' w-80'}>
                    <Title>Sign up</Title>
                    <FormInput label="Name"
                        value={name}
                        placeholder='hanumant'
                        onChange={handleChange}
                        name='name' />
                    <FormInput label="Email"
                        value={email}
                        placeholder='hanumant@gmail.com'
                        onChange={handleChange}
                        name='email' />
                    <FormInput label="Password"
                        value={password}
                        type="password"
                        placeholder='********'
                        onChange={handleChange}
                        name='password' />
                    <Submit value="Sign up" />
                    <div className="flex justify-between">
                        <CustomLinks to="/auth/forget-password">Forget Password</CustomLinks>
                        <CustomLinks to="/auth/signin">Sign in</CustomLinks>
                    </div>
                </form>
            </Container>
        </FormContainer>
    )
}
