import React, { useState } from 'react'

const Navbar = () => {
    let icon=<svg class="h-6 w-6 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>;

  let icon3=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
// let imgArr=["/photos/cash2.webp"]
// let imgArr=["/photos/cash2.webp","/photos/cash3.webp","/photos/cash4.webp","/photos/cash5.webp","/photos/cash6.webp",]
  let selectArr=["All","sell phone","sell gadgets","buy phones","Find new gadget","buy laptop","cashify store","More"]


  let mixArr=[["Sell","Phone","Laptop","SmartWatch","Tablet","More","Repair","Sell Gadegts","Buy Phone","Recycle","Find New Phone","Cashify Store"],["Top Brands","Apple","Xiaomi","Samsung","One Plus","Nokia","Poco","More Phone Brands","Top Selling Phones ","Apple iPhone 12","Samsung Galaxy Note 20","Apple iPhone 11","One Plus 9 Pro","Xiaomi Redmi Note 4"],["Phone","Laptop","Smart Speaker","Tablet","Gaming Consoles","iMac","Smartwatch","TV","Earbuds","DSLR Camera","AC"],["Refurbuished Phone"," Refurbuished Laptop","Refurbuished Tablet"," Refurbuished gaming consoles","Top Brands","Apple","Nokia","Samsung","Poco","Redmi","One Plus","All Brands"],["Find New Phone"," Find New Laptop","Find New Tablet"," Find New Gaming Consoles","Explore","Videos","News","Articles","Reviews","QnA","Tips and Tricks","Tech News"],["Top Brands","Apple","Dell","Lenovo","Hp","Acer","Asus","Best Selling Laptops","Apple macbook air mid 2017 Refurbished","Apple macbook air early 2015 Refurbished","Apple macbook air 2020 Refurbished"],["More in Cashify stores","Delhi","Jaipur","Hisar","Sirsa","Sikar","Ajmer","Chennai","Pune","Bangalore","Hyderabad","Gurgaon","Noida","Agra","Patna","Ghaziabad","Meerut","Thane","Mohali","More"],["New Offers","Partner with us","Contact us","Warranty Policy","Reffer and Earn","Company","About us","Careers","Articles","Become Supersale Partner","Press Releases","Terms and Conditions"]]
  

  let [changeIndex,setChangeIndex]=useState(0)
  let [color,setColor]=useState("");
  let change=()=>{
    setColor("border-[#42C8B7]")
  }

  let run=(index)=>{
    setChangeIndex(index)
    
  }

  return (
    <div className='mx-[2vw] pt-[1rem] mb-[1rem]'>
    <div className={`flex px-[1rem] border-2 rounded-xl ${color} `} onClick={change}>
    <p className='mt-[1rem] sm:pr-[.5rem] cursor-text'>{icon}</p>
    <input type='text' placeholder='Search for Mobiles, accessories & More' className=' w-[100%] h-[3.3rem] outline-none placeholder:pl-[1rem] placeholder:text-[#8b8b8b] placeholder:font-bold text-[11px] sm:text-[15px]'/>
    <button className='text-[white] font-bold bg-[#42C8B7] rounded-md h-[2rem] px-[1rem] mt-[.7rem]  sm:px-[1.4rem]'>Search</button>

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
      <div className=' font-bold group  cursor-pointer' onMouseMove={()=>run(index)}>
      <span className='group-hover:text-[#42C8B7] capitalize text-[#797878]'>{item}</span> 

<p className='inline-block group-hover:rotate-180 transition-transform duration-500 group-hover:text-[#42C8B7]'>{icon3}</p>
<ul className={` flex-col gap-[.7rem] absolute bg-[white] w-[20%] rounded-2xl cursor-pointer text-[#4b4a4a] px-[1rem] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] hidden group-hover:flex ${lastIndex()}`}>
{
  mixArr[changeIndex].map((item,index)=>{
    let font=()=>{
      if(index===0 || index>=6)
      return "font-bold";
      else
      return "font-normal"
    }

    return <li className={` text-[13px] ${font()} ${(index===0)? "pl-[1rem]":"pl-[2rem]"} hover:bg-[#bdf0f050] rounded-xl py-[.5rem] `}>{item}</li>
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
