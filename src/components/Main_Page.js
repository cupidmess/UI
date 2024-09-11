import React from 'react' 
import "./Main_Page.css" ; 
import logo from "./logo.png"
import search from "./search.png"
import coin from "./coin.png"
import bookmark from "./bookmark.png"
import work from "./work.png"
import talent from "./talent.png"
import connect from "./connect.png"
import msg from "./msg.png"
import notif from "./notif.png"
import profile from "./profile.png"
import market from "./market.png"
import card from "./card.png"
import wallpaper from "./wallpaper.png"
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaUpload } from 'react-icons/fa';
export default function Main_Page() {
  return (
    <div> 
      <div className='nav'>
        <img src = {logo} className='logo'></img>
        <div className='searchbar'>
         <img src ={search} className='search'></img>
         <input type="text" placeholder="Search..." className='i-1'></input>
        </div>
        <div className='find_work'>
          <img src = {work} className='work'></img> <div className='p1'>Find Work</div>
        </div>
        <div className='find_talent'>
          <img src ={talent} className='talent'></img><div className='p1'>Find Talent</div>
        </div>
        <div className='connect'>
          <img src ={connect} className='con'></img> <div className='p1'>Connections</div>
        </div>
        <div className='message'>
          <img src ={msg} className='msg'></img> <div className='p3'>Messages</div>
        </div>
        <div className='notification'>
          <img src ={notif} className='notif'></img> <div className='p2'>Notifications</div>
        </div>
        <div className='profile'>
          <img src ={profile} className='prof'></img> <div className='p4'>Me</div>
        </div>
      </div>
      <div className='main'>
      <div className='left'>
      <div className='box-1'>
      <img src = {wallpaper} className='wp'></img>
      <img src = {profile} className='pfp'></img>
      <div className='title'>
      <div className='bp-1'>Shreya Bhoir</div>
      <div className='bp-2'>Python Enthusiast | Frontend Dev</div>
      </div>
      <div className='box1-part2'>
        <div className='bp-3'>82<img src ={coin} className='coin'></img></div>
        <div className='bp-3'>Proposals</div>
        <div className='bp-3'>Projects</div>
        <div className='bp-3'>References</div>
      </div>
      <div className='box1-part3'>
        <img src ={bookmark}className='bookmark'></img>Saved Items
      </div>
      </div>
      <div className='box-2'>
      <img src ={market} className='market'></img>
      <div className='b-2'>
        <div className='box2-p1'>Market Trends</div>
        <div className='box2-p2'>What's going on?</div>
      </div>
      </div>
      <div className='box-3'>
        <img src = {card} className='card'></img>
        <div className='b-3'>
          <div className='box3-p1'>Get Verified!</div>
          <div className='box3-p2'>Link your pancard</div>
        </div>
      </div>
      </div>
      <div className='right'>
        <div className='r-box-1'>
          <img src = {profile} className='profile1'></img>
          <div className='post'>
          <input className='i-2' type='text' placeholder="What's on your mind?"></input>
          <div className='t-1'><FaUpload style={{  marginRight: '1rem' }}/>Media</div>
          </div>
        </div>
        <div className='section-seperator'>
          <hr className='hr-1'></hr>
          <div className='history'>
          <div className='curr'><u>Best Matches</u></div>
          |
          <div className='past'> Most Recent</div>
          </div>
        </div>
        <div className='r-box-2'>
          <div className='rb-top'>
            <img src ={profile} className='rb-pfp'></img>
            <div className='rb-title'><div className='rb-name'>Dhru Burte</div>
            <div className='rb-def'>Python Enthusiast | Frontend Developer</div></div>
            <div className='flw'> + Follow</div>
            <div className='heart'><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        stroke="red"          
        strokeWidth="1"    
        width="20px"
        height="20px"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg></div>
          </div>
          <div className='rb-mid'>
            <div className='rb-m-tit'>Create a HTML Emailer for the design provided</div>
            <div className='rb-m-des'>Hourly: $5-$10 - Entry Level - Est. Time: Less than 1 month</div>
            <div className='rb-m-body'>Details go here . blah blah blah blah . etc etc etc. go and desribe your project! <br/>cmon! ha haha hahahahahahaha</div>
          </div>
          <div className='rb-mid-icon'>
            <div className='icon-1'>HTML</div>
            <div className='icon-1'>CSS</div>
            <div className='icon-1'>Javascript</div>
          </div>
          <div className='rb-mid-end'>
            <div className='rb-m-t'>
            <div className='rb-m-t1'>Payment Verified</div>
            <div className='rb-m-t1'>30k+ spent</div>
            <div className='rb-m-t1'>MH,India</div>
          </div>
          <div className='rb-m-e'>
            Proposals : 10 - 15
            </div>
          </div>
          <div className='rb-end-i'>
          <div className='rb-end-icon1'><FaThumbsUp style={{ fontSize: '25px', marginRight: '1rem' }}/>LIKE</div>
          <div className='rb-end-icon1'><FaComment style={{ fontSize: '25px', marginRight: '1rem' }}/>COMMENT</div>
          <div className='rb-end-icon1'><FaShare style={{ fontSize: '25px', marginRight: '1rem' }}/>SHARE</div>
          </div>
        </div>
        <div className='r-box-3'>
          <div className='rb-top'>
            <img src ={profile} className='rb-pfp'></img>
            <div className='rb-title'><div className='rb-name'>Sahil Khan</div>
            <div className='rb-def'>Python Enthusiast | Frontend Developer</div></div>
            <div className='flw'> + Follow</div>
            <div className='heart'><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        stroke="red"          
        strokeWidth="1"    
        width="20px"
        height="20px"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg></div>
          </div>
          <div className='rb-mid'>
            <div className='rb-m-tit'>Create a HTML Emailer for the design provided</div>
            <div className='rb-m-des'>Hourly: $5-$10 - Entry Level - Est. Time: Less than 1 month</div>
            <div className='rb-m-body'>Details go here . blah blah blah blah . etc etc etc. go and desribe your project! <br/>cmon! ha haha hahahahahahaha</div>
          </div>
          <div className='rb-mid-icon'>
            <div className='icon-1'>HTML</div>
            <div className='icon-1'>CSS</div>
            <div className='icon-1'>Javascript</div>
          </div>
          <div className='rb-mid-end'>
            <div className='rb-m-t'>
            <div className='rb-m-t1'>Payment Verified</div>
            <div className='rb-m-t1'>30k+ spent</div>
            <div className='rb-m-t1'>MH,India</div>
          </div>
          <div className='rb-m-e'>
            Proposals : 10 - 15
            </div>
          </div>
          <div className='rb-end-i'>
          <div className='rb-end-icon1'><FaThumbsUp style={{ fontSize: '25px', marginRight: '1rem' }}/>LIKE</div>
          <div className='rb-end-icon1'><FaComment style={{ fontSize: '25px', marginRight: '1rem' }}/>COMMENT</div>
          <div className='rb-end-icon1'><FaShare style={{ fontSize: '25px', marginRight: '1rem' }}/>SHARE</div>
          </div>
        </div> 
        </div>
      </div>
    </div>
  )
}

