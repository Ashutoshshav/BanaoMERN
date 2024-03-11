import React from 'react'
import Card from './Card';
import CardImg1 from "../assets/Rectangle 5 (1).png";
import CardImg2 from "../assets/Rectangle 5 (2).png";
import CardImg3 from "../assets/Rectangle 5.png";
import UserImg1 from "../assets/Rectangle 3.png";
import UserImg2 from "../assets/Rectangle 6.png";


export default function Cards() {
        return (
                <div>
                        <Card img={CardImg3} title="✍️ Article" description="What if famous brands had regular fonts? Meet RegulaBrands!" sentence="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" img2={UserImg1} name="Sarthak Kamra" views="1.4k views" />

                        <Card img={CardImg1} title="🔬️ Education" description="Tax Benefits for Investment under National Pension Scheme launched by Government" sentence="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" img2={UserImg2} name="Sarthak Kamra" views="1.4k views" />

                        <Card img={CardImg2} title="🗓️ Meetup" description="Finance & Investment Elite Social Mixer @Lujiazui" sentence="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…" img2={UserImg1} name="Sarthak Kamra" views="1.4k views" />
                </div>
        )
}
