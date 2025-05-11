"use client";

import { useAuthToken } from "@/shared/hooks/useAuthToken";
import {
  getAllProducts,
  createProduct,
  updateProduct,
} from "@/entities/product/api/productApi";
import { useEffect, useState } from "react";
import { Product } from "@/entities/product/model/types";
import { useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader";
import { ProductList } from "@/entities/product/ui/ProductList/ProductList";
import { ProductForm } from "@/entities/product/ui/ProductForm/ProductForm";
import { Category } from "@/entities/category/model/types";
import { Color } from "@/entities/color/model/types";

import { Size } from "@/entities/size/model/types";
import styles from "./ProductListClient.module.scss";
import { getAllCategories } from "@/entities/category/api/categoryApi";
import { getAllColors } from "@/entities/color/api/colorApi";
import { getAllSizes } from "@/entities/size/api/sizeApi";

export const ProductListClient = () => {
  const token = useAuthToken();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const router = useRouter();

  const loadData = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const [productsData, categoriesData, colorsData, sizesData] =
        await Promise.all([
          getAllProducts(token),
          getAllCategories(token),
          getAllColors(token),
          getAllSizes(token),
        ]);
      setProducts(productsData);
      setCategories(categoriesData);
      setColors(colorsData);
      setSizes(sizesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/");
      return;
    }
    loadData();
  }, [token]);

  const handleProductDeleted = (deletedProductId: number) => {
    setProducts(products.filter((product) => product.id !== deletedProductId));
  };

  const handleCreateProduct = async (formData: FormData) => {
    try {
      const newProduct = await createProduct(token!, formData);
      setProducts([...products, newProduct]);
      setIsCreating(false);
    } catch (err) {
      throw err;
    }
  };

  const handleUpdateProduct = async (formData: FormData) => {
    if (!editingProduct) return;

    try {
      const updatedProduct = await updateProduct(
        token!,
        editingProduct.id,
        formData
      );
      setProducts(
        products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
      );
      setEditingProduct(null);
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
        <button
          onClick={() => setIsCreating(true)}
          className={styles.createButton}
        >
          Создать новый продукт
        </button>
      </div>

      {isCreating && (
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          onSubmit={handleCreateProduct}
          onCancel={() => setIsCreating(false)}
        />
      )}

      {editingProduct && (
        <ProductForm
          product={editingProduct}
          categories={categories}
          colors={colors}
          sizes={sizes}
          onSubmit={handleUpdateProduct}
          onCancel={() => setEditingProduct(null)}
        />
      )}

      {!isCreating && !editingProduct && (
        <ProductList
          products={products}
          onProductDeleted={handleProductDeleted}
          onEditProduct={(product) => setEditingProduct(product)}
        />
      )}
    </>
  );
};
