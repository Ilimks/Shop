"use client"

import React, { useEffect } from "react";
import styles from "./CatalogContent.module.scss"
import { ProductCard } from "@/entities/product/ui/ProductCard";
import type { IProductCard } from "@/shared/types/types";
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux/hooks";
import { mockProducts } from "@/mock/productMock";
import { setCardCounter } from "@/store/slices/cardCounterSlice";
import aplySale from "@/shared/functions/aplySale";




export const CatalogContent = () => {

    const dispatch = useAppDispatch()

    const filter = useAppSelector(state => state.filter)


    function aplyFilters(allProducts: IProductCard[]): IProductCard[] {

        let items = allProducts.filter(el => aplySale(el.price, el.sale) >= filter.minPrice)
        items = items.filter(el => aplySale(el.price, el.sale) <= filter.maxPrice)
        items = items.filter(el => filter.sex.includes(el.sex))
        items = items.filter(el => filter.country.includes(el.country))
        items = items.filter(el => filter.categories.includes(el.category))
        items = items.filter(el => {
            for (let i = 0; i < el.sizes.length; i++) {
                if (filter.sizes.includes(el.sizes[i])) {
                    return true
                }
            }
        })
        items = items.filter(el => {
            for (let i = 0; i < el.colors.length; i++) {
                if (filter.color.includes(el.colors[i])) {
                    return true
                }
            }
        })
        return items
    }

    const items = aplyFilters(mockProducts)

    useEffect(() => {
        dispatch(setCardCounter(items.length))
    }, [items])
    




    return  (
        <div className={styles.mainGrid}>
            {items.map(product => (
                <ProductCard key={product.id}
                    sale={product.sale}
                    colors={product.colors} sizes={product.sizes}
                    image={product.image} price={product.price} 
                    title={product.title}
                    country={product.country}
                    category={product.category}
                    description={product.description}
                    sex={product.sex}
                    />
            ))}
        </div>
    )
}