import React, { useEffect } from 'react'
import Marquee from 'react-marquee-slider';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import paras from '../Assets/Star-x-2.webp'


const Stores = () => {

  let storeArr=[{dist:"gurgaon",heading:"Cashify Buy, Sell and Repair Mobile Store Sushant Lok",address:"GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon",time:"Time : 10:00 AM-9:00 pm",details:"view details ->"},{dist:"gurgaon",heading:"Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon",address:"Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",time:"Time : 10:00 AM-9:00 pm",details:"view details ->"},{dist:"gurgaon",heading:"Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon",address:"Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",time:"Time : 10:00 AM-9:00 pm",details:"view details ->"},{dist:"gurgaon",heading:"Cashify Buy, Sell and Repair Mobile Store Sec 14 Gurgaon",address:"MG Road Metro, Exit Gate no 2, M.G. Road Gurgaon",time:"Time : 10:00 AM-9:00 pm",details:"view details ->"}];

  let reviewArr=[{img1:"/photos/double quotes.webp",review:"Sold off my phone very easily and got the payment on the spot. Best experience so far.",img2:"/photos/aryan2.jpeg",name1:"Aryan Singh Rajput",address:"Rajasthan"},{img1:"/photos/double quotes.webp",review:"Well trained staff. Overall a posFitive experience in selling my phone at Cashify.",img2:"/photos/aryan2.jpeg",name1:"Karan Sharma",address:"Delhi NCR"},{img1:"/photos/double quotes.webp",review:"No complaints, sold my phone very easily here. Definitely worth a try.",img2:"/photos/aryan2.jpeg",name1:"Paras Panwar",address:"Hisar"},{img1:"/photos/double quotes.webp",review:"Payment was very instant and the whole process was quick. Will recommend it.",img2:"/photos/aryan2.jpeg",name1:"Piyush Mehta",address:"Hansi"},{img1:"/photos/double quotes.webp",review:"Sold off my phone very easily and got the payment on the spot. Best experience so far.",img2:"/photos/aryan2.jpeg",name1:"Mohit Dua",address:"Sirsa"},{img1:"/photos/double quotes.webp",review:"Well trained staff. Overall a positive experience in selling my phone at Cashify.",img2:"/photos/aryan2.jpeg",name1:"Aryan Singh",address:"New Delhi"},{img1:"/photos/double quotes.webp",review:"No complaints, sold my phone very easily here. Definitely worth a try.",img2:"/photos/aryan2.jpeg",name1:"Aryan Singh",address:"New Delhi"},{img1:"/photos/double quotes.webp",review:"Payment was very instant and the whole process was quick. Will recommend it.",img2:"/photos/aryan2.jpeg",name1:"Aryan Singh",address:"New Delhi"}]
let imgArr=["/photos/amazone.webp","/photos/vivo.webp","/photos/samsung.webp","/photos/run1.webp","/photos/realme.webp","/photos/oppo.webp","/photos/mi.webp","/photos/vijay.webp","/photos/reliance.webp","/photos/hp.webp","/photos/paytm.webp","/photos/nokia.webp","/photos/oneplush.webp","/photos/dell.webp",];

let img2Arr=[{img1:"/photos/mobile9.webp",text1:"How Can You Upgrade To Google Pix... "},{img1:"/photos/mobile10.webp",text1:"The Best Way To Buy Refurbished..."},{img1:"/photos/mobile11.webp",text1:"The Best Time To Get Refurbished..."},{img1:"/photos/mobile12.webp",text1:"Huge Price Drop On Refurbished..."},{img1:"/photos/mobile13.webp",text1:"Refurbished OPPO Find N2 Flip.Join Th..."}];

let img3Arr=[{img1:"/photos/ph1.webp",text:"3 Google Phones with best resale value..."},{img1:"/photos/ph2.webp",text:"Top 3 Fordable Phone with Best Resale..."},{img1:"/photos/ph3.webp",text:"5 Red Flages to Watch Out When Searchi..."},{img1:"/photos/ph4.webp",text:"3 SmartPhones Alternative for Google..."},{img1:"/photos/ph5.webp",text:"How to Sell Oneplus 12 for Maximum..."}];

let dealsArr=["/photos/ph6.webp","/photos/ph7.webp","/photos/ph8.webp","/photos/ph9.webp",];

let btnArr=["Phones","Laptops","Watches"];

let mobileArr=[[{text1:"28,400 OFF",img1:"/photos/phone1.webp",text2:"Apple iphone 12-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-55%",text6:"31,099",text7:"55,499",text8:"effective price",text9:"26,316"},
    {text1:"21,000 OFF",img1:"/photos/mobile5.webp",text2:"Apple iphone 11-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(365)",text4:"apple Bumper Sale",text5:"-53%",text6:"18,499",text7:"39,499",text8:"effective price",text9:"17,944"},{text1:"32,400 OFF",img1:"/photos/mobile6.webp",text2:"Apple iphone 13-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(239)",text4:"apple Bumper Sale",text5:"-50%",text6:"46,099",text7:"70,499",text8:"effective price",text9:"20,316"},{text1:"48,400 OFF",img1:"/photos/mobile7.webp",text2:"Apple iphone 12-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-47%",text6:"26,099",text7:"58,499",text8:"effective price",text9:"28,316"},{text1:"28,400 OFF",img1:"/photos/mobile8.webp",text2:"Apple iphone 12-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-49%",text6:"25,099",text7:"52,499",text8:"effective price",text9:"30,316"},{text1:"28,400 OFF",img1:"/photos/ip1.webp",text2:"Apple iphone 17-Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"apple Bumper Sale",text5:"-51%",text6:"29,099",text7:"60,499",text8:"effective price",text9:"24,316"}],[{text1:"28,400 OFF",img1:"/photos/lap10.webp",text2:"MacBook Pro 2023 A2779 (Apple M2 Pro Chip 14 Inch)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Limited time Sale",text5:"-55%",text6:"31,099",text7:"55,499",text8:"effective price",text9:"26,316"},
    {text1:"21,000 OFF",img1:"/photos/lap3.webp",text2:"MacBook Pro 2021 a2442 (Apple M1 Pro Chip 14 Inch)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(365)",text4:"Limited time Sale",text5:"-53%",text6:"18,499",text7:"39,499",text8:"effective price",text9:"17,944"},{text1:"32,400 OFF",img1:"/photos/lap11.webp",text2:"MacBook Pro 2019 (Touch Bar, Four Thunderbolt 3 ports) A1990 (Intel Core i9",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(239)",text4:"Limited time Sale",text5:"-50%",text6:"46,099",text7:"70,499",text8:"effective price",text9:"20,316"},{text1:"48,400 OFF",img1:"/photos/lap12.webp",text2:"MacBook Air 2024 A3113 (Apple M3 Chip 13.3 Inch)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Limited time Sale",text5:"-47%",text6:"26,099",text7:"58,499",text8:"effective price",text9:"28,316"},{text1:"28,400 OFF",img1:"/photos/lap13.webp",text2:"MacBook Pro 2020 A2338 (Apple M1 Chip 13.3 Inch)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Limited time Sale",text5:"-49%",text6:"25,099",text7:"52,499",text8:"effective price",text9:"30,316"},{text1:"28,400 OFF",img1:"/photos/lap14.webp",text2:"Apple MacBook Pro 2020 Touch Bar, Four Thunderbolt 3 ports (13'' Intel Core",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Limited time Sale",text5:"-51%",text6:"29,099",text7:"60,499",text8:"effective price",text9:"24,316"}],[{text1:"28,400 OFF",img1:"/photos/watch8.webp",text2:"Apple Watch Series 5 (40mm, GPS+Cellular)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Lowest Price",text5:"-55%",text6:"31,099",text7:"55,499",text8:"effective price",text9:"26,316"},
    {text1:"21,000 OFF",img1:"/photos/watch9.webp",text2:"Apple Watch Series 5 (44mm, GPS+Cellular)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(365)",text4:"Lowest Price",text5:"-53%",text6:"18,499",text7:"39,499",text8:"effective price",text9:"17,944"},{text1:"32,400 OFF",img1:"/photos/watch3.webp",text2:"Apple Watch SE - 1st Gen (40mm, GPS Only)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(239)",text4:"Lowest Price",text5:"-50%",text6:"46,099",text7:"70,499",text8:"effective price",text9:"20,316"},{text1:"48,400 OFF",img1:"/photos/watch10.webp",text2:"MacBook Air 2024 A3113 (Apple M3 Chip 13.3 Inch)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Lowest Price",text5:"-47%",text6:"26,099",text7:"58,499",text8:"effective price",text9:"28,316"},{text1:"28,400 OFF",img1:"/photos/watch5.webp",text2:"MacBook Pro 2020 A2338 (Apple M1 Chip 13.3 Inch)- Refurbished",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Lowest Price",text5:"-49%",text6:"25,099",text7:"52,499",text8:"effective price",text9:"30,316"},{text1:"28,400 OFF",img1:"/photos/watch11.webp",text2:"Apple MacBook Pro 2020 Touch Bar, Four Thunderbolt 3 ports (13'' Intel Core",img2:["/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp","/photos/star.webp"],text3:"(199)",text4:"Lowest Price",text5:"-51%",text6:"29,099",text7:"60,499",text8:"effective price",text9:"24,316"}]];

    let icon2= <svg class="h-6 w-5 text-black-500 inline "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6" />  <line x1="7" y1="10" x2="18" y2="10" /></svg>;


let [velocity,setVelocity]=useState(5);
let updateVelocity=()=>{
  if(window.innerWidth<650)
   return setVelocity(10);
  else
  return setVelocity(50);
}

useEffect(()=>{
updateVelocity();
},[])

let [count,setCount]=useState(0)
let change=(index)=>{
  setCount(index);

}

  return (
    <div className='mt-[2rem] mx-[2vw] xl:mt-[3rem]'>
        <div className='flex justify-between items-center'>
            <div><p className='capitalize text-[2.3vh] font-bold xl:text-[4.1vh]'>our exclusive stores</p></div>
            <div>
            <Link to={"/details"}>
            <p className='text-[#42C8B7] text-[2vh] medium xl:text-[2.6vh]'>View all stores</p>
            </Link>
            </div>
        </div>
        {/* ******************* */}
      <div className='flex pt-[1rem]'>
        <div className='flex'>
        <img src="/photos/location.webp" alt="img not available" className='h-[3vh] xl:h-[5vh] ' />
            <p className='capitalize text-[1.5vh] pt-[.1rem] pl-[.4rem] xl:text-[3vh] xl:font-medium'>200+ experience centers</p>
            </div>
        <div className='flex ml-[6vw] xl:pt-[.8vh]'>
        <img src="/photos/Star3.jpg" alt="img not available"  className='h-[2.6vh] xl:h-[4vh]' />
            <p className='capitalize text-[1.5vh] pt-[.1rem] pl-[.5rem] xl:text-[3vh] xl:font-medium xl:pt-[0]'>4.5+ star ratings</p>
        </div>
      </div>
      {/* **************** */}
      <div className='bg-[rgba(247,247,247,1)] py-[1rem] flex px-[1rem] mt-[1rem]'>
        <div className=' w-[100%] sm:w-[25rem]'>
          <input type="text" placeholder='enter pincode' className='h-[3rem] rounded-lg placeholder:capitalize pl-[1rem] font-medium shadow-sm shadow-[rgba(247,247,247,1)] w-[100%]'/>
        </div>

      
        <p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full  transform absolute ml-[-2.9rem] sm:ml-[-3.9rem]  mt-[.2rem]"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 

  </div>
      {/* **************************************************************************** */}
      <div className='bg-[rgba(247,247,247,1)] pl-[1rem] flex  overflow-x-scroll paras pb-[4rem]'>
           {
            storeArr.map((item,index)=>{
              let margin=()=>{
                if(index!==0)
                  return "ml-[1rem]"
              }
              let marginTop=()=>"mt-[.3rem]"
              
              return (
                <div className={`bg-[white] rounded-lg p-6 w-[17rem] pr-2 pb-[0] flex-shrink-0 ${margin()}  xl:pr-[1vw] xl:w-[22rem] `} key={index}>
                <Link to={"/details"}>
                  <button className={`uppercase text-[#fcfbfb] font-bold py-[1vh] px-[3.5vw] rounded-lg bg-[#f70399] text-[1.5vh] xl:text-[2vh] xl:py-[1.3vh]`}>{item.dist}</button>
                  <p className={`font-bold text-[1.5vh] ${marginTop()} xl:text-[2.4vh]`}>{item.heading}</p>
                  <p className={`text-[#5a5959] text-[1.3vh] font-bold ${marginTop()} xl:text-[2vh] `}>{item.address}</p>
                  <p className={`text-[#5a5959] text-[1.3vh] font-bold ${marginTop()} xl:text-[2vh]`}>{item.time}</p>
                  <p className={`text-[#42C8B7] font-bold ${marginTop()} xl:text-[3vh]`}>{item.details}</p>
                  </Link>

                </div>
              )
            })
           }
      </div>
      {/* *************************************** */}
      <div className='bg-[#0f0f0f] sm:flex sm:justify-around sm:pr-[3rem] pt-[3rem]'>
        <div className=' pr-[1rem] pl-[1rem] sm:w-[48rem]'>
          <p className='text-white text-[23px] font-bold md:text-[2rem]'>Trusted by 121.04 Lac + Happy Users and Major Brands since 2015</p>
        </div>


        <div className='flex'>
        <button className='bg-gradient-to-t from-[#161616] to-[#737375] rounded-lg w-[8rem] pb-[1.5rem] ml-[1rem] '>
<p><svg class="h-7 w-7 sm:h-11 sm:w-11  text-white "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg></p>
<p className='text-[#42C8B7] font-bold text-[20px] text-start pl-[2px]'>9078.08Cr.</p>
<p className='text-white font-bold text-[13px] text-start pl-[3px]'>Cash Given</p>
</button>




<button className='bg-gradient-to-t from-[#161616] to-[#737375] rounded-lg ml-[10px] w-[8rem] pb-[1.5rem] '>
<p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7 text-white sm:size-10">
  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
  <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
</svg>
</p>
<p className='text-[#42C8B7] font-bold text-[20px] text-start pl-[2px]'>134.49Lac</p>
<p className='text-white font-bold text-[13px] text-start pl-[3px]'>Gadgets Encashed</p>
</button>          
        </div>

      </div>
      {/* ********************************************************* */}

      <div className='flex'>
      <p className='absolute mt-[10rem]'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 sm:size-12 bg-white rounded-full  ">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</svg>
</p>

<div className='bg-[#0f0f0f] flex overflow-x-scroll paras gap-[1.2rem] pl-[2px] pt-[4rem] pb-[3rem]'>
        {
          reviewArr.map((item,index)=>{
            return (
              <div className='bg-[#ffffff] w-[17rem] sm:w-[20rem] rounded-2xl px-[1rem] flex-shrink-0 pb-[2rem]' key={index}>
                <img src={item.img1} alt="img not available" className='h-[2rem]' />
                <p className='font-bold text-[12px] sm:text-[15px] mt-[1.5rem] h-[6rem] sm:h-[8rem]'>{item.review}</p>

                <div className='flex '>
                <img src={item.img2} alt="img not available" className='rounded-full h-[3.5rem]' />
                <p className='font-extrabold pl-[7px] mt-[6px]'>{item.name1}
                <p className='text-[#979797] text-[14px] mt-[.1rem]'>{item.address}</p></p>
                </div>

              </div>
            )
          })
        }

      </div>
     
 <p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full  transform absolute ml-[-2.4rem] sm:ml-[-3.4rem]  mt-[10rem] sm:size-12"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 
</div>
{/* ********************************************************************************** */}
{/* slide images */}
{/* let [velocity,setVelocity]=useState(0); */}
<div className='bg-[#42C8B7] overflow-x-scroll flex py-[.3rem] sm:py-[1rem] paras '>
  <Marquee velocity={`${velocity}`}>
  {
    imgArr.map((item,index)=>{
      return <img src={item} key={index} alt="img not available" className='inline h-[5vh] ml-[5rem]  object-cover'/>
    })
  }
  </Marquee>
</div>
{/* ***************************************************************************** */}
<div className=''>
<p className=' mt-[3rem] text-[20px] font-bold md:text-[22px] xl:text-[25px] '>Explore Refurbished Devices</p>
<div className='border-b'>
{
  btnArr.map((item,index)=>{
    return <button key={index} className={`text-[#707070] font-medium px-[1rem] border-b-[3px] sm:text-[1.5rem] sm:px-[4rem]  ${index===count? "border-[#42C8B7]":"border-transparent"}` }onClick={()=>change(index)}>{item}</button>
  })
}
</div>
<div className='flex'>
<p className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10  bg-white rounded-full sm:size-12 absolute mt-[11rem] z-[1] ">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</svg>
</p>

<div className=' flex overflow-x-scroll mt-[1.5rem] gap-[2rem] paras  '>
  {
    mobileArr[count].map((item,index)=>{
      return (
        <Link to={"/details"} key={index}>
        <div className=' rounded-xl w-[13rem] flex-shrink-0  overflow-hidden sm:w-[16rem] border'>
          <button className='flex text-[10px] font-extrabold bg-[#F4B146] py-[1vh] px-[2vw] rounded-br-[1.5rem]  transform sm:py-[1.5vh] sm:text-[13px]'>{item.text1}</button>
          <img src={item.img1} alt="img not available" className='h-[19vh] ml-[4vw] mt-[-2vh] sm:h-[22vh]' />
          <p className='font-extrabold text-[2.2vh] line-clamp-2'>{item.text2}</p>
          {
                        item.img2.map((item,index)=>{
                            return <img src={item} key={index} alt="img not available" className='inline-block h-[2vh] mt-[1vh] sm:h-[2.5vh]'  />
                        })
                    }
          <p className='inline-block transform translate-y-[.7vh] ml-[3vw] text-[#747070] font-bold sm:ml-[1vw]'>{item.text3}</p>
          <button className=' block capitalize bg-[#1D3D93] text-white font-bold px-[3vw] py-[1vh] rounded-lg mt-[2vh] text-[1.5vh] mb-[2vh] sm:text-[2vh] sm:px-[1.5vw] sm:py-[.7vh]'>{item.text4}</button>
          <p className=' text-[#FE6461] font-bold inline sm:text-[3vh]'>{item.text5}</p>
          <p className='inline-block ml-[1vw] transform translate-y-[-.3vh] sm:ml-[.4vw]'>{icon2}</p>
          <p className='inline-block font-bold  sm:text-[3vh]'>{item.text6}</p>
          <p className='inline-block font-bold ml-[1.3vw] text-[#7c7b7b] line-through mb-[1vh] xl:text-[3vh] xl:ml-[.5vw]'>{item.text7}</p> <br />
          <p className='capitalize inline-block text-[1.8vh] text-[#858484] sm:text-[2vh] sm:font-medium'>{item.text8}</p>
          <p className='inline-block ml-[.5vw] transform translate-y-[-.3vh]'>{icon2}</p>
          <p className='inline-block font-bold xl:text-[3vh] '>{item.text9}</p>
        </div>
          </Link>
      )
    })
  }
</div>
<p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full  transform absolute ml-[-2.4rem] sm:ml-[-3.4rem]  mt-[11rem] sm:size-12"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 

</div>

</div>
{/* ******************************************************************************* */}
        <div className='mt-[2rem] flex justify-between'>
          <div>
          <p className='font-bold text-[15px] sm:text-[1.3rem]'>Better For Pocket. Buy Refurbished</p></div>
          <div>
          <button className='text-[#42C8B7] text-end '>See All</button>
          </div>
          
        </div>

    <div className='flex'>
    <p className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10  bg-white rounded-full sm:size-12 absolute mt-[4.3rem] z-[1] ">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</svg>
</p>
        <div className='overflow-x-scroll flex gap-[2rem] paras mt-[1.3rem]'>
          {
            img2Arr.map((item,index)=>{
              return (
                <div className='flex flex-col flex-shrink-0 ' key={index}>
                <Link to={"/details"}>
                  <img src={item.img1} alt="img not available" className='w-[18rem] sm:w-[20rem] h-[8.9rem] sm:h-[11rem] rounded-md filter brightness-50'/>
                  <p className='font-extrabold text-[14px] text-[white] ml-[.7rem] transform translate-y-[-1.3rem]'>{item.text1}</p>
                </Link>
                </div>
              )
            })
          }
        </div>
    <p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full  transform absolute ml-[-2.4rem] sm:ml-[-3.4rem]  mt-[4.3rem] sm:size-12"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 
</div>
        {/* ****************************************************************** */}
      
        <div>
        <div className=' flex justify-between'>
          <div>
          <p className='font-bold text-[15px] sm:text-[1.3rem] capitalize'>be smart. sell smart</p></div>
          <div>
          <button className='text-[#42C8B7] text-end '>See All</button>
          </div>
          
        </div>
<div className='flex'>
<p className=''><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10  bg-white rounded-full sm:size-12 absolute mt-[4.3rem] z-[1] ">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clip-rule="evenodd" />
</svg>
</p>
        <div className='overflow-x-scroll flex gap-[2rem] paras mt-[1.3rem]'>
          {
            img3Arr.map((item,index)=>{
              return (
                <div className='flex flex-col flex-shrink-0 ' key={index}>
                <Link to={"/details"}>
                  <img src={item.img1} alt="img not available" className='w-[18rem] sm:w-[20rem] h-[8.9rem] sm:h-[11rem] rounded-md filter brightness-75'/>
                  <p className='font-extrabold text-[14px] text-[white] ml-[.7rem] transform translate-y-[-1.3rem]'>{item.text}</p>
                  </Link>

                </div>
              )
            })
          }
        </div>
        
 <p className='inline-block'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 bg-white rounded-full  transform absolute ml-[-2.4rem] sm:ml-[-3.4rem]  mt-[4.3rem] sm:size-12 z-[1]"> 
 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clip-rule="evenodd" />
 </svg> 
</p> 
</div>

        </div>
        <div className='bg-[#F3F4F7] pb-[4rem]'>
          <p className='uppercase font-extrabold text-[1.1rem] sm:text-[2rem] sm:font-bold'>hot deals</p>
          <p className='text-[#707070] font-medium'>Exciting offers for more value</p>
          <div className='flex flex-shrink-0 overflow-x-scroll paras gap-[1rem] mt-[1rem]'>
          {
            dealsArr.map((item,index)=>{
              return (
                  <img src={item} key={index} alt="img not available" className='h-[9rem] sm:h-[11rem]' />
              )
            })
          }
        </div>
        </div>
    </div>
  )
}

export default Stores

