import { useState } from "react";

import './Dashboard.css';

export function Dashboard() {

    const [processo1, setProcesso1] = useState({ cpu: 0, ram: 0, estado: "Na Fila" });
    const [processo2, setProcesso2] = useState({ cpu: 0, ram: 0, estado: "Parado" });
    const [processo3, setProcesso3] = useState({ cpu: 0, ram: 0, estado: "Parado" });

    setInterval(() => {
        let num = Math.random() * 10

        if (processo1.estado === "Na Fila") {
            setProcesso1({
                cpu: num,
                ram: 296,
                estado: "Em Execução"
            })
            setProcesso2({
                cpu: 0,
                ram: 0,
                estado: "Na Fila"
            })
            setProcesso3({
                cpu: 0,
                ram: 0,
                estado: "Parado"
            })
        }

        if (processo2.estado === "Na Fila") {
            setProcesso2({
                cpu: num,
                ram: 150,
                estado: "Em Execução"
            })
            setProcesso1({
                cpu: 0,
                ram: 0,
                estado: "Parado"
            })
            setProcesso3({
                cpu: 0,
                ram: 0,
                estado: "Na Fila"
            })
        }

        if (processo3.estado === "Na Fila") {
            setProcesso3({
                cpu: num,
                ram: 457,
                estado: "Em Execução"
            })
            setProcesso2({
                cpu: 0,
                ram: 0,
                estado: "Parado"
            })
            setProcesso1({
                cpu: 0,
                ram: 0,
                estado: "Na Fila"
            })
        }
    }, 7000)

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
                        <td className='title'>PID</td>
                        <td className='title'>UID</td>
                        <td className='title'>NOME</td>
                        <td className='title'>CPU</td>
                        <td className='title'>RAM</td>
                        <td className='title'>ESTADO</td>

                    </tr>
                    <tr>
                        <td>7195</td>
                        <td>1</td>
                        <td>Spotify</td>
                        <td>{processo1.cpu.toFixed(2)}%</td>
                        <td>{processo1.ram.toFixed(2)}Mb</td>
                        <td>{processo1.estado}</td>
                    </tr>
                    <tr>
                        <td>9349</td>
                        <td>1</td>
                        <td>PowerPoint</td>
                        <td>{processo2.cpu.toFixed(2)}%</td>
                        <td>{processo2.ram.toFixed(2)}Mb</td>
                        <td>{processo2.estado}</td>
                    </tr>
                    <tr>
                        <td>4642</td>
                        <td>1</td>
                        <td>Chrome</td>
                        <td>{processo3.cpu.toFixed(2)}%</td>
                        <td>{processo3.ram.toFixed(2)}Mb</td>
                        <td>{processo3.estado}</td>
                    </tr>
                    <tr>
                        <td>4983</td>
                        <td>1</td>
                        <td>Minecraft</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>6042</td>
                        <td>1</td>
                        <td>VSCode</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>7329</td>
                        <td>1</td>
                        <td>Discord</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>6190</td>
                        <td>1</td>
                        <td>Whatsapp</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>2301</td>
                        <td>1</td>
                        <td>IntelliJ</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>3241</td>
                        <td>1</td>
                        <td>MySQL</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>6538</td>
                        <td>1</td>
                        <td>MongoDB</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>1420</td>
                        <td>1</td>
                        <td>Postman</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>87659</td>
                        <td>1</td>
                        <td>Internet Explorer</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>1236</td>
                        <td>1</td>
                        <td>Notepad ++</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>8989</td>
                        <td>1</td>
                        <td>Steam</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>1111</td>
                        <td>1</td>
                        <td>Avast Antivírus</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                    <tr>
                        <td>4322</td>
                        <td>1</td>
                        <td>Java</td>
                        <td>0.00%</td>
                        <td>0.00Mb</td>
                        <td>Parado</td>
                    </tr>
                </table>
            </div>
        </div>
        </>
    )
}