import React from 'react'
import "./Result.css"

export default function result() {
  return (
    <div className='result'>
      <h2 className='title'>Validation</h2>
      <div>
      <table className='tableResult'>
            <thead>
                <tr>
                    <th>Object</th>
                    <th>Label</th>
                    <th>Text</th>
                    <th>Porperties</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>

      </div>
      
  )
}
