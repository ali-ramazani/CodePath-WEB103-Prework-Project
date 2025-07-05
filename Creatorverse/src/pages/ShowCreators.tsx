import { useEffect, useState } from 'react';
import supabase from "../Client";
import type { Creator } from '../types';
import CreatorCard from '../components/CreatorCard';

export default function ShowCreators() {
    const [creators, setCreators] = useState<Creator[]>([]);

    useEffect(() => {
        async function fetchCreators() {
            const { data } = await supabase.from('creators').select('*');
            setCreators(data as Creator[]);
        }
        fetchCreators();
    }, []);

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-10">All Creators</h1>

            {creators.length === 0 ? (
                <p className="text-center text-gray-600">No creators found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {creators.map((creator) => (
                        <CreatorCard key={creator.id} creator={creator} />
                    ))}
                </div>
            )}
        </section>
    );
}