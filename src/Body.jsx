import React from "react";
import style from "./body.module.css";
const Body = () => {
  return (
    <div>
      <section id={style.mainbody}>
        <article id={style.insidebody}>
          <div id={style.content}>
            <h1
              style={{ color: "white", fontSize: "27px", marginRight: "130px",marginTop: "-30px" }}
            >
              Access curated courses worth
            </h1>
            <h2>
              <span
                style={{
                  fontSize: "30px",
                  color: "white",
                  marginRight: "130px",
                  
                }}
              >
                &#8377;
                <span style={{ textDecoration: "line-through red"}}>
                  18,500
                </span>{" "}
                at just{" "}
                <span style={{ fontSize: "30px", color: "rgb(0,150,255)" }}>
                  &#8377;99
                </span>{" "}
                per year!
              </span>
            </h2>
            <div>
              <div style={{ display: "flex" }}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 70 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.8659 5.43076C67.0377 5.43076 66.1343 5.50587 65.2303 5.50587H65.1552V2.26849C65.1552 1.13929 64.2519 0.235413 63.1222 0.235413C53.4095 0.235413 43.9222 2.11777 34.9622 5.80731C26.002 2.11777 16.5151 0.235413 6.80216 0.235413C5.67296 0.235413 4.76908 1.06367 4.76908 2.26849V5.58156H4.69398C3.79061 5.50593 2.88719 5.43083 1.98339 5.43083C0.854195 5.43083 0.0258789 6.3342 0.0258789 7.4639V47.5204C0.0258789 48.6496 0.854141 49.4779 1.98339 49.4779C8.38366 49.4779 14.7082 50.2311 20.8069 51.7369C20.2801 53.3178 19.9036 54.9742 19.9036 56.7059C19.9036 64.9885 26.6798 71.7647 34.9624 71.7647C43.245 71.7647 50.0212 64.9885 50.0212 56.7059C50.0212 54.9742 49.6446 53.3178 49.1178 51.7363C55.2922 50.2306 61.5411 49.4774 67.9414 49.4774C69.0706 49.4774 69.9744 48.6491 69.9744 47.5198L69.9739 7.46337C69.8988 6.33365 68.9955 5.43029 67.8657 5.43029L67.8659 5.43076ZM8.76002 4.22594C17.0426 4.45178 25.1741 6.18345 33.0047 9.34567V41.8727C30.2941 42.2493 27.885 43.3035 25.8519 44.8842C20.28 43.3785 14.5578 42.4745 8.83545 42.3244L8.83493 4.22553L8.76002 4.22594ZM34.9624 68.226C28.6378 68.226 23.5175 63.1062 23.5175 56.7811C23.5175 50.4565 28.6378 45.2611 34.9624 45.2611C41.287 45.2611 46.4072 50.3808 46.4072 56.7059C46.4072 63.0305 41.287 68.226 34.9624 68.226ZM61.1647 42.3248C55.4425 42.4755 49.7199 43.3789 44.1483 44.8846C42.1152 43.3032 39.6303 42.2491 36.9955 41.8731V9.34607C44.7508 6.18331 52.8825 4.45168 61.1649 4.2258L61.1647 42.3248Z"
                    fill="white"
                  />
                </svg>
                <span
                  style={{
                    color: "rgb(0,150,255)",
                    marginLeft: "30px",
                    fontWeight: "bold",
                  }}
                >
                  100+
                </span>
                <h3 style={{ color: "white", marginLeft: "10px" }}>
                  job relevent course
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <i
                  style={{ color: "white", fontSize: "35px" }}
                  class="fa-regular fa-clock"
                ></i>
                <span
                  style={{
                    color: "rgb(0,150,255)",
                    marginLeft: "30px",
                    fontWeight: "bold",
                  }}
                >
                  20,000+
                </span>
                <h3 style={{ color: "white", marginLeft: "10px" }}>
                  Hours of content
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5518 1.43163C18.0491 0.945471 17.3754 0.676717 16.6763 0.682968C15.9772 0.689218 15.308 0.969574 14.8138 1.46377C14.3192 1.95841 14.0388 2.6272 14.033 3.32628C14.0268 4.02539 14.2955 4.69908 14.7812 5.20217L23.5625 13.9834H8.6665C6.54513 13.9834 4.51028 14.8263 3.00982 16.3267C1.50936 17.8267 0.666504 19.8616 0.666504 21.9834V51.3171C0.666504 53.439 1.50936 55.4734 3.00982 56.9738C4.51028 58.4738 6.54513 59.3171 8.6665 59.3171H51.3339C53.4553 59.3171 55.4902 58.4738 56.9906 56.9738C58.4906 55.4734 59.3339 53.439 59.3339 51.3171V21.9834C59.3339 19.8616 58.4906 17.8267 56.9906 16.3267C55.4902 14.8263 53.4553 13.9834 51.3339 13.9834H36.4379L45.2192 5.20217C45.7049 4.69905 45.9737 4.02537 45.9679 3.32628C45.9616 2.62717 45.6808 1.9584 45.1866 1.46377C44.692 0.969574 44.0232 0.689219 43.3241 0.682968C42.625 0.676718 41.9513 0.945471 41.4487 1.43163L30.0007 12.8796L18.5518 1.43163ZM5.99977 21.9836C5.99977 21.2765 6.28057 20.5979 6.78102 20.0979C7.28102 19.5979 7.95919 19.3171 8.66628 19.3171H51.3337C52.0408 19.3171 52.719 19.5979 53.219 20.0979C53.719 20.5979 54.0002 21.2764 54.0002 21.9836V51.3173C54.0002 52.0245 53.719 52.7026 53.219 53.2026C52.719 53.703 52.0408 53.9838 51.3337 53.9838H8.66628C7.95913 53.9838 7.28102 53.703 6.78102 53.2026C6.28057 52.7026 5.99977 52.0244 5.99977 51.3173V21.9836Z"
                    fill="white"
                  />
                </svg>
                <span
                  style={{
                    color: "rgb(0,150,255)",
                    marginLeft: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Exclusive
                </span>
                <h3 style={{ color: "white", marginLeft: "10px" }}>
                  Webinar access
                </h3>
              </div>

              <div style={{ display: "flex" }}>
                <i
                  style={{ color: "white", fontSize: "35px" }}
                  class="fa-solid fa-graduation-cap"
                ></i>
                <span
                  style={{
                    color: "white",
                    marginLeft: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Scholarship Worth
                </span>
                <h3 style={{ color: "rgb(0,150,255)" }}>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "rgb(0,150,255)",
                      marginLeft: "10px",
                    }}
                  >
                    &#8377; 94,500
                  </span>{" "}
                </h3>
              </div>

              <div style={{ display: "flex" }}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z"
                    fill="white"
                  />
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 15 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="39.5562"
                      y="-0.0422363"
                      width="4"
                      height="56"
                      rx="2"
                      transform="rotate(45 39.5562 -0.0422363)"
                      fill="white"
                    />
                  </svg>
                </svg>
                <span
                  style={{
                    color: "rgb(0,150,255)",
                    marginLeft: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Ad Free
                </span>
                <h3 style={{ color: "white", marginLeft: "8px" }}>
                  learning experience
                </h3>
              </div>
            </div>
          </div>

          <div id={style.signupitom}>
            <div id={style.users}>
              <div>1</div>
              <div>2</div>
            </div>
            <h3>Select your subscription plan</h3>
            <section id={style.plain}>
             <div><input type="checkbox" name="a"/> <p style={{marginRight:"60px"}}>12 Months Subscription</p> <span style={{fontSize:"12px"}}>Total 
             <span style={{ fontSize: "18px", color: "black" }}>
                  &#8377;99
                </span>{" "} 
               </span></div>
             <div style={{backgroundColor:"rgb(196, 242, 196)"}}><input type="checkbox" name="a" /> <p style={{marginRight:"60px"}}>12 Months Subscription</p> <span style={{fontSize:"12px"}}>Total 
             <span style={{ fontSize: "18px", color: "black" }}>
                  &#8377;179
                </span>{" "}
               </span></div>
             <div><input type="checkbox" name="a"/> <p style={{marginRight:"60px"}}>6 Months Subscription</p><span style={{fontSize:"12px"}}>Total 
             <span style={{ fontSize: "18px", color: "black" }}>
                  &#8377;149
                </span>{" "}
               </span></div>
             <div><input type="checkbox" name="a"/> <p style={{marginRight:"60px"}}>3 Months Subscription</p><span style={{fontSize:"12px"}}>Total 
             <span style={{ fontSize: "18px", color: "black" }}>
                  &#8377;99
                </span>{" "}
               </span></div>
            </section>
            <div id={style.loginlast}>
            <div id={style.first}><p style={{fontSize:"13px"}}>Subscription fee</p> <span style={{ fontSize: "14px", color: "black" }}>
                  &#8377;18,500
                </span>{" "} </div>
            <div id={style.second}><p style={{fontSize:"13px",color:"rgb(209, 88, 88)",fontWeight:"bold"}}>Limited time offer </p><span style={{ fontSize: "14px", color: "black" }}>
                  - &#8377;18,401
                </span>{" "} </div>
            <div id={style.third}><p style={{fontSize:"12px"}}>Total(incl. of 18% GST)</p> <span style={{ fontSize: "14px", color: "black" ,fontWeight:"bold"}}>
                  &#8377;149
                </span>{" "} </div>
            <div id={style.btn}> 
            <button style={{color:"rgb(209, 88, 88)",border:"1.5px solid "}}>CANCEL</button>
            <button style={{color:"white",backgroundColor:"rgb(65, 289, 40)",border:"none"}}>PROCID TO PAY</button>
            </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Body;
