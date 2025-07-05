import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import  supabase  from '../Client';
import type { Creator } from '../types/';

export default function ViewCreator() {
    const { id } = useParams();
    const [creator, setCreator] = useState<Creator | null>(null);

    useEffect(() => {
        async function fetchCreator() {
            const { data } = await supabase.from('creators').select('*').eq('id', id).single();
            setCreator(data as Creator);
        }
        fetchCreator();
    }, [id]);

    if (!creator) return <p>Loading...</p>;

    return (
        <section className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{creator.name}</h1>
            <p>{creator.description}</p>
            <a href={creator.url} target="_blank" className="text-blue-500 hover:underline block mt-2">
                Visit Channel ↗
            </a>
            {creator.imageURL && (
                <img src={creator.imageURL} alt={creator.name} className="mt-4 w-full max-w-md rounded" />
            )}
            <div className="mt-4 flex gap-4">
                <Link to={`/edit/${creator.id}`} className="px-4 py-2 bg-blue-600 text-white rounded">
                    Edit
                </Link>
                <Link to="/" className="px-4 py-2 bg-gray-300 rounded">Back</Link>
            </div>
        </section>
    );
}
