import React from 'react'
import Card2 from './Card2';
import CardImg3 from "../assets/Rectangle 5.png";
import UserImg1 from "../assets/Rectangle 3.png";

export default function Cards2() {
        return (
                <div>
                        <Card2 img={CardImg3} title="✍️ Article" description="What if famous brands had regular fonts? Meet RegulaBrands!" detail="Fri, 12 Oct, 2018" location="Ahmedabad, India" img2={UserImg1} name="Sarthak Kamra" views="1.4k views" />

                        <Card2 title="💼️ Job" description="Software Developer" detail="Innovaccer Analytics Private Ltd." location="Ahmedabad, India" img2={UserImg1} name="Sarthak Kamra" views="1.4k views" />
                </div>
        )
}
