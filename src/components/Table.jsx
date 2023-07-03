import React, { useState } from 'react';
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa"



export default function Table({ head, body }) {

  const [search, setSearch] = useState('');
  const [sorting, setSorting] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value)
  }
  const filteredData = body.filter(
    items => items.some(item => item.toString().toLowerCase().includes(search.toLowerCase()))
  ).sort((a, b) => {
    if (sorting?.orderBy === 'asc') {
      return a[sorting.key].toString().localeCompare(b[sorting.key])
    }
    if (sorting?.orderBy === 'desc') {
      return b[sorting.key].toString().localeCompare(a[sorting.key])
    }
  })

 
  return (
    <>
      <div className='search-area'>
        <input value={search} onChange={onChange} type="text" placeholder='Tabloda ara' />
        {sorting && (
          <button
            onClick={() => setSorting(false)}>Sıralamayı İptal Et</button>
        )}
      </div>

      <div className='table'>
        <table>
          <thead>
            <tr className='table-title'>
              {head.map((h, key) => (
                <th
                  width={h?.width}
                  key={key}>{h.name}
                  {
                    h.sortable && (
                      <button className='button' onClick={() => {
                        if (sorting?.key === key) {
                          setSorting({
                            key,
                            orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
                          })
                        } else {
                          setSorting({
                            key,
                            orderBy: 'asc'
                          })
                        }
                      }}
                      > {sorting?.key === key && (
                        sorting.orderBy === 'asc' ? <FaSortDown size={14} /> : <FaSortUp size={14} />
                      )}
                        {sorting?.key !== key && <FaSort size={14} />}</button>
                    )
                  }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              filteredData.map((items, key) => (
                <tr className='group' key={key}>
                  {items.map((item, key) => (
                    <td className='table-item' key={key}>
                      {Array.isArray(item)
                        ? (<div className='item'>{item}</div>)
                        : item}
                    </td>
                  ))}

                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>

  )
}