import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = ['Marvel']}) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2 className='initial-title'>Gif Search</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
    
}

export default GifExpertApp;