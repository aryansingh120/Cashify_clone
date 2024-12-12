import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const NearbyStore = () => {
    let location=useLocation();
    let path=location.pathname;
    
        useEffect(()=>{
            window.scrollTo(0,0)

        },[path])      
    

    let storeArr=[{img1:"/photos/str1.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"SHOP NO. G10, JS ARCADE, GROUND FLOOR, Sec 18 Noida",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str2.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"Shop No-PVT No-4, Ground Floor Property Number 1E Kamla Nagar Delhi",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str3.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"OPP. LATHIYA MOTOR GARAGE, NR. UMIYA CELLULAR, GONDAL ROAD, RAJKOT",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str4.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"GF-5,Avadh Pride,Opp. Pillar No. 140,Vastral Road, Ahmedabad - 380038",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str5.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"Cashify, Concourse Floor, Next to PNB kiosk Botanical Garden Metro Station, Sector 38 Noida, UP - 201301, Ph:8920204299",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str6.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"Cashify, Concourse Floor, Next to SBI Counter, Janakpuri West Metro Station, New Delhi - 110058, Ph:9319690136",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str7.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"Shop No-PVT No-2, Plot No PVT NO-3/3Acharya Niketan, Mayur Vihar, Delhi - 110091, Ph:9650855548",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"},
        {img1:"/photos/str8.webp",btn1:"open now",head:"Cashify Buy Sell Repair Mobile Phone Store ",text:"Shop Address-14E Khanna Colony,Opp Petrol Pump Sonipat Haryana - 131001, Ph:9650895006",time:"10:00 AM to 09:00 PM",text2:"call store",text3:"get directions"}];
        let icon1=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
      </svg>;

      let icon2=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
    let icon3=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
  let icon4=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ">
  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>

let icon5=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
let count=["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"]
let [flag,setFlag]=useState(count);
let [input,setInput]=useState("");
let [display,setDisplay]=useState("hidden")
   
useEffect(()=>{
    let filterArr=count.filter((item)=>item.toLowerCase().startsWith(input.toLowerCase()));
    
    (filterArr.length>=1)?setFlag(filterArr):setFlag(["not found"])  
     
     
 },[input])

    
   let run=(index)=>{
    
    setInput(flag[index])
    setDisplay("hidden")

   } 
    let [q,setQ]=useState(0)  
   let change=()=>{
    if(q===0)
    {
        setDisplay("block");
        setQ(1)
    }
    else if(q===1)
    {
        setDisplay("hidden");
        setQ(0)
    }


    
    



   }
  return (
    <div className='mx-[2vw]'>
    <div className='flex flex-col gap-[1rem] sm:flex-row sm:gap-0'>
        <div className='sm:w-[33%]'>
            <img src="/photos/kiosk-banner.svg" alt="img not available" className='h-[6rem]'/>
        </div>
        <div className='sm:w-[33%] text-[3rem] font-bold'>
            <p>Find Our Offline Stores</p>
        </div>
        <div className=' sm:w-[33%]  sm:pt-[3rem]'>
        <div className='flex justify-between items-center h-[3rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_3px] rounded-md' >
        <input type="text " value={input} onChange={(e)=>setInput(e.target.value)} onClick={()=>setDisplay("block")}  placeholder='Select City' className='w-[100%] h-[100%] outline-none placeholder:pl-[1rem] pl-[1rem] rounded-md text-[#858484]'/>
            <p onClick={change}>{icon5}</p>
            </div>
        <div className='overflow-hidden pt-[.5rem] mb-[1rem]'>

        <ul className={`border-2 absolute bg-[white] z-[4] h-[15rem] overflow-y-scroll ${display} sm:w-[31.5%] w-[96%] rounded-md`}>
               {
         
                flag.sort().map((item,index)=>{
                    return <li key={index} className={`capitalize font-medium text-[#aaaaaa]  hover:bg-[#93cccc4b] h-[2.4rem] flex items-center rounded-xl pl-[1rem]  cursor-pointer`} onClick={()=>run(index)}>{item}</li>
                })
               }
        </ul>
        </div>
       
        </div>

    </div>
    {/* ********************************************************************* */}
    <p className='text-[1.3rem] font-bold capitalize my-[1rem]'>Our exclusive stores</p>
    <div className='flex flex-col gap-[1rem] sm:grid sm:grid-cols-4'>
        {
            storeArr.map((item,index)=>{
                return (
                    <div key={index} className='cursor-pointer sm:rounded-xl'>
                        <button className='text-white bg-[#4ADE80] font-bold px-[1.1rem] py-[.4rem] rounded-md absolute z-[2] mt-[.4rem] ml-[1rem]'>{item.btn1}</button>
                        <img src={item.img1} alt="img not available" className='w-[100%]' />
                        <p className='line-clamp-1 font-bold text-[1.3rem] mt-[.3rem]'>{item.head}</p>
                        <p className='text-[#707070] text-[16px] font-medium line-clamp-2'>{item.text}</p>
                        <p className=' font-bold mb-[.4rem]'><span className='text-[#707070]'>Timing:</span> {item.time}</p>
                        <div className='flex justify-between text-[#42C8B7] capitalize shadow-md mt-[.5rem] border-t py-[.5rem] pb-[1rem]'>
                            <p className='flex gap-3'>{icon1}{item.text2}</p>
                            <p className='flex gap-3'>{icon2}{item.text3}</p>
                            
                
                        </div>
                      
                    </div>
                )
            })
        }
    </div>
    <div className=' pb-[1rem] pt-[2rem] flex justify-center'>
    <div className='uppercase flex font-bold justify-evenly w-[17rem] pr-[.7rem] sm:pr-0 sm:w-[20rem]'>
        <div className='flex gap-[1rem] items-center ' >
            <p className='cursor-pointer'>Previous</p>
        <p className="bg-[white] shadow-lg h-[3rem] w-[3rem] sm:size-[4rem] rounded-md flex items-center justify-center cursor-pointer">{icon3}</p>
        </div>
        <div className='flex items-center gap-[1rem]'>
        <p className='bg-[white] shadow-lg h-[3rem] w-[3rem] sm:size-[4rem] rounded-md flex items-center justify-center cursor-pointer'>{icon4}</p>
            <p className='cursor-pointer'>next</p>
        </div>
    </div>
    </div>
    <img src="/photos/jbl.webp" alt="img not available"  className='rounded-xl'/>
   
    </div>
  )
}

export default NearbyStore
