import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  supabase  from '../client';
import type { Creator } from '../types';

export default function EditCreator() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState<Creator | null>(null);

    useEffect(() => {
        async function fetchCreator() {
            const { data } = await supabase.from('creators').select('*').eq('id', id).single();
            setForm(data as Creator);
        }
        fetchCreator();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!form) return;
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form) return;
        await supabase.from('creators').update(form).eq('id', id);
        navigate('/');
    };

    const handleDelete = async () => {
        await supabase.from('creators').delete().eq('id', id);
        navigate('/');
    };

    if (!form) return <p>Loading...</p>;

    return (
        <section className="container mx-auto p-4 max-w-xl">
            <h1 className="text-2xl font-bold mb-4">Edit Creator</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input name="name" value={form.name} onChange={handleChange} required />
                <input name="url" value={form.url} onChange={handleChange} required />
                <textarea name="description" value={form.description} onChange={handleChange} required />
                <input name="imageURL" value={form.imageURL || ''} onChange={handleChange} />
                <div className="flex gap-4">
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Save</button>
                    <button type="button" onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
                </div>
            </form>
        </section>
    );
}
