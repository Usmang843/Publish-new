import React, { useEffect, useState } from 'react';
import CategoriesCard from './CategoriesCard';

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {categories.map(categories => (
        <CategoriesCard key={categories.id} categories={categories} />
      ))}
    </div>
  );
};

export default CategoriesList;
