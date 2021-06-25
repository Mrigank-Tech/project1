import React ,{ useState } from 'react';

const Contact = () => {
  //pass as object
const [data , setData] = useState({
  fullname:"",
  mobnumber:"",
  email:"",
  msg:"",
});

const InputEvent = (event) => {
  const{ name ,value} = event.target;

  setData ((preVal) => {
    return{
      ...preVal,
      [name] : value,
    }
  }) 
}
//so the page is not refreshed on submit use e.preventDefault().
  const fromSubmit = (e) =>{
    e.preventDefault();
    alert(`My Name is ${data.fullname} and My Mobile Number is ${data.mobnumber}.My Email id is ${data.email} and my message is ${data.msg}`);
  }
  return (
    <>
      <div>
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail3" 
                class="form-label">Full Name</label>
                <input type="text" 
                class="form-control" 
                id="exampleInputEmail3"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Nmae" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail2" 
                class="form-label">Mobile Numbaer</label>
                <input type="number"
                 class="form-control" 
                 id="exampleInputEmail2" 
                  name="mobnumber"
                  value={data.mobnumber}
                  onChange={InputEvent}
                 placeholder="Enter Your Mobile Numbaer" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" 
                class="form-label">Email address</label>
                <input type="email"
                 class="form-control" 
                 id="exampleInputEmail1" 
                 name="email"
                  value={data.email}
                  onChange={InputEvent}
                 placeholder="Enter Your email "  
                 />
              </div>
              {/* <div class="mb-3">
                <label for="exampleInputPassword1" 
                class="form-label">Password</label>
                <input type="password"
                 class="form-control" 
                 id="exampleInputPassword1" />
              </div> */}
              <div class="mb-3">
                <label for="exampleFormControlTextarea1"
                 class="form-label">Message</label>
                <textarea class="form-control" 
                id="exampleFormControlTextarea1" 
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-info">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;