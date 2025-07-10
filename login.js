const supaUrl = "https://xtjuukzhvksfolnjwvzr.supabase.co"

const supakey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0anV1a3podmtzZm9sbmp3dnpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzk5NTcsImV4cCI6MjA2NzAxNTk1N30.6CUBA7UDHtJ5md2ci1NKJ-40wGBp-oV803es5_pUCs4"

const { createClient } = supabase;

let merg = createClient(supaUrl, supakey);
console.log(merg);

let logbtn = document.querySelector(".logbtn")
let logpassInp = document.querySelector(".logpass")

icon.addEventListener("click", () => {
    if (logpassInp.type === "password") {
        logpassInp.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    } else {
        logpassInp.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    }

})

logbtn && logbtn.addEventListener("click", () => {

    let logemail = document.querySelector(".logemail").value;
    let logpass = document.querySelector(".logpass").value;

    if (logemail && logpass) {

        async function login() {
            try {
                const loader = document.getElementById("load")
                loader.style.display = "block"
                const { data, error } = await merg.auth.signInWithPassword({
                    email: logemail,
                    password: logpass,
                })

                loader.style.display = "none"
                console.log(data);

                  if(error) throw error
                if (data) {
                   window.location.href = "post.html"
                    console.log(error.message);
                }
                 
            } catch (error) {
                console.log(error.message);
                if (error.message.includes('invalid login credentials')) {
					alert('incorrect password');
				}else if(error.message.includes('invalid login credentials')){
                    	alert('Please enter a valid email address');
                }

            }

        }
        login()
    }
})


async function displaypro() {
    try{
        const {data:{user},error,} = await merg.auth.getUser();
        console.log(user);
        
      if(error) throw error
        if(user){
           if( document.querySelector("avater")){
            document.querySelector("avater").src = user.user_metadata?.avater_Url || "https://www.gravatar.com/avatar/?d=mp"
            document.querySelector("pro-name").textContent = user.user_metadata?.full_name || user.email
              document.querySelector("pro-email").textContent = user.user_metadata?.user.email
           }
           if(window.location.pathname.includes("index.html")){
            window.location.href("post.html")
           }
           else if(!window.location.pathname.includes("index.html") || window.location.pathname.includes("login.html")){
            window.location.pathname.includes("index.html")
           }
        }

    }catch(error){
       console.log("sign in error" , error );

       if(!window.location.pathname.includes("index.html") && window.location.pathname.includes("login.html")){

        window.location.href("index.html")
       }
       
    }
}
displaypro()


let logoutbtn  = document.querySelector("logout");

logoutbtn && logoutbtn.addEventListener("click",async()=>{
    try{
    const {error} = await merg.auth.signOut();
    if(error) throw error
        window.location.href = "index.html"
    
    }catch(error){
    console.error('Logout error:', error);
	alert('Logout failed');


    }
})


	