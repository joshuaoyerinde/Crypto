<template>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="../../assets/img-01.png" alt="IMG">
				</div>

				<form class="login100-form validate-form" novalidate @submit.prevent="submitLogin">
					<span class="login100-form-title">
						Member Login
					</span>
					<div class="text-center text-danger error mt-n2 mb-1">{{resp}}!</div>
					<!-- <div v-if="getloginres.success">{{ getloginres.success}}</div>
					<div v-else-if="getloginres.error" class="text-danger text-center">{{getloginres.error}}</div> -->
					<div class="wrap-input100 validate-input">
						<input class="input100" type="text" v-model.trim="$v.email.$model" name="email" placeholder="Email">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
					<div class="error text-danger fs-14 ml-4 mb-1" v-if="!$v.email.required">Field is required!</div>
					<div class="error text-danger fs-14 ml-4 mb-1" v-if="!$v.email.email">Valid email is required: ex@abc.xyz</div>
					<!-- <tree-view :data="$v.email" :options="{rootObjectKey: '$v.email', maxDepth: 2}"></tree-view> -->

					<div class="wrap-input100 validate-input mt-1" data-validate = "Password is required">
						<input class="input100" type="password"  v-model.trim="$v.password.$model" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					<div class="error text-danger fs-14 ml-4" v-if="!$v.password.required">Field is required!</div>
					<!-- <div class="error text-danger fs-14 ml-4" v-if="!$v.password.maxLength">this must be max of </div> -->
					
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							Forgot
						</span>
						<router-link to="/signup">
							Username / Password?
						</router-link>
					</div>

					<div class="text-center p-t-70">
						<router-link to="/signup">
							Create your Account
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>

import {required, email} from 'vuelidate/lib/validators'
// import { mapGetters,mapActions } from 'vuex'
import Axios from 'axios'

export default {
    name: 'Login',
    data:()=>({
		email:'',
		password:'',
		resp:''
    }),
	// for validation
	validations:{
		email:{ required, email},
		password:{required}
		// resp
	},
	methods:{
		submitLogin(){
			this.$v.$touch();
			if (this.$v.$invalid){
				console.log('invalid');
			}else{
				let url = "http://localhost:8000/api/login";
				const loginData = new FormData();
				loginData.append('email',this.email);
				loginData.append('password',this.password);
				Axios.post(url, loginData).then(res=>{
				this.resp = res.data
				if(res.data.success){
					this.resp = res.data.success
				}else{
					this.resp = res.data.error
					console.log(res.data)
				}
						// console.log(response.status)
				})	
			}
		}
	},
	

}
</script>
<style lang="css" scoped src="./login.css"></style>
<style lang="css" scoped src="../../assets/utill.css"></style>

