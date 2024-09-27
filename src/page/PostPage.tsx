import React, { useState } from "react";
import { MainLayout } from "../layout/MainLayout"
import { PostList } from "../components/PostList";

export interface IPost {
    id?: number;
    userId: number;
    title: string;
    content: string;
    imagen?: string;
}

export const PostPage = () => {

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
        const file = event.target.files![0];
        const name = event.target.files![0].name;
        const extension = name.split('.').pop();

        switch (extension) {
            case 'jpg':
            case 'jpeg':
            case 'png':
                break;
            default:
                alert('Solo se permiten imágenes');
                setPost({ ...post, imagen: '' });
                event.target.files = null;
                return;
        }

        const size = event.target.files![0].size;
        console.log(size);
        const base64 = await convertirBase64(file);
        setPost({ ...post, imagen: base64 });
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
        setIsSubmitting(true);
        event.preventDefault();

        console.log(post);

        if (!post.userId || !post.title || !post.content) {
            alert('Todos los campos son obligatorios');
            return;
        }

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
        <MainLayout>
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
        </MainLayout >
    )
}