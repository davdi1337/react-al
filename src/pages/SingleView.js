import React, { useEffect, useContext, useState } from 'react'
import { SearchContext } from '../context/search';
import { SingleAnime } from './SingleAnime';

const SingleView = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);
    useEffect(() => {
        if(search.singleData === undefined || Object.keys(search.singleData).length === 0) {
            try {
                search.setSingle(JSON.parse(localStorage.getItem('singleData')))
                setDataExists(true)
            } catch (error) {
                console.log(error)
                setDataExists(false)
            }
        }
    }, [search])
  return (
    <div>
        {(dataExists && <SingleAnime/> || 'Data not found')}
    </div>
  )
}

export default SingleView