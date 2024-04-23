function Basket({ orderList, clearOrderList, removeItem }) {
    const calculateThetotalPrice = () => {
        let totalPrice = 0;
        orderList.forEach((order => {
            const price = parseFloat(order.price);
            totalPrice += price;
        }));
        return totalPrice.toFixed(2);
    }

    return (
        <div className='basket_container'>
            <div>
                <h1>Order list: { orderList.length }</h1>
            </div>
            <ul>
                {orderList.map((order, index) => (
                    <li key={ index } className='container'>
                        <div>
                            <h2>{ order.name }</h2>
                            <h3>${ order.price }</h3>
                        </div>
                        <div>
                            <button onClick={() => removeItem(order.id)} className='btn_basket btn'>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className='total'>
                <h2>Total price: ${ calculateThetotalPrice() }</h2>
            </div>
            <div className='container__btn_basket'>
                <button onClick={() => clearOrderList()} className='btn_basket btn'>Delete all</button>
            </div>
        </div>
    )
}

export default Basket;