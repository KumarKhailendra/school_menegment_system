"use client";
import React, { useState } from 'react';
import './ContactUs.css'; 
import Link from 'next/link';
import { postContectInfo } from '@/redux/actions/contectAction';
import { useAppDispatch } from '@/redux/hooks';

const ContactUs = () => {
  const initialState = { name: '', email: '', text: ''}
  const [contectData, setContectData] = useState(initialState)
  const { name, email, text} = contectData;
  const dispatch = useAppDispatch()


  const handleChangeInput = e => {
    const { name, value } = e.target
    setContectData({...contectData, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContectInfo(contectData));
    setContectData(initialState)
  };

  return (
    <>
      <div className='contact-us-main-container'>
        <div className='contact-us-main-container'>
          <h2>Contact Us</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>
        <div className='contact-us-container'>
          <div className='contact-us-info'>
            <div className='contact-us-box'>
              <div className='contact-us-icon'><b></b><i className='fa-solid fa-phone'></i></div>
              <div className='contact-us-text'>
                <h3>Phone</h3>
                <p>+91 8005992812</p>
              </div>
            </div>
            <div className='contact-us-box'>
              <div className='contact-us-icon'><b></b><i className='fa-solid fa-envelope'></i></div>
              <div className='contact-us-text'>
                <h3>Email</h3>
                <p>temp@dummy.domain</p>
              </div>
            </div>
            <h2 className='contact-us-txt'>Contect with us</h2>
            <ul className='contact-us-social'>
              <li><Link href="#"><i className='fa-brands fa-facebook-f'></i></Link></li>
              <li><Link href="#"><i className='fa-brands fa-x-twitter'></i></Link></li>
              <li><Link href="#"><i className='fa-brands fa-instagram'></i></Link></li>
              <li><Link href="#"><i className='fa-brands fa-linkedin-in'></i></Link></li>
            </ul>
          </div>
          <div className='contact-us-form'>
            <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className='contact-input-group'>
                <input type='text' name='name' onChange={handleChangeInput} value={name} required />
                <span>Full Name</span>
              </div>
              <div className='contact-input-group'>
                <input type='email' name='email' onChange={handleChangeInput} value={email} required />
                <span>Email</span>
              </div>
              <div className='contact-input-group'>
                <textarea name='text' onChange={handleChangeInput} value={text} required ></textarea>
                <span>Type your message...</span>
              </div>
              <div className='contact-input-group'>
                <input type='submit' value='Send' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
