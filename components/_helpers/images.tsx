import * as React from 'react';
import Image from 'next/image'
import Svg from '@svgs/report.svg'
import img from "@imgs/img.png"


 const ExampleImagesImplementations = () => {
    return (<>
            
        <Svg/>
        <Image src={img} height={30} width={30} />
        {JSON?.stringify(require('./../../public/assets/img/cars/car.png').default)}
        <img src={require('./../../public/assets/img/cars/car.png').default.src}  />

    </>)
}

export default ExampleImagesImplementations