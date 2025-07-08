const supaUrl = "https://xtjuukzhvksfolnjwvzr.supabase.co"

const supakey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0anV1a3podmtzZm9sbmp3dnpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzk5NTcsImV4cCI6MjA2NzAxNTk1N30.6CUBA7UDHtJ5md2ci1NKJ-40wGBp-oV803es5_pUCs4"


const { createClient } = supabase;

let merg = createClient(supaUrl, supakey);
console.log(merg);

let passwordInput = document.querySelector(".userpass");

icon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});

let btn = document.querySelector(".btn");
let message = document.querySelector(".message");

btn && btn.addEventListener("click", () => {
    let useremail = document.querySelector(".useremail").value;
    let userpassword = document.querySelector(".userpass").value;

    console.log(useremail, userpassword);
    if (useremail && userpassword) {

        async function sign() {

            try {
                const loader = document.getElementById("load")
                loader.style.display = "block"
                const { data, error } = await merg.auth.signUp({
                    email: useremail,
                    password: userpassword,

                })

                loader.style.display = "none"
                console.log(data);
                window.location.href = "login.html"
                if (error) {
                    console.log(error.message);
                } else {
                    console.log(data);

                }
            }
            catch (error) {
                console.log(error.message);

                // switch (key) {
                //     case value:
                //         break;
                // }
            }
        }
        sign()
    } else {
        alert("please fill the requires field")
    }

})


let google= document.querySelector(".goobtn")
google.addEventListener("click", async()=>{

let data = await merg.auth.signInWithOAuth({
  provider: 'google',

})
console.log(data);

})