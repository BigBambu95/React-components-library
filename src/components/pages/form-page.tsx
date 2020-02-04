import * as React from 'react';
import TextField from '../text-field';

const FormPage = (): JSX.Element => {

    const [username, setUsername] = React.useState('');

    return(
        <section className="form-page">
            <div>
                <h4>Стандартное поле</h4>
                <TextField name="username" htmlId="username" label="Имя" required />
            </div>
            <div>
                <h4>Маленькое поле</h4>
                <TextField type="password" name="password" htmlId="password" label="Пароль" size="small" />
            </div>
            <div>
                <h4>Недоступное поле</h4>
                <TextField name="password" htmlId="password2" label="Пароль" disabled />
            </div>
            <div>
                <h4>Контролируемое поле </h4>
                <TextField name="username" htmlId="username2" label="Имя" onChange={((e): void => setUsername(e.target.value))} value={username} required />
                <p>{username}</p>
            </div>
        </section>
    )
}


export default FormPage;