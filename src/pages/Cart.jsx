import styled from 'styled-components';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Announcement from '../component/Announcement';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import {mobil1} from '../responsive'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import {useState} from "react";
import { useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {sumProduct} from "../redux/cartRedux"

const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobil1({padding:"5px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
${mobil1({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobil1({ flexDirection: "column" })};
  
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobil1({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  max-width: 180px;
  min-width: 80px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobil1({ margin: "1px 8px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobil1({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 15px;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart);
  const [stripeToken,setStripeToken] = useState(null);


  const history = useNavigate()
  const onToken = (token)=>{
    setStripeToken(token)
  }


  useEffect(()=>{
    const makeRequest = async ()=>{
      try{
        const res = await userRequest.post("/checkout/payment",{
          tokenId:stripeToken.id,
          amount:500,
          
        })
        history("/success",{state:{
                                    stripeData:res.data,
                                    products:cart,
                                  }})
      }catch{}
    }
    stripeToken && makeRequest()
  },[stripeToken,cart.total,history])
  
console.log(cart)

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton onClick = {()=>dispatch(sumProduct())}>EMPTY CART</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product)=>
            <Product>
            <ProductDetail>
              <Image src={product.img} />
              <Details>
                <ProductName>
                  <b>Product:</b> {product.title}
                </ProductName>
                <ProductId>
                  <b>ID:</b> {product._id}
                </ProductId>
                <ProductColor color={product.color} />
                <ProductSize>
                  <b>Size:</b> {product.size}
                </ProductSize>
                <ProductSize>
                  <b>Quantity:</b> {product.quantity}
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
            </PriceDetail>
          </Product>
            )}
            
            <Hr />
           
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
            <StripeCheckout 
              name="SumerShop"
              image="https://josezambrano.netlify.app/assets/img/iconazul.svg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}>
              
            
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
            
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart