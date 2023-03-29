function Drawer({ onCloseCart, onRemove, items = [] }){
    return(
      <div className='overlay'>
    
      
        <div className='drawer'>
        <h3 className='d-flex justify-between mb-30'>Корзина <img alt="photo" onClick={onCloseCart} className='removeButton' src='/img/remove.png'/></h3>
        <div className="items">
          {
            items.map((obj) => (
              <div className='cardItem d-flex align-center'>
          
              <img alt="photo" className='mr-20' width={70} height={70}  style={obj.image}/>
              
                <div className='mr-20 '>
                <p className='mb-5'>{obj.title}</p>
                   <b>{obj.price}</b>
                </div>
      
      
               <img onClick={() => onRemove(obj.id)} className='removeButton' width={30} height={30} alt='photo' src='/img/remove.png'/>
            </div>
            ))
          }
        </div>
       

      <button className='offer'>Оформить заказ <img src='/img/Group.svg'/></button>

      </div>
      </div>
    )
}

export default Drawer;