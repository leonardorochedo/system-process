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
                    <input type="text" name='name' placeholder='Digite seu nome' required />
                </div>
                <div className='item-form'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' placeholder='Digite seu e-mail' required />
                </div>
                <div className='item-form'>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name='password' placeholder='Digite sua senha' required />
                </div>
                <div className='actions actions-login'>
                    <div className='register'>
                        <p>Já tem uma conta?</p>
                        <button className='button'>Entrar</button>
                    </div>
                    <input className='button' type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
        </>
    )
}