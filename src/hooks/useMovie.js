import { useContext } from 'react'
import { MovieContext } from '../contexts/MovieContext'

function useMovie () {
    const context = useContext(MovieContext)
    return context
}

export { useMovie }