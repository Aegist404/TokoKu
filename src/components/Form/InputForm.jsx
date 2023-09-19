import React from 'react'
import LoginImg from '../../assets/img/image01.png'

const InputLogin = (props) => {
  return (
    <>
      <div className="flex justify-evenly my-10">
          
        {/* Image */}
        <div className="">
          <img src={LoginImg} alt="Image" />
        </div>


        {/* Input Login */}
        <div className="flex-col w-[450px]">
          <div className="border-2 w-[100%]">
            <div className="p-5">
              <p className='company-name text-[#0071FF] text-center text-[50px] mb-[30px]'>TokoKu</p>

              {/* Form */}
              <form action="" className='flex flex-col gap-2'>
                <input type="text" name='username' placeholder='Username or Email' className='p-4 bg-[#f5f5f5] rounded-md' />
                <input type="text" name='password' placeholder='Password' className='p-4 bg-[#f5f5f5] rounded-md' />
                <button className='rounded-lg bg-[#6CAEFF] text-[#ffff] font-bold mt-5 p-2 w-[100%]'>{props.button}</button>

                {/* Forgot Password */}
                {props.showForgot && <a href="#" className='text-center text-[#595959] mt-5'>{props.descLink}</a>}
              </form>

            </div>
          </div>

        {/* Register */}
        <div className="mt-5">
          <div className="border-2 w-[100%]">
            <p className='text-center p-[25px]'>{props.text}<a href={props.link} className='text-[#6CAEFF]'>{props.textLink}</a></p>
          </div>
        </div>

        </div>
      </div>
    </>
  )
}

export default InputLogin
