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
                // window.location.href = "home.html"

                if (error) {

                    console.log(error.message);

                } else {
                    console.log(data);
                    alert("login successflly")

                }
                window.location.href = "home.html"
            } catch (error) {
                console.log(error.message);

            }

        }
        login()
    }
})

