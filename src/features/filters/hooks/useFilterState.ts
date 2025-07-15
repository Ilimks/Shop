import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';


export type GoodsPriorityType = "newest" | "cheapest" | "mostExpensive" | "mostPopular";
export type GoodsSexType = "male" | "female" | "unisex";


const availableCategories = ["Пижама", "Костюм", "Халат"];
const availableCountries = ["Китай", "Турция",];
const availableColors = ["Белый", "Черный", "Серый"];
const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', "5XL"];



export const useFilterState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname()

  const [filters, setFilters] = useState<{
    minPrice: number;
    maxPrice: number;
    color: string[];
    sizes: string[];
    priority: GoodsPriorityType;
    sex: GoodsSexType[];
    country: string[];
    categoryes: string[]; 
  }>({
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: Number(searchParams.get("maxPrice")) || 5000,
    color: availableColors,
    sizes: availableSizes,
    priority: "newest",
    sex: [ "male", "female", "unisex"],
    country: availableCountries,
    categoryes: availableCategories
  });

  const setPriceRange = (min: number, max: number) => {
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  };


  const setColor = (color: string[]) => {
    setFilters((prev) => ({ ...prev, color }));
  };

  const setSizes = (sizes: string[]) => {
    setFilters((prev) => ({ ...prev, sizes }));
  };
  

  const setPriority = (priority: GoodsPriorityType) => {
    setFilters((prev) => ({ ...prev, priority }));
  };

  const setSex = (sex: GoodsSexType[]) => {
    setFilters((prev) => ({ ...prev, sex }));

  };

  const setCountry = (country: string[]) => {
    setFilters((prev) => ({ ...prev, country }));
    
  };

  const setCategoryes = (categoryes: string[]) => {
    setFilters((prev) => ({ ...prev, categoryes }));
  };

  // const applyFilters = () => {
  //   const params = new URLSearchParams();

  //   if (filters.minPrice) params.set("minPrice", filters.minPrice.toString());
  //   if (filters.maxPrice) params.set("maxPrice", filters.maxPrice.toString());
  //   if (filters.color) params.set("color", filters.color);
  //   if (filters.sizes.length) params.set("sizes", filters.sizes.join(","));
    

  //   router.push(`?${params.toString()}`);
  // };
  
  const clearFilters = () => {

    setFilters(() => ({
      minPrice: 0,
      maxPrice: 5000,
      color: availableColors,
      sizes: availableSizes,
      priority: "newest",
      sex: [ "male", "female", "unisex"],
      country: availableCountries, 
      categoryes: availableCategories,
    }))
    router.replace(pathname)
      
  }

  return { 
    filters,
    availableCategories,
    availableColors,
    availableCountries,
    availableSizes,
    setPriceRange,
    setColor,
    setSizes,
    setPriority,
    setSex, 
    setCategoryes, 
    setCountry, 
    // applyFilters,
    clearFilters,
  };
};