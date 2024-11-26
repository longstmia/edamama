export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.label} />
            <div className="recipe-info">
                <h2>{recipe.label}</h2>
                <p>Диета: {recipe.dietLabels.join(', ') || 'Нет специальных диетиет'}</p>
                <p>{recipe.healthLabels.join(', ') || 'Нет специальных меток для здоровья'}</p>
                <p>Калории: {Math.round(recipe.calories)} ккал</p>
                <p>Порции: {recipe.yield}</p>
                <div className="nutrients">
                    <p>
                        <span style={{ color: 'green' }}>БЕЛКИ</span>{' '}
                        {Math.round(recipe.totalNutrients?.PROCNT?.quantity || 0)} г
                    </p>
                    <p>
                        <span style={{ color: 'red' }}>ЖИРЫ</span>{' '}
                        {Math.round(recipe.totalNutrients?.FAT?.quantity || 0)} г
                    </p>
                    <p>
                        <span style={{ color: 'orange' }}>УГЛЕВОДЫ</span>{' '}
                        {Math.round(recipe.totalNutrients?.CHOCDF?.quantity || 0)} г
                    </p>
                </div>
            </div>
        </div>
    );
}
