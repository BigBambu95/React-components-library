import * as React from 'react';

import Image from '../image';

const ImagePage = () => {
    return(
        <section className="image-page">
            <div>
                <h4>Стандартная картинка</h4>
                <Image 
                    src="https://cdn.pixabay.com/photo/2016/02/27/06/43/cherry-tree-1225186_960_720.jpg" 
                    alt="Вишневое дерево" 
                    title="Вишневое дерево" 
                    width="300" 
                    height="auto" 
                />
            </div>
            <div>
                <h4>Не загрузилась картинка</h4>
                <Image />
            </div>
            <div>
                <h4>Не загрузилась картинка, но указан ее конкретный размер</h4>
                <Image width="500" height="250" />
            </div>
            <div>
                <h4>Круглая картинка</h4>
                <Image 
                    src="https://cdn.pixabay.com/photo/2017/06/24/02/56/art-2436545_960_720.jpg"
                    alt="Девушка"
                    title="Девушка"
                    width="100" 
                    height="100" 
                    rounded={true}
                />
            </div>
        </section>
    )
}


export default ImagePage;