import React, { useState } from "react";
import fileTypeChecker from "file-type-checker";
import { PostList } from "../../components/PostList";
import { BootstrapLayout } from "../../layout/BootstrapLayout";

export interface IPost {
    id?: number;
    userId: number;
    title: string;
    content: string;
    imagen?: string;
}

export const ImageFormPage = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState<IPost>({
        userId: 0,
        title: '',
        content: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    }

    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = event.target.files![0];

            //validacion tamaño
            if (!validarTamanoFichero(file)) {
                alert("El archivo es muy grande");
                event.target.value = '';
                return;
            }

            //validacion tipo
            if (!await validarTipoFichero(file)) {
                alert("El archivo no es una imagen");
                event.target.value = '';
                return;
            }

            const base64 = await convertirBase64(file);
            setPost({ ...post, imagen: base64 });
        } catch (err) {
            console.error("Error: ", err);
            event.target.value = '';
        }
    }

    const validarTamanoFichero = (file: File) => {
        const limitSize = 1024 * 1024 * 2; // 2MB
        const fileSize = file.size;
        return fileSize <= limitSize;
    }

    const validarTipoFichero = (file: File) => {
        return new Promise<boolean>((resolve, reject) => {
            const fileReader = new FileReader();
            const types = ["jpeg", "png", "gif"];
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = () => resolve(fileTypeChecker.validateFileType(fileReader.result as ArrayBuffer, types));
            fileReader.onerror = (error) => reject(error);
        });
    }

    const convertirBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => resolve(fileReader.result as string);
            fileReader.onerror = (error) => reject(error);
        });
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!post.userId || !post.title || !post.content) {
            alert('Todos los campos son obligatorios');
            return;
        }

        setIsSubmitting(true);
        const response = await fetch('http://localhost:4000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            alert('Post creado correctamente');
        } else {
            alert('Error al crear el post');
        }
        setIsSubmitting(false);
    }

    return (
        <BootstrapLayout>
            <div>
                <form>
                    <div>
                        <label htmlFor="userId">Usuario</label>
                        <select name="userId" id="userId" value={post.userId} onChange={handleChange}>
                            <option value="">Seleccione...</option>
                            <option value="1">Pedrito</option>
                            <option value="2">Sara</option>
                            <option value="3">Jonathan</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" name="title" onChange={handleChange} value={post.title} />
                    </div>
                    <div>
                        <label htmlFor="content">Contenido</label>
                        <textarea id="content" name="content" onChange={handleChange} value={post.content}></textarea>
                    </div>
                    <div>
                        <label htmlFor="file">Fichero</label>
                        <input accept="image/*" type="file" id="file" name="file" onChange={handleFileUpload} />
                    </div>
                    <div>
                        <button type="button" disabled={isSubmitting} onClick={handleSubmit}>Enviar</button>
                    </div>
                </form>
            </div>
            <PostList />
        </BootstrapLayout >
    )
}