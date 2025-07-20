// src/entities/size/ui/SizeListClient/SizeListClient.tsx
"use client";

import { useAuthToken } from "@/shared/hooks/useAuthToken";
import {
  getAllSizes,
  createSize,
  updateSize,
  deleteSize,
} from "@/entities/size/api/sizeApi";
import { useEffect, useState } from "react";
import { Size } from "@/entities/size/model/types";
import { useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader";
import { SizeList } from "@/entities/size/ui/SizeList/SizeList";
import { SizeForm } from "@/entities/size/ui/SizeForm/SizeForm";
import styles from "./SizeListClient.module.scss";

export const SizeListClient = () => {
  const token = useAuthToken();
  const [sizes, setSizes] = useState<Size[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingSize, setEditingSize] = useState<Size | null>(null);
  const router = useRouter();

  const loadSizes = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const sizesData = await getAllSizes(token);
      setSizes(sizesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load sizes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/");
      return;
    }
    loadSizes();
  }, [token]);

  const handleSizeDeleted = (deletedSizeId: number) => {
    setSizes(sizes.filter((size) => size.id !== deletedSizeId));
  };

  const handleCreateSize = async (size: string) => {
    try {
      const newSize = await createSize(token!, size);
      setSizes([...sizes, newSize]);
      setIsCreating(false);
    } catch (err) {
      throw err;
    }
  };

  const handleUpdateSize = async (size: string) => {
    if (!editingSize) return;

    try {
      const updatedSize = await updateSize(
        token!,
        editingSize.id,
        size
      );
      setSizes(
        sizes.map((s) => (s.id === updatedSize.id ? updatedSize : s))
      );
      setEditingSize(null);
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
        <h1 className='adminPageTitle'>Размеры</h1>
        <button
          onClick={() => setIsCreating(true)}
          className={styles.createButton}
        >
          Создать новый размер
        </button>
      </div>

      <div className={styles.content}>
        {isCreating && (
          <SizeForm
            onSubmit={handleCreateSize}
            onCancel={() => setIsCreating(false)}
          />
        )}

        {editingSize && (
          <SizeForm
            size={editingSize}
            onSubmit={handleUpdateSize}
            onCancel={() => setEditingSize(null)}
          />
        )}

        {!isCreating && !editingSize && (
          <SizeList
            sizes={sizes}
            onSizeDeleted={handleSizeDeleted}
            onEditSize={(size) => setEditingSize(size)}
          />
        )}
      </div>
    </>
  );
};