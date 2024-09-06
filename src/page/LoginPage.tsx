import { useState } from "react";
import { login } from "../services/login/loginService";
import { useNavigate } from "react-router-dom";

interface IForm {
    user: string;
    password: string;
    region: string;
}

export const LoginPage = () => {

    const navigate = useNavigate();

    const [error, setError] = useState<boolean>(false);
    const [validCredential, setValidCredential] = useState<boolean>(true);
    const [form, setForm] = useState<IForm>({
        user: '',
        password: '',
        region: ''
    });


    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        //validacion de formulario
        if (form.user === '' || form.password === '' || form.region === '') {
            setError(true);
            return;
        }

        //validacion de credenciales
        if (login(form)) {
            navigate("/home");
        } else {
            setValidCredential(false);
        }

        //termino de validaciones
        console.log("enviar formulario");
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setError(false);
        setValidCredential(true);
        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>Esta es la pagina de login</p>
            <form>
                <input type="text" placeholder="Usuario" name="user" onChange={handleChange} value={form.user} />
                <input type="password" placeholder="Contraseña" name="password" onChange={handleChange} value={form.password} />
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
        </div>
    )
}

