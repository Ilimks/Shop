import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useFilterState = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<{
    minPrice: number;
    maxPrice: number;
    color: string | null;
    sizes: string[];
  }>({
    minPrice: Number(searchParams.get("minPrice")) || 0,
    maxPrice: Number(searchParams.get("maxPrice")) || 5000,
    color: searchParams.get("color") || null,
    sizes: searchParams.get("sizes")?.split(",") || [],
  });

  const setPriceRange = (min: number, max: number) => {
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  };

  const setColor = (color: string | null) => {
    setFilters((prev) => ({ ...prev, color }));
  };

  const setSizes = (sizes: string[]) => {
    setFilters((prev) => ({ ...prev, sizes }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filters.minPrice) params.set("minPrice", filters.minPrice.toString());
    if (filters.maxPrice) params.set("maxPrice", filters.maxPrice.toString());
    if (filters.color) params.set("color", filters.color);
    if (filters.sizes.length) params.set("sizes", filters.sizes.join(","));

    router.push(`?${params.toString()}`);
  };

  return { filters, setPriceRange, setColor, setSizes, applyFilters };
};