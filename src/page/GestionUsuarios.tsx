import { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { addUser, UserWithId } from "../states/slices/usersSlice";
import { RootType } from "../states/store";

interface IForm {
    name: string;
    username: string;
    email: string;
}

export const GestionUsuarios = () => {

    const users: UserWithId[] = useSelector((state: RootType) => state.users);
    const dispatch = useDispatch();

    const [form, setForm] = useState<IForm>({
        name: '',
        username: '',
        email: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();


        if (form.name == '') {
            alert('El campo nombre es obligatorio');
            return;
        }
        if (form.username == '') {
            alert('El campo username es obligatorio');
            return;
        }
        if (form.email == '') {
            alert('El campo email es obligatorio');
            return;
        }

        console.log(form)
        dispatch(addUser(form));
        setForm({
            name: '',
            username: '',
            email: ''
        })
    }


    return (
        <MainLayout>
            <h3>Creacion de usuarios</h3>
            <form>
                <input type="text" name="name" placeholder="Aqui tu nombre" onChange={handleChange} value={form.name} />
                <input type="text" name="username" placeholder="Aqui tu usuario" onChange={handleChange} value={form.username} />
                <input type="email" name="email" placeholder="Aqui tu correo" onChange={handleChange} value={form.email} />
                <button type="button" onClick={handleSubmit}>Guardar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </MainLayout >
    );
}