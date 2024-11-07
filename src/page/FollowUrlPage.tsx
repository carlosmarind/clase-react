import React, { useEffect, useState } from "react"
import { MainLayout } from "../layout/MainLayout"
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

export const FollowUrlPage = () => {

    const [findAuthenticateUrl, setFindAuthenticateUrl] = useState<{ queryLoginUrl: string, queryMethod: string }>();
    const [authenticateUrl, setAuthenticateUrl] = useState<{ queryLoginUrl: string, queryMethod: string }>();
    const [userManagementUrl, setUserManagementUrl] = useState<{ createUser: { method: string, url: string }, deleteUser: { method: string, url: string }, queryUser: { method: string, url: string }, message: string, token: string }>();
    const [users, setUsers] = useState<{ id: string, name: string, email: string }[]>();
    const [form, setForm] = useState<{ id: string, name: string, email: string }>({ id: crypto.randomUUID(), name: '', email: '' });

    const [validated, setValidated] = useState<boolean>(false);

    useEffect(() => {
        const query = async () => {
            const response = await fetch('http://localhost:3001/api');
            const json: { queryLoginUrl: string, queryMethod: string } = await response.json();
            setFindAuthenticateUrl(json);
            console.log(json);
        }
        query();
    }, [])

    useEffect(() => {
        const query = async () => {
            const response = await fetch(findAuthenticateUrl?.queryLoginUrl, { method: findAuthenticateUrl?.queryMethod });
            const json: { queryLoginUrl: string, queryMethod: string } = await response.json();
            setAuthenticateUrl(json);
            console.log(json);
        }
        if (findAuthenticateUrl) { query() }
    }, [findAuthenticateUrl])

    useEffect(() => {
        const authenticate = async () => {

            const result = await fetch(authenticateUrl?.queryLoginUrl, {
                method: authenticateUrl?.queryMethod,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ username: 'admin', password: '0192023a7bbd73250516f069df18b500' }),
            });
            const json: { message: string, createUser: { method: string, url: string }, deleteUser: { method: string, url: string }, queryUser: { method: string, url: string }, token: string } = await result.json();
            setUserManagementUrl(json);
            console.log(json);
        }
        if (authenticateUrl) { authenticate() }
    }, [authenticateUrl])

    useEffect(() => {
        const queryUsers = async () => {
            const result = await fetch(userManagementUrl?.queryUser.url, {
                method: userManagementUrl?.queryUser.method,
                headers: {
                    'Authorization': `Bearer ${userManagementUrl?.token}`
                }
            });

            const json: { id: string, name: string, email: string }[] = await result.json();
            setUsers(json);
            console.log(json);
        }
        if (userManagementUrl) { queryUsers() }
    }, [userManagementUrl, form])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (event: React.FormEvent) => {

        const htmlForm = event.currentTarget;
        event.preventDefault();

        setValidated(true);
        if (htmlForm.checkValidity() === false) {
            event.stopPropagation();
            return;
        }

        setValidated(false);
        await fetch(userManagementUrl?.createUser.url, {
            method: userManagementUrl?.createUser.method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userManagementUrl?.token}`
            },
            body: JSON.stringify(form)
        });
        setForm({ id: crypto.randomUUID(), name: '', email: '' });
    }

    const handleDelete = async (id: string) => {
        console.log('eliminando usuario:' + id);
        await fetch(userManagementUrl?.deleteUser.url, {
            method: userManagementUrl?.deleteUser.method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${userManagementUrl?.token}`
            },
            body: JSON.stringify({ id })
        });
        setForm({ ...form });
    }

    return (
        <MainLayout>
            <div>
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                    <Form.Group>
                        <Form.Label>Identificador</Form.Label>
                        <Form.Control type="text" name="id" readOnly value={form.id} />
                        <Form.Text className="text-muted">
                            Este campo es el id y  no se puede modificar
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese un nombre
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>email</Form.Label>
                        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingrese un email valido
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" size="sm" type="submit">Guardar</Button>
                </Form>
            </div>
            <div>
                <  Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users?.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button variant="primary" size="sm" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </MainLayout>
    )
}