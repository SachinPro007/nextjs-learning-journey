"use client"

import { useSearchParams } from 'next/navigation'
import React from 'react'

function ProductsList() {
  const searchParam = useSearchParams()
  
  // const entries = Object.fromEntries(searchParam.entries())
  // console.log("useSearchParams", entries);
  

  const category = searchParam.get("category") || "all"
  const sort = searchParam.get("sort") || "default"
  const page = searchParam.getAll("page") || 1
  
  return (
    <div>ProductsList.... category: {category}, sort by {sort} and page number is {page}</div>
  )
}

export default ProductsList