/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types';
import DisplayBill from '../customUi/DisplayBill';
import DisplayCoin from '../customUi/DisplayCoin';

const sample ={
    type: '',
    face:'',
    value:0, 
    quantity:0,
}

const DisplayBalance = ({items=[sample]}) => {
    return (
        <div className='grid grid-rows-8 grid-cols-2 grid-flow-row gap-2 w-8/12'>
        
        {items?.map((item, index) => (
            <Item key={index} item={item} />
          ))}
              
        </div>
      );
}

const Item = ({item=sample, index=0}) =>{


    return (
        <div key={index}>
        {item.type === 'bill'
        ?<DisplayBill 
        count={item.quantity}
        face={item.face}
        value={item.value}/>
        :<DisplayCoin 
        count={item.quantity}
        face={item.face}
        value={item.value}/>
        }
        </div>
    )

}

export default DisplayBalance

/* const itemPropTypes = PropTypes.shape({
        type: PropTypes.string,
        face:PropTypes.string,
        value:PropTypes.number, 
        quantity:PropTypes.number,
       })




Item.propTypes = {
    item:PropTypes.instanceOf(itemPropTypes),
    index:PropTypes.number
  }

//{type:'bill', face:'200', value:200, quantity:100}
DisplayBalance.propTypes ={ 
      
    items: PropTypes.arrayOf(PropTypes.instanceOf(itemPropTypes))
    
  } */