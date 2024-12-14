import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let icon=<svg class="h-6 w-6 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>;

  let icon3=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
  let selectArr=["All","sell phone","sell gadgets","buy phones","Find new gadget","buy laptop","cashify store","More"]


  let mixArr=[["Sell","Phone","Laptop","SmartWatch","Tablet","More","Repair","Sell Gadegts","Buy Phone","Recycle","Find New Phone","Cashify Store"],["Top Brands","Apple","Xiaomi","Samsung","One Plus","Nokia","Poco","More Phone Brands","Top Selling Phones ","Apple iPhone 12","Samsung Galaxy Note 20","Apple iPhone 11","One Plus 9 Pro","Xiaomi Redmi Note 4"],["Phone","Laptop","Smart Speaker","Tablet","Gaming Consoles","iMac","Smartwatch","TV","Earbuds","DSLR Camera","AC"],["Refurbuished Phone"," Refurbuished Laptop","Refurbuished Tablet"," Refurbuished gaming consoles","Top Brands","Apple","Nokia","Samsung","Poco","Redmi","One Plus","All Brands"],["Find New Phone"," Find New Laptop","Find New Tablet"," Find New Gaming Consoles","Explore","Videos","News","Articles","Reviews","QnA","Tips and Tricks","Tech News"],["Top Brands","Apple","Dell","Lenovo","Hp","Acer","Asus","Best Selling Laptops","Apple macbook air mid 2017 Refurbished","Apple macbook air early 2015 Refurbished","Apple macbook air 2020 Refurbished"],["More in Cashify stores","Delhi","Jaipur","Hisar","Sirsa","Sikar","Ajmer","Chennai","Pune","Bangalore","Hyderabad","Gurgaon","Noida","Agra","Patna","Ghaziabad","Meerut","Thane","Mohali","More"],["New Offers","Partner with us","Contact us","Warranty Policy","Reffer and Earn","Company","About us","Careers","Articles","Become Supersale Partner","Press Releases","Terms and Conditions"]];

  let navArr=["home","About","Contact","Login","Location"];
  const indianCities = ["Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Kanpur", "Surat", "Patna", "Nagpur", "Indore", "Bhopal", "Vadodara", "Ludhiana", "Agra", "Nashik", "Rajkot", "Meerut", "Varanasi", "Amritsar", "Allahabad", "Ranchi", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Thiruvananthapuram", "Mysuru", "Noida", "Howrah", "Salem", "Bareilly", "Aligarh", "Ghaziabad", "Jodhpur", "Bhubaneswar"];
  ;

  

  let [changeIndex,setChangeIndex]=useState(0)
  let [color,setColor]=useState("");
  let change=()=>{
    setColor("border-[#42C8B7]")
  }

  let run=(index)=>{
    setChangeIndex(index)
    
  }
  let hamIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
let down=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>


let location=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

let crossIcon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
let [count,setCount]=useState(true);

useEffect(()=>{

  window.addEventListener("resize",()=>{
      setCount(true)
      if(window.innerWidth>640)
        setCount(true)
      if(window.innerWidth<768)
      {
        setDisplay(false)
        
      }

    
  })

  return ()=>window.removeEventListener("resize",()=>{
      setCount(true)
      if(window.innerWidth>640)
        setCount(true)
      if(window.innerWidth<768){

        setDisplay(false)
        
      }
    
  })
})
let [city,setCity]=useState("Rajasthan");
let [display,setDisplay]=useState(false)

  return (
    <div className='mx-[2vw] pt-[1rem] mb-[1rem] '>
    <div className='flex justify-stretch items-center'>
    <div className={`flex px-[1rem] border-2 rounded-xl flex-grow ${color} `} onClick={change}>
    <p className='mt-[1rem] sm:pr-[.5rem] cursor-text'>{icon}</p>
    <input type='text' placeholder='Search for Mobiles, accessories & More' className=' w-[100%] h-[3.3rem] outline-none placeholder:pl-[1rem] placeholder:text-[#8b8b8b] placeholder:font-bold text-[11px] sm:text-[15px]'/>
    {/* <button className='text-[white] font-bold bg-[#42C8B7] rounded-md h-[2rem] px-[1rem] mt-[.7rem]  sm:px-[1.4rem]'>Search</button> */}

</div>
<p className=' md:hidden ml-[1rem]' onClick={()=>setCount(!count)}>{(count==true)? hamIcon : crossIcon}</p>
<p className='hidden md:flex md:gap-[.2rem] mx-[1rem] cursor-pointer' onClick={()=>setDisplay(true)}>{location}{city}{down}</p>

<Link to={"/login"} className='py-[.3rem] bg-[#42C8B7] rounded-md px-[2rem] text-[#FFFFFF] font-bold hidden md:inline' >Login</Link>
</div>
<div className={`${(count==true)? "hidden":"flex"} flex-col font-bold gap-[1rem] py-[2rem] bg-[#42C8B7] mx-[.2rem] rounded-md md:hidden mt-[2px] items-center`}>
{
  navArr.map((item,index)=>{
    return (
      <Link to={`/${item}`} key={index} className='capitalize cursor-pointer' onClick={()=>setCount(true)}>{item}</Link>
    )
  })
}

  
</div>
<div className={` grid-cols-5 gap-[1rem] rounded-md shadow-md pl-[2vw] bg-[#FFFFFF] py-[1rem] absolute z-[1] w-[96%] ${(display==false)? "hidden":"grid"}`}>
  {
    indianCities.sort().map((item)=>{
     return <p  className='text-[#a3a2a2] font-medium cursor-pointer' onClick={()=>{setCity(item); setDisplay(false) }} >{item}</p>
    })

  }
</div>






























<div className=' border-y mt-[1rem] hidden sm:block '>
<div className='flex justify-between py-[1rem]'>

{
    selectArr.map((item,index)=>{
     let lastIndex=()=>{
        if(index===(selectArr.length)-1)
        return "translate-x-[-13.5rem]";
        else if(index===(selectArr.length)-2)
        return "translate-x-[-1.4rem]";
        else
        return "";
      }
      return (
      <div key={index} className=' font-bold group  cursor-pointer' onMouseMove={()=>run(index)}>
      <span className='group-hover:text-[#42C8B7] capitalize text-[#797878]'>{item}</span> 

<p className='inline-block group-hover:rotate-180 transition-transform duration-500 group-hover:text-[#42C8B7]'>{icon3}</p>
<ul className={` flex-col gap-[.7rem] absolute z-[5] bg-[white] w-[20%] rounded-2xl cursor-pointer text-[#4b4a4a] px-[1rem] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hidden group-hover:flex ${lastIndex()}`}>
{
  mixArr[changeIndex].map((item,index)=>{
    let font=()=>{
      if(index===0 || index>=6)
      return "font-bold";
      else
      return "font-normal"
    }

    return <li key={index} className={` text-[13px] ${font()} ${(index===0)? "pl-[1rem]":"pl-[2rem]"} hover:bg-[#bdf0f050] rounded-xl py-[.5rem] `}>{item}</li>
  })
 }

</ul>

      </div>
      )
    })
}

</div>
</div>



</div>
  )
}

export default Navbar
