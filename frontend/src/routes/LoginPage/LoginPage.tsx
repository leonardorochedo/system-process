import React from 'react';

import './LoginPage.css';

export function LoginPage() {
    return (
        <div className='container'>
            <form action="" method='POST' className='form-container'>
                <h1>Login</h1>
                <div className='item-form'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name='email' placeholder='Digite seu e-mail' />
                </div>
                <div className='item-form'>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name='password' placeholder='Digite sua senha' />
                </div>
                <div className='actions'>
                    <div className='register'>
                        <p>Não tem uma conta?</p>
                        <button className='button'>Cadastrar</button>
                    </div>
                    <input className='button' type="submit" value="Logar" />
                </div>
            </form>
        </div>
    )
}