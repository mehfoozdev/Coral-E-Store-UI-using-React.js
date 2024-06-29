import React, {useEffect, useState} from 'react'
import { FaFilter } from 'react-icons/fa';

import Cards from '../../Components/Cards';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems]  = useState([]);

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');
    
    useEffect(() => {
        const fethData = async () => {
            try{
                const response = await fetch('/products.json')
                const data = await response.json();
                setProducts(data)
                setFilteredItems(data)

            } catch (error) {
                console.log('Error Fetching data')
            }
        }

        fethData();
    },[]);

    // Filtering Function
    const filterItems = (category) => {
        const filtered = category === 'all' ? (products) : products.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    // Show All products
    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory('all');
    }

    // sorting functions
    const handleSortChange = (option) => {
        setSortOption(option);

        // Logic for sorting
        let sortedItems = [...filteredItems];
        switch (option) {
            case 'A-Z' : 
                sortedItems.sort((a,b) => (a.title.localeCompare(b.title)));
                break ;
            case 'Z-A' :
                sortedItems.sort((a,b) => (b.title.localeCompare(a.title)));
                break ;
            case 'low-to-high' :
                sortedItems.sort((a,b) => a.price - b.price);
                break ;
            case 'high-to-low' :
                sortedItems.sort((a,b) => b.price - a.price);
                break ;

            default : break;
        }

        setFilteredItems(sortedItems);
    }


  return (
    <>
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28 mb-12">
            <h2 className='text-3xl font-semibold capitalize text-center my-8'>Or subscribe to the newsletter</h2>

            {/* Product Cards */}
            <div >
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8 justify-between">
                    <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        <button onClick={showAll}>All Products</button>
                        <button onClick={() => filterItems('Dress')}>Clothing</button>
                        <button onClick={() => filterItems('Hoodies')}>Hoodies</button>
                        <button onClick={() => filterItems('Bag')}>Bags</button>
                        <button onClick={() => filterItems('Shoe')}>Shoes</button>
                        <button onClick={() => filterItems('Glasses')}>Glasses</button>
                    </div>

                    <div className="flex justify-end mb-4 rounded-sm">
                        <div className="bg-gray-800 p-2">
                            <FaFilter className='text-white h-4 w-4'/>
                        </div>

                        <select id='sort'
                        onChange={(e)=> handleSortChange(e.target.value)}
                        value={sortOption}
                         className='bg-gray-800 text-white px-2 py-1 rounded-sm'>
                            <option value="Default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="low-to-high">Low to High</option>
                            <option value="high-to-low">High to Low</option>
                        </select>
                    
                    </div>
                </div>


                {/* Products */}
                <Cards filteredItems={filteredItems}/>


            </div>

        </div>
    </>
  )
}

export default Products