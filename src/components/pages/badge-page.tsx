import * as React from 'react';

import Button from '../button';
import Badge from '../badge';
import Icon from '../icon';


const BadgePage = (): JSX.Element => {

    const [count, setCount] = React.useState(5);

    return(
        <section className="badge-page">
            <div>
                <h4>Обычный значок</h4>
                <Button size="small" variant="icon" onClick={() => setCount(count + 1)}>
                    <Icon name="envelope" />
                    <Badge value={count} />
                </Button>
            </div>
            <div>
                <h4>Круглый значок</h4>
                <Button size="small" variant="icon" onClick={() => setCount(count + 1)}>
                    <Icon name="envelope" />
                    <Badge value={count} rounded />
                </Button>
            </div>
            <div>
                <h4>Значок с текстом</h4>
                <Button size="small" variant="icon">
                    <Icon name="envelope" />
                    <Badge value="Sale" />
                </Button>
            </div>
        </section>
    )
}

export default BadgePage;