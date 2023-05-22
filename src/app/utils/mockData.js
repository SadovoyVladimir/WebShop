import { useEffect, useState } from 'react'
import httpService from '../services/http.service'
import categories from '../mockData/categories.json'
import products from '../mockData/products.json'

export default function useMockData() {
  const statusConst = {
    idle: 'Not started',
    pending: 'In process',
    successed: 'Ready',
    error: 'Error occured'
  }
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(statusConst.idle)
  const [progress, setProgress] = useState(0)
  const [count, setCount] = useState(0)

  const summaryCount = categories.length + products.length

  const incrementCount = () => {
    setCount(prevState => ++prevState)
  }

  const updateProgress = () => {
    if (count !== 0 && status === statusConst.idle) {
      setStatus(statusConst.pending)
    }
    const newProgress = Math.floor((count / summaryCount) * 100)
    if (progress < newProgress) {
      setProgress(() => newProgress)
    }
    if (newProgress === 100) {
      setStatus(statusConst.successed)
    }
  }

  useEffect(() => {
    updateProgress()
  }, [count])

  async function initialize() {
    try {
      for (const prod of products) {
        await httpService.put('product/' + prod.id, prod)
        incrementCount()
      }
      for (const cat of categories) {
        await httpService.put('category/' + cat.id, cat)
        incrementCount()
      }
    } catch (error) {
      setError(error)
      setStatus(statusConst.error)
    }
  }

  return { error, initialize, progress, status }
}
