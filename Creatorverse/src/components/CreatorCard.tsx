import { Link } from 'react-router-dom';
import type { Creator } from '../types';

type Props = {
    creator: Creator;
};

export default function CreatorCard({ creator }: Props) {
    return (
        <article className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 flex flex-col gap-4 h-full">
            <div className="flex flex-col sm:flex-row gap-4">
                {creator.imageURL && (
                    <img
                        src={creator.imageURL}
                        alt={creator.name}
                        className="w-full sm:w-36 h-auto rounded-md object-cover"
                    />
                )}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{creator.name}</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{creator.description}</p>
                    <a
                        href={creator.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:underline text-sm mt-1 inline-block"
                    >
                        Visit Channel ↗
                    </a>
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <Link
                    to={`/view/${creator.id}`}
                    className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                >
                    View
                </Link>
                <Link
                    to={`/edit/${creator.id}`}
                    className="px-4 py-2 text-sm rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                >
                    Edit
                </Link>
            </div>
        </article>
    );
}
