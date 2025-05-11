"use client";

import { useAuthToken } from "@/shared/hooks/useAuthToken";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/entities/category/api/categoryApi";
import { useEffect, useState } from "react";
import { Category } from "@/entities/category/model/types";
import { useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader";
import { CategoryList } from "@/entities/category/ui/CategoryList/CategoryList";
import { CategoryForm } from "@/entities/category/ui/CategoryForm/CategoryForm";
import styles from "./CategoryListClient.module.scss";

export const CategoryListClient = () => {
  const token = useAuthToken();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const router = useRouter();

  const loadCategories = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const categoriesData = await getAllCategories(token);
      setCategories(categoriesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/");
      return;
    }
    loadCategories();
  }, [token]);

  const handleCategoryDeleted = (deletedCategoryId: number) => {
    setCategories(categories.filter((category) => category.id !== deletedCategoryId));
  };

  const handleCreateCategory = async (data: { name: string; parentId?: number }) => {
    try {
      const newCategory = await createCategory(token!, data.name, data.parentId);
      setCategories([...categories, newCategory]);
      setIsCreating(false);
    } catch (err) {
      throw err;
    }
  };

  const handleUpdateCategory = async (data: { name: string; parentId?: number }) => {
    if (!editingCategory) return;

    try {
      const updatedCategory = await updateCategory(
        token!,
        editingCategory.id,
        data.name,
        data.parentId
      );
      setCategories(
        categories.map((c) => (c.id === updatedCategory.id ? updatedCategory : c))
      );
      setEditingCategory(null);
    } catch (err) {
      throw err;
    }
  };

  if (!token) {
    return null;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className='adminPageTitle'>Категории</h1>
        <button
          onClick={() => setIsCreating(true)}
          className={styles.createButton}
        >
          Создать новую категорию
        </button>
      </div>

      <div className={styles.content}>
        {isCreating && (
          <CategoryForm
            categories={categories}
            onSubmit={handleCreateCategory}
            onCancel={() => setIsCreating(false)}
          />
        )}

        {editingCategory && (
          <CategoryForm
            category={editingCategory}
            categories={categories}
            onSubmit={handleUpdateCategory}
            onCancel={() => setEditingCategory(null)}
          />
        )}

        {!isCreating && !editingCategory && (
          <CategoryList
            categories={categories}
            onCategoryDeleted={handleCategoryDeleted}
            onEditCategory={(category) => setEditingCategory(category)}
          />
        )}
      </div>
    </>
  );
};