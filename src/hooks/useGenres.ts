import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import genres from '../data/genres'
import ms from 'ms';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => ({data: genres, isLoading: false, error:null});

const apiClient = new APIClient<Genre>('/genres');


const useGenres = () => 
    useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), // 24 hours
    initialData: genres
});

export default useGenres;
