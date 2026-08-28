import React from 'react'
import { initialItems } from './data'
import { useState } from 'react';
import Item from './Item';
const discount_percentage = 10;

export const ShoppingCart = () => {
     const [items, setitems] = useState(initialItems);
     const [inputData, setinputData] = useState("");
     const [dis, setdis] = useState(100)
     const [disboolean, setdisboolean] = useState(true)

     function discountData()
     {
         if(inputData === 'FREE30')
         {
            setdisboolean(false)
setdis((30 / 100) * SubTotal)


         }

         else{
            alert("Invalid Voucher")
// setdis(100)

            
         }
     }


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




   const SubTotal = items.reduce((sum, item) => { return sum + (item.quantity * item.price) }, 0);
    const DeliveryFee = 100;
    const total = SubTotal - dis + DeliveryFee

    

    
  return (
   <>
   <main className="min h-screen ">
            <div className=" max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 mt-10 text-gray-900">Shopping Cart</h1>
                <div className="  flex gap-8">
                    {/* product */}
                    <div className="w-full border border-gray-300 rounded-xl p-4">
                        <div className="flex text-sm font-semibold pb-6">
                            <h2 className="flex-1">Product code</h2>
                            <h2 className="  w-[140px]">Quantity</h2>
                            <h2 className="w-[80px]">Total</h2>
                            <h2 className="w-[40px]">Action</h2>
                        </div>
                        <div>
                            {
                                items.length > 0   ? items.map(item => <Item handleItemQuantity={handleItemQuantity}  deleteItem={deleteItem}  key={item.id} item={item} />)
                                : <p>No product Available</p>
                            }
                        </div>
                    </div>

                    {/* summary */}

                   

                   <div className="w-[380px] ">
                        <div className="border border-gray-300 rounded-3xl p-6">
                            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
                            <div className="flex gap-3">
                                <input 
                                onChange={(e)=>{
           
                                    setinputData(e.target.value);
                                    
                                }}

                                type="text" placeholder="Discount Voucher" className="border rounded-full focus:outline-gray-500 px-3 border-gray-200" />
                                <button 
                                  onClick={discountData}
                                 className="border border-gray-200 px-6 py-2 rounded-full font-semibold text-sm">Apply</button>
                            </div>

                            <div className="mt-8 flex gap-3 flex-col mb-6">
                                <SummaryData label={"Sub Total"} value={SubTotal.toFixed(2)} />
                                <SummaryData label={  disboolean === true ?  "Discount (10%)" : "Discount (30%)"} value={ dis.toFixed(2) } />
                                <SummaryData label={"Delivery fee"} value={DeliveryFee} />
                                <div className="flex justify-between items-center text-sm border-t border-gray-200 pt-4 mt-3">
                                    <span className=" text-md text-gray-900 font-semibold">Total</span>
                                    <span className=" text-gray-900 text-lg font-bold">{`${total.toFixed(2)} USD`}</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 mb-6 bg-gray-50/50 p-3 rounded-xl text-xs text-gray-600">
                                <div className="shrink-0 mt-0.5 text-gray-400">
                                 ShiledIcon
                                </div>
                                <p>
                                    90 Day Limited Warranty against manufacturer's defects <a href="#" className="font-semibold underline decoration-gray-300 hover:text-black">Details</a>
                                </p>
                            </div>

                            <button 
                            
                             className="rounded-full px-6 py-3 w-full bg-gray-900 text-white text-lg font-semibold">Checkout Now</button>
                        </div>
                    </div>

                </div>

            </div>

        </main>
   
   
   
   </>
  )
}

function SummaryData({ label, value }) {
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{label}</span>
            <span className="font-semibold text-gray-900 text-md font-semibold">{`${value} USD`}</span>
        </div>
    )
}

export default ShoppingCart