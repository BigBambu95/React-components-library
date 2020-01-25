import React, { useState } from 'react';
import TextField from '../text-field';

const FormPage = () => {

    const [username, setUsername] = useState('');

    return(
        <section className="form-page">
            <div>
                <h4>Стандартное поле</h4>
                <TextField name="username" id="username" label="Имя" required />
            </div>
            <div>
                <h4>Маленькое поле</h4>
                <TextField type="password" name="password" id="password" label="Пароль" size="small" />
            </div>
            <div>
                <h4>Недоступное поле</h4>
                <TextField name="password" id="password2" label="Пароль" disabled />
            </div>
            <div>
                <h4>Контролируемое поле </h4>
                <TextField name="username" id="username2" label="Имя" onChange={((e) => setUsername(e.target.value))} value={username} required />
                <p>{username}</p>
            </div>
        </section>
    )
}


export default FormPage;