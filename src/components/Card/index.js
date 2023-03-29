import React from 'react'
import styles from './Card.module.scss'




function Card({imageUrl, title, price, onPlus}) {

  const [isAdded, setIsAdded] = React.useState(false)

  const onCLickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  }
  return (
    <div className={styles.card}>
    <img width={133} height={112} src={imageUrl}/>
    <p>{title}</p>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column '>
        <p>
          Цена: 
        </p>
         <b>{price}</b>
      
      </div>
       <img className={styles.plus} onClick={onCLickPlus} alt='photo' src={isAdded ? '/img/btn-plus-checked.svg' : '/img/btn-plus.svg'}/>
      
    </div>
  </div>
  )
}

export default Card;

