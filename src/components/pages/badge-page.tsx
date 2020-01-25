import * as React from 'react';

import Button from '../button';
import SvgIcon from '../svg-icon';
import MessageIcon from '../../icons/message.svg';
import Badge from '../badge';

const BadgePage = () => {

    const [count, setCount] = React.useState(5);

    return(
        <section className="badge-page">
            <div>
                <h4>Обычный значок</h4>
                <Button size="small" variant="icon" onClick={() => setCount(count + 1)}>
                    <SvgIcon Component={MessageIcon} width="32" height="28" viewBox="0 0 24 24" />
                    <Badge value={count} />
                </Button>
            </div>
            <div>
                <h4>Круглый значок</h4>
                <Button size="small" variant="icon" onClick={() => setCount(count + 1)}>
                    <SvgIcon Component={MessageIcon} width="32" height="28" viewBox="0 0 24 24" />
                    <Badge value={count} rounded />
                </Button>
            </div>
            <div>
                <h4>Значок с текстом</h4>
                <Button size="small" variant="icon">
                    <SvgIcon Component={MessageIcon} width="32" height="28" viewBox="0 0 24 24" />
                    <Badge value="Sale" />
                </Button>
            </div>
        </section>
    )
}

export default BadgePage;