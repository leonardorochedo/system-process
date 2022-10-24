import React from 'react';

export function RegisterPage() {
    return (
        <>
        <div className="area" >
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
        <div className='container'>
            <form action="" method='POST' className='form-container'>
                <h1>Cadastrar Usuário</h1>
                <div className='item-form'>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name='name' placeholder='Digite seu nome' />
                </div>
                <div className='item-form'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' placeholder='Digite seu e-mail' />
                </div>
                <div className='item-form'>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name='password' placeholder='Digite sua senha' />
                </div>
                <div className='actions'>
                    <input className='button' type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}