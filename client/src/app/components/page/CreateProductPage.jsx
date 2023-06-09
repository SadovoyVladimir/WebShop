import React from 'react'
import CreateProductForm from '../ui/productForms/createProductForm'

export default function CreateProductPage() {
  return (
    <div className='row'>
      <div className='col-md-10 offset-md-1 shadow p-4'>
        <h1 className='mb-4'>Создание товара</h1>
        <CreateProductForm />
      </div>
    </div>
  )
}
