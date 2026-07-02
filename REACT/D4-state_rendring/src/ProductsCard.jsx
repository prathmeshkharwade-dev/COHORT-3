import React from 'react'

const ProductsCard = ({product , del }) => {
    

  return (
    <div className=' flex flex-col gap-2 border-2 p-4 rounded-lg'>
      <div className='w-60 h-60'>
        <img src="{product.image}" alt="" />
      </div>

        <div>
            <h2 className='font-semibold'>{product.title.substring(0, 20)}</h2>

            <p>{product.category}</p>

            <p>Price: ${product.price.toFixed(2)}</p>

        </div>
        <button onClick={() => del(product.id)} className="p-2 bg-red-600">Delete</button>
    </div>
  )
}

export default ProductsCard
