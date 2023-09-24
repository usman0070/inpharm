import React,{useState} from "react";

function Nav({press}) {
  const [darkTheme, setDarkTheme] = React.useState(false)
  return (
    <>
      <div className={`Nav2 px-3 shadow-sm bg-white d-flex align-items-center ` }>
        <div
          className="q"
          style={{
            fontSize: "17px",
            color: " #0E9F6E",
          }}
        >
          <i class="fa-solid fa-bars "
            onClick={press}
           id="toggle_desktop"
          ></i>
          <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
             id="toggle_mobile"
           
          >
          <i class="fa-solid fa-bars"
      style={{color:"black"}}
          ></i>
</a>
        </div>
        <div style={{display:"flex",justifyContent:"left",marginLeft:"20px"}}>
        <input type="text" placeholder="search" style={{border:"none" ,borderBottomLeftRadius:"5px" ,borderTopLeftRadius:"5px",paddingLeft:"10px",height:"40px",border:"1px solid #c3b5b5"}}></input>

<button style={{height:"40px",color:"white",backgroundColor:"rgb(17 108 201)",border:"none",width:"30px",borderBottomRightRadius:"5px" ,borderTopRightRadius:"5px",display:"flex",justifyContent:"center"}}><i class="fa-solid fa-search"
     
          ></i></button>
        
        </div>
     
        <div className="nav">

       

         

          
        </div>
        {/* <div class="dropdown p-2">
            <i
              class="fa-solid fa-bell"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>

            <ul class="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1">
              

            

            </ul>
          </div> */}
      </div>
      
    </>
  );
}

export default Nav;
