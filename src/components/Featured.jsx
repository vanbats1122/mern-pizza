import React, { useState } from 'react'
import styles from '../styles/Featured.module.css'
import Image from 'next/image'

const Featured = () => {

    const [index, setIndex ] = useState(0)

    const handleArrow = (direction) => {
        if(direction === "l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction === "r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
    const images = [
        "/image/featured.png",
        "/image/featured2.png",
        "/image/featured3.png",
    ];
  return (
    <div className={styles.container}>
        <div 
            className={styles.arrowContainer} 
            style={{left:0}}
            onClick={() => handleArrow("l")}
        >
        <Image src='/image/arrowl.png' alt='' fill='true' style={{objectFit:"contain"}}/>
        </div>
        <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
            
                {images.map((img, i) => (
                    <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt='' fill='true' style={{objectFit:"cover"}} />
                    </div>
                ))}
        </div>
        <div 
            className={styles.arrowContainer} 
            style={{right:0}}
            onClick={() => handleArrow("r")}
        >
        <Image src='/image/arrowr.png' fill='true' alt='' style={{objectFit:"contain"}} />
        </div>
    </div>
  )
}

export default Featured