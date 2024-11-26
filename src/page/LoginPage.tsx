import { useState } from "react";
import { login } from "../services/login/loginService";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch } from "react-redux";
import { save } from "../states/slices/loggedUserSlice";

interface IForm {
    user: string;
    email: string;
    password: string;
    region: string;
    acepto: boolean;
}

export const LoginPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [error, setError] = useState<boolean>(false);
    const [validCredential, setValidCredential] = useState<boolean>(true);
    const [form, setForm] = useState<IForm>({
        user: '',
        email: '',
        password: '',
        region: '',
        acepto: false
    });


    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        //validacion de formulario
        if (form.user === '' || form.password === '' || form.region === '' || form.email === '') {
            setError(true);
            return;
        }

        //validacion de credenciales
        if (await login(form)) {
            dispatch(save({ user: form.user, region: form.region, email: form.email }))
            navigate("/home");
        } else {
            setValidCredential(false);
        }

        //termino de validaciones
        console.log("enviar formulario");
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = event.target as HTMLInputElement;
        setError(false);
        setValidCredential(true);
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    }

    return (
        <MainLayout>
            <h1>Login Page</h1>
            <p>Esta es la pagina de login</p>
            <form>
                <input type="text" placeholder="Usuario" name="user" onChange={handleChange} value={form.user} />
                <input type="emaol" placeholder="Email" name="email" onChange={handleChange} value={form.email} />
                <input type="password" placeholder="Contraseña" name="password" autoComplete="password" onChange={handleChange} value={form.password} />
                <input type="checkbox" name="acepto" onChange={handleChange} checked={form.acepto} />
                <select name="region" id="region" onChange={handleChange} value={form.region}>
                    <option value="">Seleccione...</option>
                    <option value="stgo">Santiago</option>
                    <option value="tpvr">Puerto Varas</option>
                    <option value="ptoay">Puerto Aysen</option>
                    <option value="cpo">Copiapo</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Iniciar Sesión</button>
            </form>
            {error && <div>Faltan llegar algunos campos</div>}
            {!validCredential && <div>Nombre de usuario o contraseña incorrecta</div>}
        </MainLayout>
    )
}

