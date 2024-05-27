import React from 'react'
import PriceFilter from '../general/PriceFilter'
import CategoryFilter from '../general/categoryFilter'
import ColorFilter from '../general/colorFilter'
import BrandFilter from '../general/BrandFilter'
import ProductStatusFilter from '../general/ProductStatusFilter'

const FilterSection = () => {
  return (
    <div>
        <PriceFilter/>
        <CategoryFilter/>
        <ColorFilter/>
        <BrandFilter/>
        <ProductStatusFilter/>
    </div>
  )
}

export default FilterSection