import { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch } from "react-redux";
import { addUser } from "../states/usersSlice";

interface IForm {
    name: string;
    username: string;
    email: string;
}

export const GestionUsuarios = () => {

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
        </MainLayout>
    );
}