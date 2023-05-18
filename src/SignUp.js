import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setUser } from './Store/actions/UserAction';
import { Container } from 'react-bootstrap';
import "./SignUp.css";
import { useForm } from 'react-hook-form';


function SignUp() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    console.log(errors);

    const dispatch = useDispatch();
    // States for registration
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handling the Phone Number
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    // Handling the Age
    const handleAge = (e) => {
        setAge(e.target.value);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // Handling the data
    const formHandle = (event) => {
        const myData = {
            name: event.name,
            email: event.email,
            phone: event.phone,
            age: event.age,
            password: event.password
        }
        dispatch(setUser(myData));
        alert("Successfully Submitted")

        reset();
    };


    return (
        <div className="main">
            <Container>
                <div className='SignUpForm'>
                    <Form className='forms' onSubmit={handleSubmit(formHandle)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name <span className='star'>*</span></Form.Label>
                            <Form.Control
                                onChange={handleName}
                                // value={name}
                                name='name'
                                type="text"
                                placeholder="Enter name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "This is required field"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "This name is too long , try again"
                                    }
                                })} />
                            <div className="errorMsg" >{errors.name ? <span>{errors.name.message}</span> : ""}</div>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address <span className='star'>*</span></Form.Label>
                            <Form.Control
                                onChange={handleEmail}
                                // value={email}
                                name="email"
                                type="text"
                                placeholder="Enter email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "This is required field"
                                    },
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Invalid email address!"
                                    }
                                })} />
                            <div className="errorMsg" >{errors.email ? <span>{errors.email.message}</span> : ""}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Phone Number <span className='star'>*</span></Form.Label>
                            <Form.Control
                                onChange={handlePhone}
                                // value={phone}
                                name='phone'
                                type='number'
                                pattern="[0-9]*"
                                placeholder="Enter Phone no."
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "This is required field"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "This number is too short, try again"
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: "This number is too long, try again"
                                    }
                                })} />
                            <div className="errorMsg" >{errors.phone ? <span>{errors.phone.message}</span> : ""}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Age <span className='star'>*</span></Form.Label>
                            <Form.Control
                                onChange={handleAge}
                                // value={age}
                                name='age'
                                type="number"
                                placeholder="Enter age"
                                {...register("age", {
                                    required: {
                                        value: true,
                                        message: "This is required field"
                                    },
                                    maxLength: {
                                        value: 3,
                                        message: "Age is invalid, try again"
                                    }
                                })} />
                            <div className="errorMsg" >{errors.age ? <span>{errors.age.message}</span> : ""}</div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password <span className='star'>*</span></Form.Label>
                            <Form.Control
                                onChange={handlePassword}
                                // value={password}
                                name='password'
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "This is required field"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Password must contain 8 characters"
                                    }
                                })} />
                            <div className="errorMsg" >{errors.password ? <span>{errors.password.message}</span> : ""}</div>
                        </Form.Group>

                        <Button
                            onChange={() => { handleSubmit(); }}
                            variant="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
}
export default SignUp;