import React, { useState } from 'react';
import LOGO from '../images/LOGO.png';
import BackGround from '../images/BackGround.png';
import IconBook from '../images/IconBook.png';
import IconTime from '../images/IconTime.png';
import IconLive from '../images/IconLive.png';
import IconAds from '../images/IconAds.png';
import IconClock from '../images/IconClock.png';
import IconDegree from '../images/IconDegree.png';
import RazorpayIcon from '../images/RazorpayIcon.png';
import { AiOutlineSearch } from "react-icons/ai";
import { TfiAngleDown } from "react-icons/tfi";
import './Style.css';

//********************* script for selecting subcription  ********************************

const Mainpage = () => {

    const [selectedDiv, setSelectedDiv] = useState(null);

    const selectDiv = (divNumber) => {
        if (selectedDiv) {
        selectedDiv.classList.remove('selected');
        }
        const newSelectedDiv = document.getElementById(`div${divNumber}`);
        newSelectedDiv.classList.add('selected');
        setSelectedDiv(newSelectedDiv);

        // Extract the price from the selected div
        const paragraphText = newSelectedDiv.querySelector('.prizetag').innerText;
        document.getElementById('result').innerHTML = paragraphText;
        //  select the checkbox on selecting of div
        var checkbox = document.getElementById('myCheckbox');
        checkbox.checked = !checkbox.checked;

    };

  return (
    <>
       <nav className='main-nav'>
            <div className='logo'> <img src={LOGO} /> </div>
            <div className='menu-option'>
                <ul>
                    <li>Courses <TfiAngleDown className='icon'/></li>
                    <li>Programs <TfiAngleDown className='icon'/></li>   
                </ul>
            </div>
            <div className='button-option'>
                <ul>
                    <li><AiOutlineSearch className='icon'/></li>
                    <li><p>Log in</p></li>    
                    <li><button className='btn'>JOIN NOW</button></li>    
                </ul>
            </div>
       </nav>

    {/* text on main screen */}
    
       <div className='maindiv' style={{backgroundImage: `url(${BackGround})`}}>
            <div className='information'>
                <h1>Access curated courses worth<br/> ₹ <strike style={{color: '#FF0000'}}><span style={{color:'white'}}>18,500</span></strike> at just <span className='spanclr'>₹ 99</span> per year!</h1>
                <div className='job'>
                    <img src={IconBook}/>
                    <h1><span className='spanclr'>100+</span> Job relevant courses</h1>
                </div>
                <div className='hours'>
                    <img src={IconTime}/>
                    <h1><span className='spanclr'>20,000+</span> Hours of content</h1>
                </div>
                <div className='live'>
                    <img src={IconLive}/>
                    <h1><span className='spanclr'>Exclusive</span> webinar access</h1>
                </div>
                <div className='scholar'>
                    <img src={IconAds}/>
                    <h1>Scholarship worth <span className='spanclr'>₹ 94,500</span></h1>
                </div>
                <div className='ad-free'>
                    <img src={IconDegree}/>
                    <h1><span className='spanclr'>Ad Free</span> learning experience</h1>
                </div>
            </div>

    {/* signup and subcribtion div start */}

            <div className='sdiv'>
                <div className='number'>
                    <div>1</div>
                    <div>2</div>
                </div>
                <div className='text'>
                    <div>Sign Up</div>
                    <div>Subscribe</div>
                </div>
                <h1 className='heading'>Select your subscription plan</h1>
                
                <div className='plan-one'>
                    <div className='offertag1'>Offer expired</div>
                    <div className='des-one'>
                        <input type="checkbox" class="iptcheck"/>
                        <h1 className='cncltxt'>12 Months Subscription</h1>
                        <p className='cnclpara'>Total <span className='prizetag'>₹ 99</span><br/>₹ 8 <span className='monthh'>/mo</span></p>
                    </div>
                </div>

                <div className='plan-two' id="div1" onClick={() => selectDiv(1)}>
                <div className='offertag2'>Recommended</div>
                    <div className='des-two'>
                        <input type="checkbox" class="iptcheck1" id="myCheckbox"/>
                        <h1 className='head'>12 Months Subscription</h1>
                        <p className='para'>Total <span className='prizetag'>₹ 179</span><br/>₹ 15 <span className='monthh'>/mo</span></p>
                    </div>
                </div>

                <div className='plan-three' id="div2" onClick={() => selectDiv(2)}>
                    <div className='des-three'>
                        <input type="checkbox" class="iptcheck1" id="myCheckbox"/>
                        <h1 className='head'>6 Months Subscription</h1>
                        <p className='para'>Total <span className='prizetag'>₹ 149</span><br/>₹ 25 <span className='monthh'>/mo</span></p>
                    </div>
                </div>

                <div className='plan-four' id="div3" onClick={() => selectDiv(3)}>
                    <div className='des-three'>
                        <input type="checkbox" class="iptcheck1" id="myCheckbox"/>
                        <h1 className='head'>3 Months Subscription</h1>
                        <p className='para'>Total <span className='prizetag'>₹ 99</span><br/>₹ 33 <span className='monthh'>/mo</span></p>
                    </div>
                </div>
                <hr/>
                <div className='plan-fee'>
                    <h2>Subcribtion Fee</h2>
                    <h3>₹ 18,500</h3>
                </div>

                <div className='plan-discount'>
                    <div className='discount-one'>
                        <h2>Limited time offer</h2>
                        <h3>- 18,401</h3>
                    </div>
                    <div className='discount-two'>
                        <img src={IconClock}/>
                        <h2>Offer valid till 25th March 2023</h2>
                    </div>
                </div>
                <div className='final-price'>
                    <h2><b>Total</b> (Incl. of 18% GST)</h2>
                    <h3 id="result">-</h3>
                </div>

                <div className='btn-group'>
                    <button className='cnl-btn'>CANCEL</button>
                    <button className='pay-btn'>PROCEED TO PAY</button>
                </div>
                <div>
                    <img src={RazorpayIcon}/>
                </div>
            </div>
       </div>
    </>
  )
}

export default Mainpage