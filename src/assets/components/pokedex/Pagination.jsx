import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/pagination.css'
import { useDispatch } from 'react-redux'
import { setInitialId} from '../../../store/slices/initialId.slice'
const Pagination = ({ page, pagesLength,allPokemons }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)
    const pages = Number(page)
    const arrPages = []

    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock

    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
    }

    const handlePrev = () => {
        dispatch(setInitialId(pages - 1))
        navigate(`/pokedex/${pages - 1}`)
        
    }

    const handleNext = () => {

        navigate(`/pokedex/${pages + 1}`)
    }
    const handlePrevPage = () => {
        dispatch(setInitialId((currentBlock * 8) -15))
        navigate(`/pokedex/${(currentBlock * 8) -15}`)
    }

  
    const handleNextPage = () => {

        navigate(`/pokedex/${(currentBlock * 8) +1}`)
    }

    if (page > pagesLength){
        navigate(`/pokedex/${pagesLength}`)
    }
    
    const handlePage = (e) => {
        navigate(`/pokedex/${e}`)
        dispatch(setInitialId(e))
        
        
    }
    useEffect(() => {
        if(page < (Math.ceil(allPokemons?.length / 8))) {
            navigate(`/pokedex/${1}`)
        }
    }, [pagesLength])

  

    


    return (
        <div className='pagination'>
            {pages > 8 ?
                <div onClick={handlePrevPage} className='pagination-prev pagination-active'>&#60;&#60;</div> : <div className='pagination-prev pagination-inactive'>&#60;&#60;</div>
            }
            {pages > 1 ?
                <div onClick={handlePrev} className='pagination-prev pagination-active'>&#60;</div> : <div className='pagination-prev pagination-inactive'>&#60;</div> 
            }

            <ul className='pagination-container'>
                {
                    arrPages.map(e => (
                        <li onClick={() => handlePage(e)} className={`pagination-page ${pages === e && 'pagination-active'}`} key={e}>{e}</li>
                    ))
                }
            </ul>
            {pages < pagesLength ?
                <div onClick={handleNext} className='pagination-next pagination-active'>&#62;</div> : <div className='pagination-next pagination-inactive'>&#62;</div> 
            }
            {pages < pagesLength ?
                <div onClick={handleNextPage} className='pagination-prev pagination-active'>&#62;&#62;</div> :  <div className='pagination-prev pagination-inactive'>&#62;&#62;</div>
            }

        </div>
    )
}

export default Pagination