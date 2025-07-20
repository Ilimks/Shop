"use client";

import { useAuthToken } from "@/shared/hooks/useAuthToken";
import {
  getAllColors,
  createColor,
  updateColor,
  deleteColor,
} from "@/entities/color/api/colorApi";
import { useEffect, useState } from "react";
import { Color } from "@/entities/color/model/types";
import { useRouter } from "next/navigation";
import { Loader } from "@/shared/ui/Loader";
import { ColorList } from "@/entities/color/ui/ColorList/ColorList";
import { ColorForm } from "@/entities/color/ui/ColorForm/ColorForm";
import styles from "./ColorListClient.module.scss";

export const ColorListClient = () => {
  const token = useAuthToken();
  const [colors, setColors] = useState<Color[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editingColor, setEditingColor] = useState<Color | null>(null);
  const router = useRouter();

  const loadColors = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const colorsData = await getAllColors(token);
      setColors(colorsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load colors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      router.push("/");
      return;
    }
    loadColors();
  }, [token]);

  const handleColorDeleted = (deletedColorId: number) => {
    setColors(colors.filter((color) => color.id !== deletedColorId));
  };

  const handleCreateColor = async (data: Omit<Color, 'id'>) => {
    try {
      const newColor = await createColor(token!, data);
      setColors([...colors, newColor]);
      setIsCreating(false);
    } catch (err) {
      throw err;
    }
  };

  const handleUpdateColor = async (data: Omit<Color, 'id'>) => {
    if (!editingColor) return;

    try {
      const updatedColor = await updateColor(
        token!,
        editingColor.id,
        data
      );
      setColors(
        colors.map((c) => (c.id === updatedColor.id ? updatedColor : c))
      );
      setEditingColor(null);
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
        <h1 className='adminPageTitle'>Цвета</h1>
        <button
          onClick={() => setIsCreating(true)}
          className={styles.createButton}
        >
          Создать новый цвет
        </button>
      </div>

      <div className={styles.content}>
        {isCreating && (
          <ColorForm
            onSubmit={handleCreateColor}
            onCancel={() => setIsCreating(false)}
          />
        )}

        {editingColor && (
          <ColorForm
            color={editingColor}
            onSubmit={handleUpdateColor}
            onCancel={() => setEditingColor(null)}
          />
        )}

        {!isCreating && !editingColor && (
          <ColorList
            colors={colors}
            onColorDeleted={handleColorDeleted}
            onEditColor={(color) => setEditingColor(color)}
          />
        )}
      </div>
    </>
  );
};