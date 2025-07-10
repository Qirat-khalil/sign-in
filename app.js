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
    let useremail = document.querySelector(".useremail")
    let userpassword = document.querySelector(".userpass")

    console.log(useremail, userpassword);
    if (useremail && userpassword) {

        async function sign() {

            try {
                const loader = document.getElementById("load")
                loader.style.display = "block"
                const { data, error } = await merg.auth.signUp({
                    email: useremail.value,
                    password: userpassword.value,
                })
				  loader.style.display = "none"
                console.log(data);

				if (data) window.location.href = 'post.html';
				if (error) throw error;
			} catch (error) {
				console.error('Signup error:', error);
				if (error.message.includes('invalid format')) {
					alert('Please enter a valid email address');
				}
				window.location.href = 'index.html';
			}
        }
        sign();
           
      }else{
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

// Initialize Supabase client with your project credentials
// const supabaseUrl = 'https://rsjicrsiqngfviugzpiy.supabase.co';
// const supabaseKey =
// 	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzamljcnNpcW5nZnZpdWd6cGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzg0MTMsImV4cCI6MjA2NzAxNDQxM30.gmFe6VIcbyzNIzRmSnbyMdIP8rFuRLXw31QKbsjZ--Q';
// const { createClient } = supabase;
// const client = createClient(supabaseUrl, supabaseKey);

// // Check and display user profile if logged in
// async function displayUserProfile() {
// 	try {
// 		const {data: { user },error,} = await client.auth.getUser();
// 		if (error) throw error;

// 		if (user) {
// 			if (document.getElementById('profile-avatar')) {
// 				document.getElementById('profile-avatar').src =
// 					user.user_metadata?.avatar_url || 'https://www.gravatar.com/avatar/?d=mp';
// 				document.getElementById('profile-name').textContent = user.user_metadata?.full_name || user.email;
// 				document.getElementById('profile-email').textContent = user.email;
// 			}
// 			if (window.location.pathname.includes('index.html')) {
// 				window.location.href = 'post.html';
// 			}
// 		} else if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
// 			window.location.href = 'index.html';
// 		}
// 	} catch (error) {
// 		console.error('Error:', error);
// 		if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
// 			window.location.href = 'index.html';
// 		}
// 	}
// }

// // Set up password visibility toggle
// const togglePassword = document.getElementById('togglePassword');
// const passwordInput = document.getElementById('signup-password');
// const eyeIcon = document.getElementById('eyeIcon');

// if (togglePassword && passwordInput && eyeIcon) {
// 	togglePassword.addEventListener('click', () => {
// 		const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
// 		passwordInput.setAttribute('type', type);
// 		eyeIcon.classList.toggle('fa-eye');
// 		eyeIcon.classList.toggle('fa-eye-slash');
// 	});
// }

// // Handle signup form submission
// const signupBtn = document.getElementById('signupBtn');
// signupBtn &&
// 	signupBtn.addEventListener('click', async () => {
// 		const email = document.getElementById('signup-email');
// 		const password = document.getElementById('signup-password');

// 		if (email && password) {
// 			try {
// 				const { data, error } = await client.auth.signUp({
// 					email: email.value,
// 					password: password.value,
// 				});
// 				if (data) window.location.href = 'post.html';
// 				if (error) throw error;
// 			} catch (error) {
// 				console.error('Signup error:', error);
// 				if (error.message.includes('invalid format')) {
// 					alert('Please enter a valid email address');
// 				}
// 			}
// 		} else {
// 			alert('Please fill all fields');
// 		}
// 	});

// // Handle login form submission
// const loginBtn = document.getElementById('loginBtn');
// loginBtn &&
// 	loginBtn.addEventListener('click', async () => {
// 		const email = document.getElementById('login-email');
// 		const password = document.getElementById('login-password');

// 		if (email && password) {
// 			try {
// 				const { data, error } = await client.auth.signInWithPassword({
// 					email: email.value,
// 					password: password.value,
// 				});
// 				if (data) window.location.href = 'post.html';
// 				if (error) throw error;
// 			} catch (error) {
// 				console.error('Login error:', error);
// 				if (error.message.includes('invalid format')) {
// 					alert('Please enter a valid email address');
// 				}
// 			}
// 		} else {
// 			alert('Please fill all fields');
// 		}
// 	});

// // Handle Google login
// const loginWithGoogle = document.getElementById('loginWithGoogle');
// loginWithGoogle &&
// 	loginWithGoogle.addEventListener('click', async () => {
// 		try {
// 			const { error } = await client.auth.signInWithOAuth({
// 				provider: 'google',
// 				options: {
// 					redirectTo: window.location.origin + '/post.html',
// 					queryParams: { access_type: 'offline', prompt: 'consent' },
// 				},
// 			});
// 			if (error) throw error;
// 		} catch (error) {
// 			console.error('Google login error:', error);
// 			alert(error.message || 'Google login failed');
// 		}
// 	});

// // Handle logout
// const logoutBtn = document.getElementById('logoutBtn');
// logoutBtn &&
// 	logoutBtn.addEventListener('click', async () => {
// 		try {
// 			const { error } = await client.auth.signOut();
// 			if (error) throw error;
// 			window.location.href = 'index.html';
// 		} catch (error) {
// 			console.error('Logout error:', error);
// 			alert('Logout failed');
// 		}
// 	});

// // Check for returning Google OAuth redirect
// document.addEventListener('DOMContentLoaded', async () => {
// 	if (window.location.hash.includes('access_token')) {
// 		const {
// 			data: { session },
// 		} = await client.auth.getSession();
// 		if (session) window.location.href = 'post.html';
// 	}
// 	if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
// 		displayUserProfile();
// 	}
// });



// btn&& btn.addEventListener("click",async()=>{

//     let useremail = document.querySelector(".useremail").value;
//     let userpassword = document.querySelector(".userpass").value;

//     if(useremail && userpassword){
//         try{
//       const {data,error} =await merg.auth.signUp({
//           email: useremail,
//             password: userpassword,
//       })
//       if (data) window.location.href("post.html")
//     if(error) throw error
//         }catch (error){
//       console.log("sign in ", error);
//       if (error.message.includes('invalid format')) {
// 					alert('Please enter a valid email address');
// 				}
      
//         }
//     }

// })