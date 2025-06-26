'use client'

import { useAppDispatch } from '@/shared/lib/redux/hooks'
import { addToCart } from '@/store/slices/cartSlice'
import { Button } from '@mui/material'
import React from 'react'

import type { Product } from '@/entities/product/model/types'

export const AddToCart: React.FC<{product: Product}> = (product) => {

  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(addToCart(product))
  }

  return (
    <Button
      onClick={handleClick}>
        В корзину
    </Button>
  )
}
