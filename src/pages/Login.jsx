import React from 'react'
import Boxpng from './../asset/1.png'
import ind from './../components/ind'
import LoginDot from './../components/ind'


function Login() {
  return (
    <div>
      <h1>{ind}</h1>
       <div className="mx-auto  flex h-screen m-4">
        <div className="bg-white w-5/6 ">
          <div className="flex pt-4">
            <img src="LOGO Shape.png" alt="" className />
            <h1 className="text-4xl pt-2">EliXer.DS</h1>
          </div>
          <div className="mt-72 pl-48">
            <h1 className="text-3xl ">Login To Platform</h1>
            <h1 className="text-xl">Email address *</h1>
            <input type="text" placeholder="name@domain.com" className="w-90 px-11 h-6 border-2 rounded-md py-4 back" />
            <h1 className="text-xl pt-4">password*</h1>
            <input type="text" placeholder="Strong password" className="w-90 px-11 h-6 border-2 rounded-md py-4" />
            <h1 className="pl-16 pt-4 text-l"><a href="#">Forgot Password? </a></h1>
            <div className="pt-4">
              <button className="rounded-full bg-blue-500 px-28 py-2  text-white">Log in</button>
              <h1 className="pl-6 pt-6">or connect with a social media</h1>
            </div>
            <div className="pt-4 flex space-x-4"> 
              <button type="button" className="hover:bg-gray-100 border border-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700  mb-2">
                <svg className width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.5 1.25C6.92603 1.25 4.92914 1.7602 3.59467 3.09467C2.2602 4.42914 1.75 6.42603 1.75 9V15C1.75 17.574 2.2602 19.5709 3.59467 20.9053C4.92914 22.2398 6.92603 22.75 9.5 22.75H15.5C18.074 22.75 20.0709 22.2398 21.4053 20.9053C22.7398 19.5709 23.25 17.574 23.25 15V9C23.25 6.42603 22.7398 4.42914 21.4053 3.09467C20.0709 1.7602 18.074 1.25 15.5 1.25H9.5ZM3.25 9C3.25 6.57397 3.7398 5.07086 4.65533 4.15533C5.57086 3.2398 7.07397 2.75 9.5 2.75H15.5C17.926 2.75 19.4291 3.2398 20.3447 4.15533C21.2602 5.07086 21.75 6.57397 21.75 9V15C21.75 17.426 21.2602 18.9291 20.3447 19.8447C19.4291 20.7602 17.926 21.25 15.5 21.25H9.5C7.07397 21.25 5.57086 20.7602 4.65533 19.8447C3.7398 18.9291 3.25 17.426 3.25 15V9ZM12.5 6.25C9.32479 6.25 6.75 8.82479 6.75 12C6.75 15.1752 9.32479 17.75 12.5 17.75C15.6752 17.75 18.25 15.1752 18.25 12C18.25 11.5858 17.9142 11.25 17.5 11.25H13.125C12.7108 11.25 12.375 11.5858 12.375 12C12.375 12.4142 12.7108 12.75 13.125 12.75H16.684C16.3297 14.7392 14.5909 16.25 12.5 16.25C10.1532 16.25 8.25 14.3468 8.25 12C8.25 9.65321 10.1532 7.75 12.5 7.75C13.5355 7.75 14.4819 8.11991 15.2193 8.73568C15.5372 9.00117 16.0102 8.95866 16.2757 8.64073C16.5412 8.32279 16.4987 7.84982 16.1807 7.58432C15.1841 6.75209 13.9005 6.25 12.5 6.25Z" fill="#66768E" />
                </svg>    
                <h1 className="text-black pl-2">GOOGLE</h1>
              </button>
              <button type="button" className="hover:bg-gray-100 border border-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700  mb-2">
                <svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.59467 2.09467C3.92914 0.760201 5.92603 0.25 8.5 0.25H14.5C17.074 0.25 19.0709 0.760201 20.4053 2.09467C21.7398 3.42914 22.25 5.42603 22.25 8V14C22.25 16.574 21.7398 18.5709 20.4053 19.9053C19.0709 21.2398 17.074 21.75 14.5 21.75H8.5C5.92603 21.75 3.92914 21.2398 2.59467 19.9053C1.2602 18.5709 0.75 16.574 0.75 14V8C0.75 5.42603 1.2602 3.42914 2.59467 2.09467ZM3.65533 3.15533C2.7398 4.07086 2.25 5.57397 2.25 8V14C2.25 16.426 2.7398 17.9291 3.65533 18.8447C4.57086 19.7602 6.07397 20.25 8.5 20.25H11.65V13.25H10.6C10.1858 13.25 9.84998 12.9142 9.84998 12.5C9.84998 12.0858 10.1858 11.75 10.6 11.75H11.65V11.6V10.655C11.65 8.77479 13.1748 7.25 15.055 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H15.055C14.0032 8.75 13.15 9.60321 13.15 10.655V11.6V11.75H16C16.4142 11.75 16.75 12.0858 16.75 12.5C16.75 12.9142 16.4142 13.25 16 13.25H13.15V20.25H14.5C16.926 20.25 18.4291 19.7602 19.3447 18.8447C20.2602 17.9291 20.75 16.426 20.75 14V8C20.75 5.57397 20.2602 4.07086 19.3447 3.15533C18.4291 2.2398 16.926 1.75 14.5 1.75H8.5C6.07397 1.75 4.57086 2.2398 3.65533 3.15533Z" fill="#66768E" />
                </svg>
                <h1 className="text-black pl-2">FACEBOOK</h1>
              </button>
            </div>
            <div>
            </div>
            <h1 className="text-xl pt-44">Don't have a account?<a href="#" className="text-blue-700">Sign up</a></h1>
          </div>
        </div>
        <div className="bg-slate-200  w-5/6 pt-11">
        <LoginDot symbol="." />
        <LoginDot symbol="A"/>
        <LoginDot symbol="$"/>
      
     
          <div className="flex pt-11">
            <div className>
              <img src="card.png" alt="" className="pl-48" />
            </div>
            <div>
              <img src={Boxpng}   className="pl-11 pt-4" />
              <div className="ml-11 mt-11">
                <img src="11.png" alt="" />
              </div>
            </div>
          </div>
          <div className>
            <img src="Check.png" alt="" className="ml-96 pl-96" />
            <h1 className="text-4xl mt-26 ml-40 decoration-8 ">Better Result With Design System</h1>
            <p className="text-xl m-6">Design systems are the secret to creating beautiful, functional design. Design systems<br /> are made up of all the things you need to make a website or app look great and <br /> function well.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
 