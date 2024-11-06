import React, { useEffect, useState } from "react"
import { MainLayout } from "../layout/MainLayout"

export const FollowUrlPage = () => {

    const [findAuthenticateUrl, setFindAuthenticateUrl] = useState<{ queryLoginUrl: string, queryMethod: string }>();
    const [authenticateUrl, setAuthenticateUrl] = useState<{ queryLoginUrl: string, queryMethod: string }>();
    const [userManagementUrl, setUserManagementUrl] = useState<{ createUser: { method: string, url: string }, deleteUser: { method: string, url: string }, queryUser: { method: string, url: string }, message: string, token: string }>();
    const [users, setUsers] = useState<{ id: string, name: string, email: string }[]>();
    const [form, setForm] = useState<{ id: string, name: string, email: string }>({ id: crypto.randomUUID(), name: '', email: '' });

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
        //event.preventDefault();
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
                <form>
                    <input type="text" placeholder="id" name="id" readOnly value={form.id} />
                    <input type="text" placeholder="name" name="name" value={form.name} onChange={handleChange} />
                    <input type="text" placeholder="email" name="email" value={form.email} onChange={handleChange} />
                    <button type="button" onClick={handleSubmit}>Guardar</button>
                </form>
            </div>
            <div>
                <table>
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
                                <td><button onClick={() => handleDelete(user.id)}>Eliminar</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    )
}