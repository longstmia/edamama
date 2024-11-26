import { useState } from 'react'
import './App.css'
import RecipeCard from "../src/components/RecipeCard.jsx"


export default function App() {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const appId = '3ce69532';
    const appKey = '18e7aef5c4b47b875b8ed3c8a6ba9eee';

    const fetchRecipes = async () => {
        setIsLoading(true);
        setError(null);
        const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            const data = await response.json();
            setRecipes(data.hits);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="search-area">
                <p>
                    Enter what you have eaten, like coffee and croissant or chicken enchilada to see how it works.
                    We have accurate data on tens of thousands of foods, including international dishes.
                </p>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Type one or more keywords"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={fetchRecipes}>SEARCH</button>
                </div>
                <div className="content">
                    {isLoading && <p>Loading...</p>}
                    {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                    <div id="keywordContent">
                        {recipes.map((recipeData, index) => (
                            <RecipeCard key={index} recipe={recipeData.recipe} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

