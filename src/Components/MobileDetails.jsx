import React, { useReducer, useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom';

const MobileDetails = () => {


 let location=useLocation();
    let path=location.pathname;
    
        useEffect(()=>{
            window.scrollTo(0,0)

        },[path])      

let exclamation=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" width={10} height={20}>
<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
let right=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 absolute">
<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
let check=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>





let btnArr=["Fair","good","superb"];
let storageArr=["6 gb / 256 gb","6 gb / 128 gb","6 gb / 512 gb"];
let imgArr=["./photos/box1.webp","./photos/mob2.webp","./photos/mob3.webp","./photos/mob4.webp","./photos/mob5.webp"];
let mobArr=["./photos/box1.webp","./photos/box2.webp","./photos/box3.webp"]
let rateArr=["₹32,800 off","₹32,800 off","₹32,800 off"];
let mixArr=[["./photos/box1.webp","./photos/mob2.webp","./photos/mob3.webp","./photos/mob4.webp","./photos/mob5.webp"],["./photos/box1.webp","./photos/box2.webp","./photos/box3.webp"]];
let btnArr2=[{img:"./photos/upi.webp",text1:"upi",text2:"-₹1941"},{img:"./photos/debit.webp",text1:"credit/debit...",text2:"-₹1941"}]

let [count,setCount]=useState(0);
let [flag,setFlag]=useState(1);
let [clr,setClr]=useState(0)
let [k,setK]=useState(0)
let [p,setP]=useState(0)


let changeImg1=(index)=>{
    setClr(index)
    setP(1)
    setK(index)
}
let changeImg2=(index)=>{
    setP(0)
    setK(index)
    console.log("hello");   


}


let reducer=(state,action)=>{
    setCount(action.type)
    if(action.type==0)
    {
        return {...state,mobType:"Fair, 6 GB / 256 GB, Deep Purple",discount:"-55%",rate:"₹62,699",lessPrice:"₹1,39,900",emi:"₹3,040",finalPrice:"₹61,499"}
    }
    else if(action.type==1)
    {
        return {...state,mobType:"Good, 6 GB / 256 GB, Deep Purple",discount:"-58%",rate:"₹65,899",lessPrice:"₹1,55,299",emi:"₹3,195",finalPrice:"₹64,699"}

    }
    else if(action.type==2)
        {
            return {...state,mobType:"Superb, 6 GB / 128 GB, Gold",discount:"-51%",rate:"₹63,999",lessPrice:"₹1,53,999",emi:"₹3,069",finalPrice:"₹62,099"}
    
        }
        else
        return state;

    
}
let [data,dispatch]=useReducer(reducer,{mobType:"Fair, 6 GB / 256 GB, Deep Purple",discount:"-55%",rate:"₹62,699",lessPrice:"₹1,39,900",emi:'₹3,040',finalPrice:"₹61,499"});

let [offer,setOffer]=useState(0);
let [lastDeal,setLastDeal]=useState(1941)

  return (
    <div className='mx-[2vw]'>
    <div className=' flex flex-col md:flex-row'>
    <div className='flex items-start flex-stretch  overflow-hidden md:w-[50%]'>  
      <div className='w-[20%] md:w-[20%] flex flex-col gap-[1rem] pr-[.7rem]  paras overflow-y-scroll h-[25rem] md:h-[34rem]'>
    {
        imgArr.map((item,index)=>{
            return (
                <div className='border rounded-md py-[1rem] cursor-pointer' onClick={()=>changeImg2(index)}>
                    <img src={item} alt="img not available" />
                </div>
            )
        })
    }

    </div>
    <div className='border w-[80%] md:w-[80%]  h-[28rem] md:h-[34rem]'>
        <button className='capitalize text-[#FFFFFF] bg-[#1b1b8b] rounded-md px-[1rem] py-[.4rem] font-bold'>13,100 off</button>
        <div className='flex justify-center items-center flex-col'>   
             <img src={mixArr[p][k]} alt="img not avaiable" className='h-[25rem] md:h-[30rem]'  />

<div className='flex bg-black font-bold gap-[2rem] px-[1rem] rounded-md items-center py-[.6rem] mx-[.2rem] md:mx-[1rem] translate-y-[-6rem]'>
    <span>
        <span className='text-[#42B7C8] text-[15px] font-bold'>32</span>
        <span className='text-[#FFFFFF] text-[11px]'>Point Quality Check</span>

    </span>
    <span>
        <span className='text-[#42B7C8] text-[15px] font-bold'>15</span>
        <span className='text-[#FFFFFF] text-[11px]'>Days Refund*</span>
    </span>
    <span>
        <span className='text-[#42B7C8] text-[15px] font-bold'>06</span>
        <span className='text-[#FFFFFF] text-[11px]'>Months Warranty</span>
    </span>
</div>
</div>
<div className=' justify-between font-bold text-[1.3rem] hidden md:flex mt-[2rem]'>
    <button className='rounded-md w-[47%] py-[.5rem] border border-black'>Add to Cart </button>
    <button className='capitalize rounded-md w-[47%] py-[.5rem] border border-black text-[#FFFFFF] bg-black'>buy now</button>
</div>
    </div>
    </div>


      <div className="md:w-[50%] px-[6px] md:pl-[4vw]  flex flex-col gap-[.6rem] items-start mt-[3rem] md:mt-0">
    <p className='font-bold text-[1.2rem]'>OnePlus Nord 2 5G - Refurbished</p>
    <p className='text-[#707070] font-medium'>Cashify Warranty,{data.mobType}</p>
    <button className='flex items-center font-bold gap-[8px] shadow-md py-[.4rem] px-[1.4rem] rounded-md max-w-[13rem]'>
        <p>4.2</p>
        <img src="./photos/star.webp" alt="img not available" className='h-[1rem]' />
        <p>| 22 reviews</p>
    </button>
    <span className='font-bold text-[2rem] flex gap-[7px] items-center'>
        <span className='text-[#FE6461]'>{data.discount}</span>
        <span>{data.rate}</span>
        <span className='text-[#707070] text-[1.2rem] line-through font-medium'>{data.lessPrice}</span>
    </span>
    <span className='flex items-center bg-[black] font-medium justify-center rounded-md py-[.3rem] text-[1.2rem] gap-[7px] max-w-[20rem]'>
        <span className='text-white'>Get it for {data.finalPrice} with</span>
        <img src="./photos/gold.webp" alt="img not available"  className='h-[1.2rem]'/>
        <span className='text-[#c28c4a] font-bold'>{exclamation}</span>
    </span>
    <span className='text-[1.2rem] flex gap-[5px]'>
        <span className='font-bold text-[1.2rem]'>{data.emi}/month</span>
        <span>EMI available.</span>
        <span className='text-[#42C8B7] capitalize'>view plans</span>
    </span>
    <p className='text-[#707070] text-[.8rem] font-medium'>Cardless and No Cost EMI Available on Credit/Debit Card</p>
    <hr className='md:mr-[3rem]' />
    <span className='capitalize flex gap-[5px] items-center'>
    <span className='font-bold text-[1.2rem]'>Condition</span>
        <span className='x text-[#42C8B7] font-medium'>learn more</span>
    </span>
    {/* <div className='flex gap-[.7rem]'>
    {
        btnArr.map((item,index)=>{
            return <button key={index} className={`font-bold capitalize rounded-md py-[.5rem] w-[6.6rem] text-[14px] border ${(count===index)?"bg-[#bffaf2] border-[#42C8B7] text-[#42C8B7]":"bg-transparent text-[#707070]"}`} onClick={()=>setCount(index)} >{item}</button>
        })
    }
        
    </div> */}
    <div className='flex gap-[.7rem]'>
    {
        btnArr.map((item,index)=>{
            return <button key={index} className={`font-bold capitalize rounded-md py-[.5rem] w-[6.6rem] text-[14px] border ${(count===index)?"bg-[#bffaf2] border-[#42C8B7] text-[#42C8B7]":"bg-transparent text-[#707070]"}`} onClick={()=>dispatch({type:index})} >{item}</button>
        })
    }
        
    </div>

    <div className='flex items-center  shadow-md rounded-md py-[.5rem] md:px-[.2rem] gap-[4px] max-w-[35rem]'>
        <img src="./photos/security.webp" alt="img not available" className='h-[2.2rem]'/>
        <p className='font-medium text-[1.1rem] flex-grow text-center'>Add additional Warranty for <span className='font-bold'>6 Months at ₹599</span></p>
        <button className='text-[white] bg-[#42C8B7] rounded-md font-bold py-[.3rem] px-[1.1rem]'>Add</button>
    </div>
    <p className='text-[1.2rem] font-bold capitalize'>storage</p>
    <div className='flex gap-[.7rem]'>
    {
        storageArr.map((item,index)=>{
            return <button key={index} className={`font-bold uppercase rounded-md py-[.5rem] w-[6.6rem] border ${(flag===index)?"bg-[#bffaf2] border-[#42C8B7] text-[#42C8B7]":"bg-transparent text-[#707070]"} text-[14px]`} onClick={()=>setFlag(index)} >{item}</button>
        })
    }
        
    </div>
    <p className='text-[1.2rem] font-bold capitalize'>Color: Space Black</p>
    <div className='flex gap-[2rem]'>
    {
        rateArr.map((item,index)=>{
            let bgColor=()=>{
                if(index==0)
                return "bg-[#42C8B7]"
                else if(index==1)
                return "bg-[#44404c]";
                else 
                return "bg-[#353331]";
            }
            return (
                <div className='flex flex-col items-center gap-[4px]'>
                <span className={`${(clr===index)? "border-[2px]":"border-none"}  rounded-full h-[4rem] w-[4rem] flex justify-center items-center border-[#43B8C7] p-[.4rem]`} onClick={()=>changeImg1(index) }>
                    <p className={` flex justify-center items-center ${bgColor()} rounded-full h-[3rem] w-[3rem] ${(index==clr)? "text-[white]":"text-transparent"} `}>{check}</p>
                </span>
                <button className='text-[10px] text-[white] font-bold bg-[#42B8C7] rounded-md py-[.3rem] px-[1rem]'>{item}</button>
                </div>

            )
        })
    }

    </div>

   

    </div> 
    </div>
    {/* ********************************************************************** */}
    <div className='bg-[#D9F4F1] mt-[2rem] border border-[#42B7C8] flex flex-col gap-[1rem] md:w-[50%] p-[.4rem] md:p-[1rem]'>
        <span className='text-[1.6rem] font-bold'>
            <span className='text-[#707070]'>Epic Deal! Get it at </span>
            <span className=''>{lastDeal}</span>
            <p className='text-[14px] text-[#707070] '>Steal the deal with 3 offers</p>
        </span>
        <div className='flex flex-col gap-[1rem] bg-gradient-to-b from-red-400 to-white px-[.2rem] md:px-[1rem] py-[.5rem] rounded-md'>
        <span className='flex justify-between'>
            <span className='flex gap-[.2rem] items-center'>
                <img src="./photos/gold2.webp" alt="img not available" className='h-[1.6rem]'/>
                <span className='font-bold text-[#707070] text-[1.2rem]'>Get extra discount with Gold</span>
            </span>
            <span className='font-bold text-[1.2rem]'>-₹1,200</span>
            </span>
            <div className='flex items-center text-[#707070] text-[1.1rem] font-medium gap-[5px] bg-[#FFFFFF] border border-[#c28c4a] rounded-md px-[.6rem] py-[.5rem]'>
                <span>Join Cashify</span>
                <img src="./photos/gold.webp" alt="img not available" className='h-[1rem]' />
                <span className='text-black'>at</span>
                <span> ₹499 for 1 Year</span>
            </div>
        </div>

        <div className='flex flex-col gap-[1rem]  bg-gradient-to-b from-blue-400 to-white border rounded-md px-[.6rem] py-[.5rem]'>
        <span className='flex justify-between'>
            <span className='flex gap-[5px] items-center'>
                <img src="./photos/sale.webp" alt="img not available"  className='h-[2rem]'/>
                <span className='font-bold text-[1.1rem]'>Sale is Live!</span>
            </span>
            <span className='font-bold text-[1.2rem]'>-₹30,700</span>
            </span>
            <span className='flex items-center gap-[.5rem]'>
                <img src="./photos/offer.webp" alt="img not available" className='h-[3rem]' />
                <span className='font-bold '>
                    <p>Weekend Price</p>
                    <p className='text-[#707070] text-[13px]'>Maximum discount applied</p>
                </span>
            </span>
        </div>

        <div className='flex flex-col gap-[1rem] bg-gradient-to-b from-green-500 to-white border rounded-md px-[.6rem] py-[.5rem]'>
        <span className='flex justify-between'>
            <span className='flex gap-[5px] items-center'>
                <img src="./photos/sale.webp" alt="img not available"  className='h-[2rem]'/>
                <span className='font-bold text-[1.1rem]'>Payment Offers</span>
            </span>
            <span className='font-bold text-[1.2rem]'>-₹1,941</span>
            </span>
            <div className='flex gap-[1rem]'>
            {
                btnArr2.map((item,index)=>{
                    return (
                        <button className={`flex rounded-md border px-[1rem] py-[.5rem] ${(offer===index)? "bg-[#D9F4F1] border border-[#42B7C8]":"bg-[#F7F7F7] border-none"}`} onClick={()=>{setOffer(index); setLastDeal(Number(data.finalPrice)-lastDeal)}}>
                    <img src={item.img} alt="img not available" className='h-[3rem]'/>
                    <span className='font-bold'>
                        <p className={`uppercase text-[11px] text-[#707070] ${(index==0)? "ml-[-3remrem]":"ml-0"}`}>{item.text1}</p>
                        <p className={`${(index==0)? "ml-[1rem]":"ml-0"}`}>{item.text2}</p>
                    </span>
                </button>
                    )
                })
            }
                {/* epic deal me Nan problem */}
            </div>

        </div>

    </div>
    </div>
        
      
  )
}

export default MobileDetails
