import React from 'react';

import './Dashboard.css';

export function Dashboard() {
    return (
        <>
        <div className="area-dash" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
        <div className="container">
            <h1 className='title'>Dashboard de Processos</h1>
            <div className='dashboard'>
                <table>
                    <tr>
                        <td className='title'>Nome</td>
                        <td className='title'>Status</td>
                        <td className='title'>CPU</td>
                        <td className='title'>Memória</td>
                        <td className='title'>Disco</td>
                        <td className='title'>Rede</td>
                        <td className='title'>GPU</td>
                    </tr>
                    <tr>
                        <td>Linha1</td>
                        <td>Linha2</td>
                        <td>Linha3</td>
                        <td>Linha4</td>
                        <td>Linha5</td>
                        <td>Linha6</td>
                        <td>Linha7</td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}