// import React from 'react';
import './MainPage.css'
const MainPage = () => {
  return (
    <div className='main__page_container'>
      <h2>DrugGEN</h2>
      <div className='input__field'>
        <p>Number of molecules to generate:</p>
        <input
          type='number'
          name='molecules'
        />
      </div>
      <button className='generate__button'>Generate</button>
      <div className='table__container'>
        <table>
          <thead>
          <tr>
            <th>Runtime (Seconds)</th>
            <th>Validity</th>
            <th>Uniqueness</th>
            <th>Novelty (Train)</th>
            <th>Novelty (Inference)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Null</td>
            <td>Null</td>
            <td>Null</td>
            <td>Null</td>
            <td>Null</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className='molecules__container'>
        <h4>SMILE notations generated:</h4>
      </div>
    </div>
  )
}

export default MainPage
