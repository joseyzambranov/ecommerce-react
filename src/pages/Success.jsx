import { Link, useLocation } from "react-router-dom";
import {useSelector} from "react-redux"
import { useState } from "react";
import { useEffect } from "react";
import {userRequest} from "../requestMethods"

const Success = () => {
    const location = useLocation()
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const currentUser = useSelector((state)=>state.user.currentUser);
    const [orderId,setOrderId] = useState(null)

    useEffect(()=>{
        const creatorOrder = async()=>{
            try{
                const res = await userRequest.post("/order",{
                    userId:currentUser._id,
                    products:cart.products.map((item)=>({
                        productId:item._id,
                        quantity:item._quantity,
                    })),
                    amount:cart.total,
                    address:data.billing_details.address,
                });
                setOrderId(res.data._id);
            }catch{}
        };
        data&&creatorOrder()
    },[cart,data,currentUser])

    return (
    < div
    style={({
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",

    })}
    >
    {orderId ? `Order has been created successfully. Your order number is ${orderId}`
             : `SuccessFull. Your order is being prepared...`}
             <Link to="/ecommerce-react">

             <button style={{
                 padding:10,
                 marginTop:20,
                 cursor:"pointer"
             }}>Go to Homepage 
             </button>
             
             </Link>
            
    </div>
    )
    };

    export default Success;