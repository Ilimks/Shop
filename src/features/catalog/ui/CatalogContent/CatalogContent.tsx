"use client"

import { useState } from "react";
import styles from "./CatalogContent.module.scss"
import { GoodsPriorityType, GoodsSexType } from "@/features/filters/hooks/useFilterState";
import { mockProducts } from "@/mock/productMock";
import { ProductCard } from "@/entities/product/ui/ProductCard";

type Item = {
    date: any;
    price: number;
    colors: string[];
    size: string;
    country: string;
    category: string;
    sex: GoodsSexType;
}
type FitlerParams = {
    minPrice: number;
    maxPrice: number;
    color: string[];
    sizes: string[];
    priority: GoodsPriorityType;
    sex: GoodsSexType[];
    country: string[];
    categoryes: string[]; 
  }


type CatalogContentProps = {

    
    
}

export const CatalogContent = () => {


    // sort function costruction

    const [items, setItems] = useState<Item[]>()

    function sortItemsBy(items: Item[], param: string): void {

        let newItems: Item[]

        if (param === "date") {
            newItems = items.sort((a, b) => a[param] - b[param])
        } else return
        setItems(newItems)
    }


    // filter function costruction

    function filterItems(items: Item[], filters: FitlerParams) {


       

        let newItems: Item[] = items.filter(elem => filters.sizes.includes(elem.size))
        newItems = newItems.filter(elem => filters.country.includes(elem.country))
        newItems = newItems.filter(elem => filters.categoryes.includes(elem.category))
        newItems = newItems.filter(e => e.price >= filters.minPrice && e.price <= filters.maxPrice)
        newItems = newItems.filter(elem => filters.sex.includes(elem.sex))
        
        newItems = newItems.filter(elem => {
        
            for (let i = 0; i < elem.colors.length; i++) {
                if (filters.color.includes(elem.colors[i])) {
                    return true
                }
            }
            return false
        })

        setItems(newItems)

    }
    


    return  (
        <div className={styles.mainGrid}>
            {mockProducts.map(product => (
                <ProductCard key={product.id}
                    sale={product.sale}
                    colors={product.colors} sizes={product.sizes}
                    maker={product.maker}
                    image={product.image} price={product.price} 
                    title={product.title}/>
            ))}
        </div>
    )
}