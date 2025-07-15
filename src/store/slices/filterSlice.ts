import { createSlice } from '@reduxjs/toolkit';
type GoodsPriorityType = "newest" | "cheapest" | "mostExpensive" | "mostPopular";
type GoodsSexType = "male" | "female" | "unisex";

export const availableCategories = ["Пижама", "Костюм", "Халат"];
export const availableCountries = ["Китай", "Турция", "Кыргызстан"];
export const availableColors = ["Green", "Yellow", "Black", "Orange", "White"];
export const availableSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', "5XL"];


interface FilterState {
      minPrice: number;
      maxPrice: number;
      color: string[];
      sizes: string[];
      priority: GoodsPriorityType;
      sex: GoodsSexType[];
      country: string[];
      categories: string[]; 
    }

const initialState: FilterState =  {
    
    minPrice: 0,
    maxPrice:5000,
    color: availableColors,
    sizes: availableSizes,
    priority: "newest",
    sex: [ "male", "female", "unisex"],
    country: availableCountries,
    categories: availableCategories
  }


const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        resetFilter: (state, action) => {
            state.minPrice = 0
            state.maxPrice= 5000
            state.color = availableColors
            state.sizes = availableSizes
            state.priority = "newest"
            state.sex = [ "male", "female", "unisex"]
            state.categories = availableCategories
            state.country = availableCountries


        },
        setPriority: (state, action) => {
            state.priority = action.payload
        },
        setPriceRange: (state, action) => {
            state.minPrice = action.payload.minPrice
            state.maxPrice = action.payload.maxPrice
        },
        setSizes: (state, action) => {
            state.sizes = action.payload
        },
        setColor: (state, action) => {
            state.color = action.payload
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        },
        setSex: (state, action) => {
            state.sex = action.payload
        }
    }
})

export const {resetFilter, setPriceRange, setPriority,
     setSizes, setColor, setCategories, setCountry, setSex} = filterSlice.actions
export default filterSlice.reducer