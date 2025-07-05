import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  supabase  from '../client';

export default function AddCreator() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        url: '',
        description: '',
        imageURL: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await supabase.from('creators').insert([form]);
        navigate('/');
    };

    return (
        <section className="container mx-auto p-4 max-w-xl">
            <h1 className="text-2xl font-bold mb-4">Add New Creator</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
                <input name="url" placeholder="Channel URL" value={form.url} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
                <input name="imageURL" placeholder="Image URL (optional)" value={form.imageURL} onChange={handleChange} />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded">Add Creator</button>
            </form>
        </section>
    );
}
