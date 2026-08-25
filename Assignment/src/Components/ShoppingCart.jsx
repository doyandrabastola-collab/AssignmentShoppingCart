import React from 'react'
import { initialItems } from './data'
import { useState } from 'react';
import Item from './Item';
export const ShoppingCart = () => {
     const [items, setitems] = useState(initialItems);

    function handleItemQuantity(id, quantity) {
        const newItems = items.map(item => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: quantity
                }
            }

            return item
        })

        setitems(newItems)
    }

    function deleteItem(id) {
        const arrayItems = items.filter(item => item.id !== id)

        setitems(arrayItems)
    }

   

    
  return (
   <>
   <main className="min-h-screen ">
            <div className=" max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-gray-900">Shopping Cart</h1>
                <div className="flex gap-8">
                    {/* product */}
                    <div className="w-full border border-gray-300 rounded-xl p-4">
                        <div className="flex text-sm font-semibold pb-6">
                            <h2 className="flex-1">Product code</h2>
                            <h2 className="w-[120px]">Quantity</h2>
                            <h2 className="w-[80px]">Total</h2>
                            <h2 className="w-[40px]">Action</h2>
                        </div>
                        <div>
                            {
                                items.map(item => <Item handleItemQuantity={handleItemQuantity}  deleteItem={deleteItem}  key={item.id} item={item} />)
                            }
                        </div>
                    </div>

                    {/* summary */}

                   

                    <div className="w-[380px] ">

 <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
                            <div>
                                {/* discount input section */}
                            </div>

                        <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Sub Total</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Discount (10%)</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                                  <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Delivery fee</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                                  <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Total</span>
                                    <span className="font-semibold text-gray-900">100</span>
                                </div>
                    </div>

                </div>

            </div>

        </main>
   
   
   
   </>
  )
}

export default ShoppingCart