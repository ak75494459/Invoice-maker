import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Tables({ itemList, handleAddItem, setItemList }) {
  const { register, handleSubmit, watch, reset } = useForm();

  const watchQuantity = watch('quantity', 0);
  const watchPrice = watch('price', 0);

  const onSubmit = (data) => {
    const newItem = {
      id: data.id || uuidv4(),
      item: data.item,
      quantity: data.quantity,
      price: data.price,
      netPrice: data.quantity * data.price
    };

    if (data.id) {

      const updatedItems = itemList.map(item => (item.id === data.id ? newItem : item));
      setItemList(updatedItems);

      reset({
        id: "",
        item: "",
        quantity: "",
        price: "",
      });
      document.getElementById('item').focus()

    } else {

      handleAddItem(newItem);
      reset()
      document.getElementById('item').focus()
    }


  };

  const calculateNetPrice = () => {
    return watchQuantity * watchPrice;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const editItem = (id) => {
    const itemToEdit = itemList.find(item => item.id === id);
    reset(itemToEdit);
  };

  const deleteItem = (id) => {
    const updatedItems = itemList.filter(item => item.id !== id);
    setItemList(updatedItems);
  };
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
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <input type="hidden" {...register('id')} />
        <div className='flex m-2 mt-[2rem] gap-4 flex-wrap'>
          <div className='flex flex-col'>
            <label htmlFor="itemName" className='font-bold ml-1'>Item Name:</label>
            <input className='bg-gray-200 text-black border-2 border-black px-2 py-2' placeholder='Enter item name' {...register('item')} type="text" name="item" id='item' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="quantity" className='font-bold ml-1'>Quantity</label>
            <input className='bg-gray-200 text-black border-2 border-black px-2 py-2' placeholder='Enter Quantity' {...register('quantity')} type="number" name="quantity" id='quantity' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="price" className='font-bold ml-1'>Price:</label>
            <input className='bg-gray-200 text-black border-2 border-black px-2 py-2' placeholder='Enter Price' {...register('price')} type="number" name="price" id='price' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="NetPrice" className='font-bold ml-1'>Net Price</label>
            <input className='bg-gray-200 text-black border-2 border-black px-2 py-2'
              type='text'
              value={calculateNetPrice()}
              readOnly
            />
          </div>
        </div>
        <input
          className='border-2 bg-blue-500 text-white hover:bg-white hover:text-blue-500 m-3 p-3 rounded cursor-pointer '
          type="submit"
          value={watch('id') ? 'Edit Item' : 'Add Item'}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </form>


      {itemList.length > 0 && (
        <div className='w-full'>
          <ul className='flex text-center bg-gray-200 text-center mx-2 '>
            <li className='ml-2 w-[40px] p-[2px] border-top-2 border-black'>S</li>
            <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] '>Items</li>
            <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] '>Quantity</li>
            <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] '>Price</li>
            <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] '>NetPrice</li>
            <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] '>Edit</li>
            <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] '>Delete</li>
          </ul>
          {itemList.map((item, index) => (
            <ul key={index} className='flex mx-2 text-center bg-gray-200 text-center '>
              <li className='ml-2 w-[40px] p-[2px] border-t-2 border-black'>{index + 1}</li>
              <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] overflow-auto'>{item.item}</li>
              <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] overflow-auto'>{item.quantity}</li>
              <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] overflow-auto'>{item.price}</li>
              <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] overflow-auto'>{item.netPrice}</li>
              <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] overflow-auto cursor-pointer flex flex-col items-center justify-center' onClick={() => editItem(item.id)}><FaEdit /></li>
              <li className='border-t-2 border-l-2 border-black w-[20%] p-[2px] overflow-auto cursor-pointer flex flex-col items-center justify-center' onClick={() => deleteItem(item.id)}><FaTrash /></li>
            </ul>
          ))}
        </div>
      )}
      <div className='font-bold text-2xl m-auto'>Total: {total}</div>

    </>
  );
}
