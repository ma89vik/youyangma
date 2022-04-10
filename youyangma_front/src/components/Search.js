
import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Search = ({setCases}) => {

    const [address, setAddress] = useState('')
    const [noCases, setNoCases] = useState(false)
    const search_url = 'https://fanmenrui.xyz/api/yang/'

    const handleAddressChange = (event) => {
        console.log(event.target.value)
        setAddress(event.target.value)
      }

    const searchCase = (event) => {
        event.preventDefault()

        const promise = axios.get(search_url + address)

        promise.then(response => {
          console.log(response)
          setCases(response.data)

          if (response.data.length === 0) {
            setNoCases(true);
          }
        })


      }

    return (
        <div>
            <h2>输入查询地址</h2>
            <form onSubmit={searchCase}>
                <input  value={address}
                        onChange={handleAddressChange}
                        placeholder='碧波路'/>
                <button type="submit">查询</button>
            </form>
            {noCases ? "无感染记录或未收录地址"  : ""  }
        </div>
    )
}

export default Search