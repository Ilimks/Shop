import { useState, useMemo } from "react";
import { mockProducts } from "@/mock/productMock";

export const useSearchWithHistory = () => {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Женская пижама из льна",
    "Мужской костюм",
    "Халат"
  ]);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDelete = (item: string) => {
    setHistory(prev => prev.filter(entry => entry !== item));
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setTimeout(() => setIsFocused(false), 150);

  const filteredProducts = useMemo(() => {
    if (!value.trim()) return [];
    return mockProducts.filter(el =>
      el.title.toLowerCase().includes(value.toLowerCase())
    );
  }, [value]);

  const showHistory = isFocused && !value.trim() && history.length > 0;
  const showResults = isFocused && value.trim() && filteredProducts.length > 0;

  return {
    value,
    setValue,
    history,
    setHistory,
    isFocused,
    handleChange,
    handleDelete,
    handleFocus,
    handleBlur,
    filteredProducts,
    showHistory,
    showResults
  };
};
