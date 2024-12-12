import React, { useState } from 'react'

const Questions = () => {
    let [count, setCount]=useState(0)

    let btnArr=["Sellsmart","Smartbuy","Repair/Others"];


     let ansArr=[
      [{que:"What if my pickup was delayed?",ans:"Usually, it doesn’t happen, it may happen due to some unforeseen circumstances. But we will update you with the real-time pickup status. In case of delay, please contact us by email at support@cashify.in. We shall respond to you within one business day and issue a refund/ fresh order."},{que:"My mobile phone is not listed on the website.What to do now?",ans:"In such cases, please contact us by email at support@cashify.in. We shall respond to you within one business day and try to rectify the issue as soon as possible."},{que:"How to sell your old mobile phone in three steps?",ans:"When it comes to selling your old mobile phone in a super easy and convenient fashion, you can trust none but Cashify. Here are three hassle-free ways.On the Cashify website or app, under the Sell phone category, choose the brand name and model. Add a few details related to the phone to get the exact value.Schedule a doorstep pickup for your phone as per your preferred date and time slot.Receive instant cash at your doorstep once the pickup is complete."}],
      [{que:"What is refurbished products?",ans:"A refurbished product is a pre-owned product that has been tested and repaired (high-quality repair) for optimal performance and functionality while being covered by a specific warranty offered by Cashify."},{que:"What is the return policy",ans:"Sadly, Cashify does not have a return policy. In case of physical damage, inform the courier rider.If you receive a package that has been tampered with or damaged in any way, please refuse it. If already accepted, please inform us within 4 hours so that we can rectify the situation. In case of physical damage, inform the courier rider or reach out to us at warranty@cashify.in."},{que:"Do you have delivery in all places or only in particular locations?",ans:"Fortunately, Cashify delivers all over India."}],
      [{que:"Is repair facility only available at home?",ans:"Cashify smartphone repair facility is available to its users both at home and at Cashify stores nearby you. Users can repair old phone in front of themselves and can also sell phone at the store."},{que:"What is Cashify repair?",ans:"With smartphones getting expensive with every new launch, users of expensive smartphones cannot always buy a new phone if their phone gets broken. But at the same time, repairing phones requires a lot of care, considering how unreliable many repair shops or portals can be.But Cashify Repair brings you a platform where you can repair your phone, in front of your eyes, in the comfort of your home. No matter which part of the smartphone – display, mic, speaker, battery, receiver, charging port – Cashify’s new service Cashify Repair is here to fix it at your home within 30-45 minutes. What’s more? You can now even visit a Cashify store in your city & get the smartphone repaired right then & there.Visit the Cashify Repair website and find the device you want to have repaired. You will be given the best possible quote for your mobile repair, which we can assure will be the best price for genuine parts. Cashify Repair technicians will then arrive at an address and time of your choosing to repair the smartphone. We even offer a 6-month guarantee and week-long money-back guarantee."},{que:"how cashify is repair different from others ?",ans:"What sets Cashify Repair apart from the rest of the mobile repair industry is the fact that Cashify Repair offers doorstep service for your mobile repair. This means that –It’s convenient: You never have to never visit a store or look for a shop. We come directly to your place of choice at the time you decide.It’s inexpensive: Cashify Repair also provides the best rates for mobile repair in the industry:  You can save upto 40 per cent on repair costs with Cashify Repair.It’s experienced: We also serve repair options for a wide variety of smartphones from nearly all of the top smartphone brands in the country. So whether you have a Xiaomi or an Apple doesn’t matter because we can replace your broken screen.It’s reliable: Lastly, Cashify Repair only uses genuine parts in all repairs. You do not have to worry about counterfeit parts appearing on your device.It’s guaranteed: Cashify Repair will give you a week-long money-back guarantee and, 6 months of free replacement warranty for screens & 3 months warranty for other spare parts repaired by Cashify repair. Please note back panel change is not covered under warranty.For any questions or queries, visit the Cashify Repair website or call us at 7290068900"}]
    ];

     let press=(index)=>{
        setCount(index);
}

let [rotate,setRotate]=useState(true)
let show=()=>{

       setRotate(!rotate)
       console.log(rotate);
       
  }


  return (
    <div className='mx-[2vw]'>
  <div className='mt-[1rem] sm:flex justify-between'>
    <div className='text-[1.1rem] sm:text-[1.8rem] font-bold'>Frequenty Asked Questions</div>
    <div className=''>
      {
        btnArr.map((item,index)=>{         
           return (
            <button key={index} className={`px-[1.3rem] py-[.7rem] text-[12px] font-medium rounded-lg text-[#707070] sm:text-[17px] ${index===count ? 'bg-[#E5E5E5]':'bg-transparent' }`} onClick={()=>press(index)}>{item}</button>
          )
        })
      }
    </div>
   
  </div>
  
  <div className='mt-[1rem]'>
    {
       

        ansArr[count].map((item,index)=>{
            return (
                <details key={index} className='border-b-2 pr-[13px] pb-[.7rem] sm:pb-[1.5rem] cursor-pointer' onClick={show}>
                  <summary className='flex justify-between'>
                  <p className='block text-[14px] sm:text-[18px] text-start font-bold  '>{item.que}</p>
                  <p className={`text-[20px] ${(rotate===false)? "rotate-[45deg]": "rotate-[90deg]"}`}>+</p>
                  </summary>
                  <p>{item.ans}</p>
                </details>



                





                    
            )
        })

        
    }
  </div>
  <div className='flex justify-center pt-[.5rem]'>
  <button className='text-[#42C8B7] font-bold'>Load more FAQS</button>

  </div>
    </div>
  )
}

export default Questions







