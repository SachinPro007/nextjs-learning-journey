import ProductsList from "./ProductsList"

const Products = async ({searchParams}) => {
  const searchParam = await searchParams
  console.log("searchparams", searchParam);
  
  
  const category = searchParam?.category || "all"
  const sort = searchParam?.sort || "default"
  const page = searchParam?.page || 1
  
  return(
    <div>
      <ProductsList />
      Showing {category} products, sorted by {sort}, page {page}
    </div>
  )
}

export default Products