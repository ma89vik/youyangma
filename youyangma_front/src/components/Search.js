
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Search = ({setCases}) => {

    const [address, setAddress] = useState('碧波路690号')
    const search_url = 'http://localhost:3001/api/yang/'

    const handleAddressChange = (event) => {
        console.log(event.target.value)
        setAddress(event.target.value)
      }

    const searchCase = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        //const promise = axios.get(search_url + address)
        const promise = axios.get(search_url)

        promise.then(response => {
          console.log(response)
          setCases(response.data)
        })


      }

    return (
        <div>
            <h2>输入查询地址</h2>
            <form onSubmit={searchCase}>
                <input  value={address}
                        onChange={handleAddressChange}/>
                <button type="submit">查询</button>
            </form>
        </div>
    )
}

export default Search