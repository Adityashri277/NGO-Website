(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div>
  
   <div id="Nav_bar" class="flex z-50  w-screen fixed md:flex-row h-auto md:h-20 flex-col">
      <nav
        class="flex flex-col w-full h-full gap-y-2.5  md:gap-y-0 justify-between md:flex-row items-center bg-gray-600 px-8 pb-4 md:pb-0"
      >
        <div>
          <img
            class="h-20 w-20 py-1 rounded-full object-fill "
            src="https://thedesignlove.com/wp-content/uploads/2020/11/Best-NGO-Logo-Designs-22.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center  gap-x-10">
          <a
            class="text-xl p-4 bg-transparent rounded-lg  text-white font-semibold hover:bg-black"
            href="#Home_page"
            >Home</a
          >
          <a
            class="text-xl p-4 font-semibold bg-transparent rounded-lg text-white hover:bg-black"
            href="#volunteer_form"
            >Volunteer Form</a
          >
          <a
            class="text-xl p-4 font-semibold bg-transparent rounded-lg text-white hover:bg-black"
            href="#About_section"
            >About Us</a
          >
        </div>
        <div>
          <a
            class="text-xl p-4 font-semibold bg-transparent rounded-lg text-white hover:bg-black"
            href="https://bastikipathshala.org/donate/"
            >Donate Us</a
          >
        </div>
      </nav>
    </div>
<div id="Home_page" class="flex flex-col  justify-center items-center md:pt-38 pt-89  md:flex-row w-full h-full">
      <div id="hero_section" class="w-full md:w-2/3 h-full justify-center items-center flex flex-col md:flex-row gap-x-10">
        <div class="flex flex-col h-auto w-full px-10 md:px-0 mb-10 md:mb-0 md:w-1/2 gap-y-10">
          <h1 class="text-4xl font-semibold ">Welcome, Survivors</h1>
          <p class="text-2xl font-normal ">
            In today’s rapidly changing world, where social, economic, and
            environmental challenges continue to affect millions, the need for
            organizations dedicated to positive change has never been greater. Our
            NGO, GGP was founded with the vision of creating a
            compassionate, empowered, and sustainable society. We are a
            non-profit, non-governmental organization committed to addressing
            critical issues such as education, healthcare, environmental
            conservation, and community development, ensuring that every
            individual has the opportunity to live with dignity and hope.
          </p>
          <p class="text-2xl font-normal ">Our organization operates with a strong emphasis on transparency,
            accountability, and inclusivity. We understand that every contribution, whether of time, effort, or
            resources, carries immense value, and we ensure that all our initiatives are conducted with integrity. From
            organizing skill development workshops for youth to conducting health awareness camps in rural areas, our
            projects are designed to empower individuals and foster self-reliance.</p>
         
        </div>
        
        <div class="flex flex-col px-10 md:px-0 w-full md:w-1/2 h-full gap-y-10" id="image_cont">
          <img class="md:min-w-full md:min-h-1/2 rounded-lg"
            src="https://imgs.search.brave.com/uUDyKpWVmk_RdsjEIdOeOsbWy_sUZzDp5XcgZZiz5Ho/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lZGl0/b3JpYWwwMS5zaHV0/dGVyc3RvY2suY29t/L3ByZXZpZXctNDQw/LzE0MjQ2NjkxZS82/MjNhMzYxMC9TaHV0/dGVyc3RvY2tfMTQy/NDY2OTFlLmpwZw"
            alt="">
          <img class="md:min-w-full md:min-h-1/2  rounded-lg"
            src="https://imgs.search.brave.com/tQvwDyRG2PU_9ASFI55nUWxCMaNAXjRBl9CeDuIK0Ug/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzYyLzA4Lzg5/LzM2MF9GXzU2MjA4/ODkxNl9YUHRuTGti/RjVBT3Vkck9wQjFH/ekQxMkZZb082RzZM/Yy5qcGc"
            alt="">

        </div>
       
      </div>
      </div>
      </div></div>
      <div id="About_section" class="mt-20 mb-20 opacity-80 h-screen w-full bg-[url(https://media.gettyimages.com/id/831727568/de/vektor/helfende-h%C3%A4nde.jpg?s=612x612&w=0&k=20&c=pBBr0SnbMIbx218a7uQHsdg3wZXoH0grTIwE4hV12iE=)] bg-cover">
      <div class="flex flex-col p-5 md:p-20 items-end  w-full  h-full">
      <div class="flex flex-col w-full md:w-1/3 h-full gap-y-10">
      <h1 class="md:text-4xl text-3xl  font-semibold">Our Story</h1>
      <p class="md:text-2xl text-xl font-medium ">We are a non-profit organization committed to empowering underserved communities through education, healthcare, and sustainable development initiatives.</p>
<p class="md:text-2xl text-xl font-medium "> Guided by the values of empathy, transparency, and integrity, we work at the grassroots level to create meaningful, long-term impact. Our efforts include organizing health camps, skill development workshops, environmental conservation drives, and educational programs to ensure equal opportunities for all.
</p>
<p class="md:text-2xl text-xl font-medium ">      With the support of passionate volunteers and community partnerships, we strive to build a compassionate and inclusive society where hope, dignity, and opportunity are accessible to everyone.
</p>
</div>
      </div>
      </div>
      <div
      id="volunteer_form"
      class="flex flex-col w-full h-screen justify-center mb-20 md:mb-0  items-center p-10 md:p-0 "
    >
      <form
        action=""
        class="flex flex-col   md:min-w-2/6 md:min-h-3/4 gap-y-10 bg-blue-500 rounded-xl p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
      >
        <div class="w-full h-auto text-center">
          <h2
            class="text-4xl font-bold bg-gradient-to-r from-lime-300 to-blue-300 text-transparent bg-clip-text drop-shadow-lg"
          >
            Volunteer Form
          </h2>
          
        </div>
        <div class="flex flex-col md:flex-row w-full gap-4">
          <label for="Fname" class="text-white text-xl font-medium"
            >First Name:
          </label>
          <input
            type="text"
            id="Fname"
            class="w-3/4 md:min-w-2/5 bg-white active:outline-2 px-2 rounded-lg"
            required
          />
        </div>
        <div class="flex flex-col md:flex-row w-full gap-4">
          <label for="Lname" class="text-white text-xl font-medium"
            >Last Name:
          </label>
          <input
            type="text"
            id="Lname"
            class="w-3/4 md:min-w-2/5 bg-white active:outline-2 px-2 rounded-lg"
            required
          />
        </div>
        <div class="flex gap-4 flex-row w-full">
          <label for="" class="text-white text-xl font-medium">Gender:</label>
          <label class="text-black text-xl font-medium"
            ><input
              class="appearance-none w-3 h-3 checked:bg-black bg-white rounded-xl"
              type="radio"
              name="gender"
              value="Male"
            />
            Male</label
          >
          <label class="text-black text-xl font-medium"
            ><input
              class="appearance-none w-3 h-3 checked:bg-black bg-white rounded-xl"
              type="radio"
              name="gender"
              value="Female"
            />
            Female</label
          >
        </div>
        <div class="flex flex-col gap-4 md:flex-row w-full">
          <label for="" class="text-white text-xl font-medium" id="DOB"
            >Date of Birth:</label
          >
          <input
            class="w-3/4 md:min-w-2/5 text-lg bg-white active:outline-2 px-2 rounded-lg"
            type="date"
            name="DOB"
            id="DOB"
          />
        </div>
        <div class="flex flex-col md:flex-row w-full gap-4">
          <label for="phonenumber" class="text-white text-xl font-medium"
            >Phone Number:</label
          >
          <input
            type="tel"
            id="phonenumber"
            class="w-3/4 md:min-w-2/5 bg-white active:outline-2 px-2 rounded-lg"
            required
          />
        </div>

        <div class="flex flex-col  md:flex-row w-full gap-4">
          <label for="phonenumber" class="text-white text-xl font-medium"
            >Email id:</label
          >
          <input
            type="email"
            id="emailid"
            class="w-3/4 md:min-w-2/5 bg-white active:outline-2 px-2 rounded-lg"
          />
        </div>
        <div class="flex flex-row gap-x-2 w-full">
          <input class="h-6 w-6" type="checkbox" name="" id="" required />
          <label class="text-xl" for=""
            >By submitting this form, you agree to our
            <a
              class="text-white"
              href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
              >Terms</a
            >
            and
            <a
              class="text-white"
              href="https://www.termsfeed.com/blog/sample-terms-and-conditions-template/"
              >Conditions.</a
            ></label
          >
        </div>
        <div class="w-full flex flex-row justify-center items-center">
         <button
  type="submit"
  class="relative inline-flex text-xl items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-blue-700 rounded-xl group"
>
  <span
    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4"
  >
    <span
      class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
    ></span>
  </span>

  <span
    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-black rounded-2xl group-hover:mb-12 group-hover:translate-x-0"
  ></span>

  <span
    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
    >Submit</span
  >
</button>

        </div>
      </form>
    </div>
     
  
  </div>
`;
