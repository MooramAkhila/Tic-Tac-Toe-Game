import React from "react";
const BlogHome = () =>{
    const data=[
        {
            id:1,
            titleOne:"YOU CAN CHANGE THE WORLD",
            titletwo:"STRONG STYLE",
            paraOne:"How WOmen are redirecting Hollywood",
            paraTwo: "New Ways to Wear Denin Belt Bags Make a COmeback",
            name:" By MOoram AKhila",
            subTitle:"HOW TO SHPO Mindfully",
            qrCode :"/images/qrcode.png",
            cover : "/Images/blog5.jpg"

        },
    ]
    return (
        <section className='home'>
            <div className='left-content'>
                { data.map((value) => {
                    return (
                        <div className="content">
                            <div className='logo'>
                             <h1>M</h1>
                                 </div>
                                 <div className="home-img">
                                     <img src={getValue.cover} alt='' />
                                  </div>
                                <div className="text">
                                    <h1>{value.titleOne}</h1>
                                    <p>{ value.paraOne}</p>
                                     <span>{ value.name}</span>      
                                            </div>
                                            <div className="text text2">
                                    <h1>{value.titletwo}</h1>
                                    <p>{ value.paraTwo}</p>
                                     <span>{ value.subTitle}</span>      
                                            </div>
                                    

                             </div>
                    )
                })}

                
            
            



            </div>
            <div className="right-content"></div>
        </section>
    )
}