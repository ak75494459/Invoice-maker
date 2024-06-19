import React, { useState, useEffect } from 'react'

export default function Items({ itemList, notes }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let calculatedTotal = 0;
    itemList.forEach((item) => {
      calculatedTotal += item.price * item.quantity;
    });
    setTotal(calculatedTotal);
  }, [itemList]);
  return (

    <>
      {itemList.length > 0 && (
        <div>
          <ul className='flex  text-center mx-2'>
            <li className='ml-2 w-[40px] p-[2px] border-top-2 border-black'>S</li>
            <li className='border-t-2 border-l-2 border-black w-[25%] '>Items</li>
            <li className='border-t-2 border-l-2 border-black w-[25%] '>Quantity</li>
            <li className='border-t-2 border-l-2 border-black w-[25%] '>Price</li>
            <li className='border-t-2 border-l-2 border-black w-[25%] '>NetPrice</li>
          </ul>
          {itemList.map((item, index) => (
            <ul key={index} className='flex mx-2 text-center '>
              <li className='ml-2 w-[40px] p-[2px] border-t-2 border-black'>{index + 1}</li>
              <li className='border-t-2 border-l-2 border-black w-[25%]  overflow-hidden'>{item.item}</li>
              <li className='border-t-2 border-l-2 border-black w-[25%]  overflow-hidden'>{item.quantity}</li>
              <li className='border-t-2 border-l-2 border-black w-[25%]  overflow-hidden'>{item.price}</li>
              <li className='border-t-2 border-l-2 border-black w-[25%]  overflow-hidden'>{item.netPrice}</li>
            </ul>
          ))}
        </div>
      )}
      <div className='font-bold text-2xl m-2'>Total: {total}</div>
      <div className='text-xl m-3'><span className='font-bold'>Notes:-</span><span className='ml-2'>{notes}</span></div>
    </>
  )
}
