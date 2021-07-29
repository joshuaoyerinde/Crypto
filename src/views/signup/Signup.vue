<template>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="../../assets/img-01.png" alt="IMG">
				</div>

				<form class="login100-form validate-form" novalidate @submit.prevent="onSubmitSignUp()">
					<span class="login100-form-title">
						Member Signup
					</span>
                    <!-- username -->
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model.trim="$v.username.$model" name="email" placeholder="Username">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>
					<div class="error text-danger fs-13 ml-4 mb-1" v-if="!$v.username.required">Field is required!</div>
					<div class="error text-danger fs-13 ml-4 mb-1" v-if="!$v.username.maxLength">Name must have at least {{$v.username.$params.maxLength.max}} letters.</div>
					<!-- username -->
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model.trim="$v.fullname.$model"  placeholder="Fullname">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>
					<div class="error text-danger fs-13 ml-4 mb-1" v-if="!$v.fullname.required">Field is required!</div>
					<!-- -->
                    <!-- Email -->
                    <div class="wrap-input100 validate-input mt-1" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model.trim="$v.email.$model"  name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="error text-danger fs-14 ml-4 mb-1" v-if="!$v.email.required">Field is required!</div>
					<div class="error text-danger fs-14 ml-4 mb-1" v-if="!$v.email.email">Valid email is required: ex@abc.xyz</div>	
                    <!-- password -->
					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" v-model.trim="$v.password.$model"  name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="error text-danger fs-14 ml-4" v-if="!$v.password.required">Field is required!</div>
					<div class="error text-danger fs-13 ml-4 mb-1" v-if="!$v.password.maxLength">Name must have at least {{$v.password.$params.maxLength.max}} letters.</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Sign up
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Already
						</span>
                        <router-link to="/login">
                            have an account
                        </router-link>
					</div>

					<div class="text-center p-t-30">
						<router-link to="/login">
							Login your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

// import './signup.css'
import {required, email, maxLength} from 'vuelidate/lib/validators'
import Axios from 'axios';
export default {
    name:'Signup',
    data:()=>({
			username:'',
			fullname:'',
			email:'',
			password:'' 
        }),
		validations:{
			username:{
				required,
				maxLength:maxLength(8)
			},
			fullname:{
				required
			},
			email:{
				required,
				email
			},
			password:{
				required,
				maxLength:maxLength(8)
			}
		},
		methods:{
			onSubmitSignUp(){
				let url = "http://localhost:8000/api/register";
				let formdata = new FormData();
				formdata.append('username',this.username);
				formdata.append('fullname',this.fullname);
				formdata.append('email',this.email);
				formdata.append('password',this.password);
				console.log(this.password);
				Axios.post(url,formdata).then(res => {
						console.log(res.data)
						localStorage.setItem('access_token', res.data.access_token);
				}).catch(err => console.log(err));
				this.$router.push('/');
			}
		}
}
</script>
<style  scoped src="./signup.css"></style>
<style lang="css" scoped src="../../assets/utill.css"></style>
