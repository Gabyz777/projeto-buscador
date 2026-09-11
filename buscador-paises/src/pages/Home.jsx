import { useEffect, useState } from 'react';
import restCountriesApi from '../api/restcountries.js';
import { CountryCard } from './components/CountryCard';
import { useFavorites } from '../hooks/useFavorites';
import { style } from './Home.module.css';

const REGIONS = [
    { id: 'all', name: 'Todos', endpoint: '/all' },
    { id: 'africa', name: 'África', endpoint: '/africa' },
    { id: 'europa', name: 'Europa', endpoint: '/europa' },
    { id: 'asia', name: 'Ásia', endpoint: '/asia' },
    { id: 'americas', name: 'América', endpoint: '/americas' },
    { id: 'oceania', name: 'Oceania', endpoint: '/oceania' },
];

export function Home() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState(REGIONS[0]);

    const { isFavorite, toogleFavorite } = useFavorites();

    useEffect

    return (
        <div>

            .map
        </div>
    );
}
