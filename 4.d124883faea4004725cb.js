(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jcJX:function(e,i,r){"use strict";r.r(i),r.d(i,"AccountModule",(function(){return we}));var t=r("3Pt+"),o=r("ofXK"),n=r("tyNb"),s=r("fXoL"),b=r("J9tS");let c=(()=>{class e{constructor(e,i){this.router=e,this.accountService=i,this.accountService.userValue&&this.router.navigate(["/"])}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(n.c),s.Kb(b.a))},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"account-page","bg-light"]],template:function(e,i){1&e&&(s.Pb(0,"div",0),s.Lb(1,"router-outlet"),s.Ob())},directives:[n.h],encapsulation:2}),e})();function a(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Email ID/Username is required"),s.Ob())}function d(e,i){if(1&e&&(s.Pb(0,"div",45),s.yc(1,a,2,0,"div",46),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.email.errors.required)}}function l(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Password is required"),s.Ob())}function u(e,i){if(1&e&&(s.Pb(0,"div",45),s.yc(1,l,2,0,"div",46),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.password.errors.required)}}function m(e,i){1&e&&s.Lb(0,"span",47)}const f=function(e){return{"is-invalid":e}};let g=(()=>{class e{constructor(e,i,r,t,o){this.formBuilder=e,this.route=i,this.router=r,this.accountService=t,this.alertService=o,this.loading=!1,this.submitted=!1}ngOnInit(){this.form=this.formBuilder.group({email:["",t.p.required],password:["",t.p.required]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.login(this.f.email.value,this.f.password.value).subscribe(e=>{this.userCheck=e,"0"==this.userCheck.success?(this.loading=!1,this.alertService.error(this.userCheck.errors)):"1"==this.userCheck.success?(this.alertService.success(this.userCheck.error,{keepAfterRouteChange:!0}),localStorage.setItem("user_id",this.userCheck.id),this.router.navigate(["../loginfirst"],{relativeTo:this.route})):this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/")},e=>{this.alertService.error("General error has occurred"),this.loading=!1}))}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(t.c),s.Kb(n.a),s.Kb(n.c),s.Kb(b.a),s.Kb(b.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:58,vars:11,consts:[[1,"bg-red"],[1,"px-5","py-2"],[1,"align-items-center"],[1,"border-title"],[1,"fa","fa-bars"],[1,"h5","text-white","ml-2"],[1,"col-md-8","offset-md-2","mt-6","shadow","p-0","login-body"],[1,"singup-body"],[1,"container"],[1,"row"],[1,"col","p-0"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-row"],[1,"form-group","form-check","col-4"],["type","checkbox","id","remenber",1,"form-check-input"],["for","remenber",1,"form-check-label"],[1,"form-group","col-8"],[1,"text-right"],["routerLink","#",1,"bt"],[1,"form-group","row","justify-content-center","mt-3","mb-5"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"omb_row-sm-offset-3","omb_socialButtons","text-center"],[1,"list-inline","mb-0"],[1,"list-inline-item"],["href","#",1,"btn","btn-xs","btn-icon","btn-ghost-light","facebook"],[1,"fa","fa-facebook-f"],["href","#",1,"btn","btn-xs","btn-icon","btn-ghost-light","linkedin"],[1,"fa","fa-linkedin"],["href","#",1,"btn","btn-xs","btn-icon","btn-ghost-light","instagram"],[1,"fa","fa-google-plus"],[1,"col","p-0","d-flex","align-items-center","justify-content-center","bg-navy","bg-img-hero",2,"background-image","url(assets/img/others/login-1.png)"],[1,"account-second-side","text-center"],["src","assets/img/singin.png","alt","",1,"img-fluid"],[1,"text-white"],["routerLink","../register",1,"btn","btn-light","bt","btn-lg"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,i){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"span",3),s.Lb(4,"i",4),s.Ob(),s.Pb(5,"span",5),s.Ac(6,"Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"div",6),s.Pb(8,"div",7),s.Pb(9,"div",8),s.Pb(10,"div",9),s.Pb(11,"div",10),s.Pb(12,"div",11),s.Pb(13,"h4",12),s.Ac(14,"Login"),s.Ob(),s.Pb(15,"div",13),s.Pb(16,"form",14),s.ac("ngSubmit",(function(){return i.onSubmit()})),s.Pb(17,"div",15),s.Pb(18,"label",16),s.Ac(19,"Email ID/UserName"),s.Ob(),s.Lb(20,"input",17),s.yc(21,d,2,1,"div",18),s.Ob(),s.Pb(22,"div",15),s.Pb(23,"label",19),s.Ac(24,"Password"),s.Ob(),s.Lb(25,"input",20),s.yc(26,u,2,1,"div",18),s.Ob(),s.Pb(27,"div",21),s.Pb(28,"div",22),s.Lb(29,"input",23),s.Pb(30,"label",24),s.Ac(31,"Remember"),s.Ob(),s.Ob(),s.Pb(32,"div",25),s.Pb(33,"p",26),s.Pb(34,"a",27),s.Ac(35,"Forgot Username/Password"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(36,"div",28),s.Pb(37,"button",29),s.yc(38,m,1,0,"span",30),s.Ac(39," Login "),s.Ob(),s.Ob(),s.Ob(),s.Pb(40,"div",31),s.Pb(41,"ul",32),s.Pb(42,"li",33),s.Pb(43,"a",34),s.Lb(44,"i",35),s.Ob(),s.Ob(),s.Pb(45,"li",33),s.Pb(46,"a",36),s.Lb(47,"i",37),s.Ob(),s.Ob(),s.Pb(48,"li",33),s.Pb(49,"a",38),s.Lb(50,"i",39),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(51,"div",40),s.Pb(52,"div",41),s.Lb(53,"img",42),s.Pb(54,"p",43),s.Ac(55,"Not a member yet?"),s.Ob(),s.Pb(56,"a",44),s.Ac(57,"SingUp Now"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.xb(16),s.ic("formGroup",i.form),s.xb(4),s.ic("ngClass",s.mc(7,f,i.submitted&&i.f.email.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.email.errors),s.xb(4),s.ic("ngClass",s.mc(9,f,i.submitted&&i.f.password.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.password.errors),s.xb(11),s.ic("disabled",i.loading),s.xb(1),s.ic("ngIf",i.loading))},directives:[t.r,t.j,t.e,t.b,t.i,t.d,o.j,o.l,n.f],encapsulation:2}),e})();function p(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Mobile Number is required"),s.Ob())}function h(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Mobile Number must be at least 10 digits"),s.Ob())}function v(e,i){if(1&e&&(s.Pb(0,"div",41),s.yc(1,p,2,0,"div",42),s.yc(2,h,2,0,"div",42),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.mobile.errors.required),s.xb(1),s.ic("ngIf",e.f.mobile.errors.pattern)}}function P(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Email id is required"),s.Ob())}function O(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Email must be a valid email address"),s.Ob())}function y(e,i){if(1&e&&(s.Pb(0,"div",41),s.yc(1,P,2,0,"div",42),s.yc(2,O,2,0,"div",42),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.email.errors.required),s.xb(1),s.ic("ngIf",e.f.email.errors.email)}}function x(e,i){1&e&&(s.Pb(0,"div",41),s.Ac(1,"Accept Ts & Cs is required"),s.Ob())}function A(e,i){1&e&&s.Lb(0,"span",43)}const w=function(e){return{"is-invalid":e}};let I=(()=>{class e{constructor(e,i,r,t,o){this.formBuilder=e,this.route=i,this.router=r,this.accountService=t,this.alertService=o,this.loading=!1,this.submitted=!1,this.step=1,this.userExists=[]}ngOnInit(){this.form=this.formBuilder.group({email:["",[t.p.required,t.p.email]],mobile:["",[t.p.required,t.p.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],acceptTerms:[!1,t.p.requiredTrue]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.checkUserExists(this.form.value).subscribe(e=>{this.userExists=e,"1"==this.userExists.usersexist||"2"==this.userExists.usersexist?(this.alertService.error(this.userExists.error),this.loading=!1):(this.alertService.success("Otp send to your mobile and email successful",{keepAfterRouteChange:!0}),localStorage.setItem("reg_id",this.userExists.reg_id),localStorage.setItem("email_otp",this.userExists.email),localStorage.setItem("mobile_otp",this.userExists.mobile_number),this.router.navigate(["../registerotp"],{relativeTo:this.route}))},e=>{this.alertService.error("General error has occurred"),this.loading=!1}))}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(t.c),s.Kb(n.a),s.Kb(n.c),s.Kb(b.a),s.Kb(b.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:54,vars:15,consts:[[1,"bg-red"],[1,"px-5","py-2"],[1,"align-items-center"],[1,"border-title"],[1,"fa","fa-bars"],[1,"h5","text-white","ml-2"],[1,"col-md-8","offset-md-2","mt-6","shadow","p-0","login-body"],[1,"singup-body"],[1,"container"],[1,"row"],[1,"col","p-0"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["for","username"],["type","number","formControlName","mobile",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"form-group"],["type","email","formControlName","email",1,"form-control",3,"ngClass"],[1,"form-group","form-check"],["type","checkbox","formControlName","acceptTerms","id","acceptTerms",1,"form-check-input",3,"ngClass"],["for","acceptTerms",1,"form-check-label"],[1,"form-group","row","justify-content-center","mt-4","mb-5"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"omb_row-sm-offset-3","omb_socialButtons","text-center"],[1,"list-inline","mb-0"],[1,"list-inline-item"],["href","#",1,"btn","btn-xs","btn-icon","btn-ghost-light","facebook"],[1,"fa","fa-facebook-f"],["href","#",1,"btn","btn-xs","btn-icon","btn-ghost-light","linkedin"],[1,"fa","fa-linkedin"],["href","#",1,"btn","btn-xs","btn-icon","btn-ghost-light","instagram"],[1,"fa","fa-google-plus"],[1,"col","p-0","d-flex","align-items-center","justify-content-center","bg-navy","bg-img-hero",2,"background-image","url(assets/img/others/singup.png)"],[1,"account-second-side","text-center"],["src","assets/img/singin.png","alt","",1,"img-fluid"],[1,"text-white"],["routerLink","../login",1,"btn","btn-light","bt","btn-lg"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,i){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"span",3),s.Lb(4,"i",4),s.Ob(),s.Pb(5,"span",5),s.Ac(6,"Signup @ Eiliana"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"div",6),s.Pb(8,"div",7),s.Pb(9,"div",8),s.Pb(10,"div",9),s.Pb(11,"div",10),s.Pb(12,"div",11),s.Pb(13,"h4",12),s.Ac(14,"Signup"),s.Ob(),s.Pb(15,"div",13),s.Pb(16,"form",14),s.ac("ngSubmit",(function(){return i.onSubmit()})),s.Pb(17,"div",15),s.Pb(18,"label",16),s.Ac(19,"Mobile Number"),s.Ob(),s.Lb(20,"input",17),s.yc(21,v,3,2,"div",18),s.Ob(),s.Pb(22,"div",19),s.Pb(23,"label",16),s.Ac(24,"Email ID"),s.Ob(),s.Lb(25,"input",20),s.yc(26,y,3,2,"div",18),s.Ob(),s.Pb(27,"div",21),s.Lb(28,"input",22),s.Pb(29,"label",23),s.Ac(30,"I agree to the Eiliana User agreement and privacy policy"),s.Ob(),s.yc(31,x,2,0,"div",18),s.Ob(),s.Pb(32,"div",24),s.Pb(33,"button",25),s.yc(34,A,1,0,"span",26),s.Ac(35," Continue with OTP "),s.Ob(),s.Ob(),s.Ob(),s.Pb(36,"div",27),s.Pb(37,"ul",28),s.Pb(38,"li",29),s.Pb(39,"a",30),s.Lb(40,"i",31),s.Ob(),s.Ob(),s.Pb(41,"li",29),s.Pb(42,"a",32),s.Lb(43,"i",33),s.Ob(),s.Ob(),s.Pb(44,"li",29),s.Pb(45,"a",34),s.Lb(46,"i",35),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(47,"div",36),s.Pb(48,"div",37),s.Lb(49,"img",38),s.Pb(50,"p",39),s.Ac(51,"Already have an account?"),s.Ob(),s.Pb(52,"a",40),s.Ac(53,"Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.xb(16),s.ic("formGroup",i.form),s.xb(4),s.ic("ngClass",s.mc(9,w,i.submitted&&i.f.mobile.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.mobile.errors),s.xb(4),s.ic("ngClass",s.mc(11,w,i.submitted&&i.f.email.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.email.errors),s.xb(2),s.ic("ngClass",s.mc(13,w,i.submitted&&i.f.acceptTerms.errors)),s.xb(3),s.ic("ngIf",i.submitted&&i.f.acceptTerms.errors),s.xb(2),s.ic("disabled",i.loading),s.xb(1),s.ic("ngIf",i.loading))},directives:[t.r,t.j,t.e,t.l,t.b,t.i,t.d,o.j,o.l,t.a,n.f],encapsulation:2}),e})();function C(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Email Otp is required"),s.Ob())}function S(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Email Otp must be at least 4 digits"),s.Ob())}function k(e,i){if(1&e&&(s.Pb(0,"div",36),s.yc(1,C,2,0,"div",37),s.yc(2,S,2,0,"div",37),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.otp.errors.required),s.xb(1),s.ic("ngIf",e.f.otp.errors.minlength)}}function L(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Mobile Otp is required"),s.Ob())}function q(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Mobile Otp must be at least 4 digits"),s.Ob())}function N(e,i){if(1&e&&(s.Pb(0,"div",36),s.yc(1,L,2,0,"div",37),s.yc(2,q,2,0,"div",37),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.otpm.errors.required),s.xb(1),s.ic("ngIf",e.f.otpm.errors.minlength)}}function _(e,i){1&e&&s.Lb(0,"span",38)}const E=function(e){return{"is-invalid":e}};let K=(()=>{class e{constructor(e,i,r,t,o){this.formBuilder=e,this.route=i,this.router=r,this.accountService=t,this.alertService=o,this.loading=!1,this.submitted=!1,this.reg_id=localStorage.getItem("reg_id"),this.mobile_otp=localStorage.getItem("mobile_otp"),this.email_otp=localStorage.getItem("email_otp")}ngOnInit(){this.form=this.formBuilder.group({reg_id:this.reg_id,otp:["",[t.p.required,t.p.minLength(4)]],otpm:["",[t.p.required,t.p.minLength(4)]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.verifyotp(this.form.value).subscribe(e=>{this.userExists=e,"0"==this.userExists.success?(this.alertService.error(this.userExists.errors),this.loading=!1):(this.alertService.success("Otp verify successful",{keepAfterRouteChange:!0}),this.router.navigate(["../registerbasic"],{relativeTo:this.route}))},e=>{this.alertService.error("General error has occurred"),this.loading=!1}))}resendOtp(){console.log("otp send")}otpController(e,i,r){if(e.target.value.length<1&&r)r.setFocus();else{if(!(i&&e.target.value.length>0))return 0;i.setFocus()}}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(t.c),s.Kb(n.a),s.Kb(n.c),s.Kb(b.a),s.Kb(b.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["ng-component"]],decls:53,vars:13,consts:[[1,"bg-red"],[1,"px-5","py-2"],[1,"align-items-center"],[1,"border-title"],[1,"fa","fa-bars"],[1,"h5","text-white","ml-2"],[1,"col-md-8","offset-md-2","mt-6","shadow","p-0","login-body"],[1,"singup-body","register-otp"],[1,"container"],[1,"row"],[1,"col","p-0"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"text-center","mb-4"],["src","assets/img/otp-verif.png","alt","",1,"img-fluid"],[1,"d-flex"],[1,"fa","fa-arrow-right"],[1,"text-dark"],[1,"text-secondary","ml-4"],[1,"list-form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","otp"],["type","text","formControlName","otp",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","otpm"],["type","text","formControlName","otpm",1,"form-control",3,"ngClass"],[1,"form-group","row","justify-content-center","mt-5","mb-2"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"bt","text-blue",3,"click"],[1,"col","p-0","d-flex","align-items-center","justify-content-center","bg-navy","bg-img-hero",2,"background-image","url(assets/img/others/OTP-verification.png)"],[1,"account-second-side","text-center"],["src","assets/img/singin.png","alt","",1,"img-fluid"],[1,"text-white"],["routerLink","../login",1,"btn","btn-light","bt","btn-lg"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,i){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"span",3),s.Lb(4,"i",4),s.Ob(),s.Pb(5,"span",5),s.Ac(6,"OTP Verification"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"div",6),s.Pb(8,"div",7),s.Pb(9,"div",8),s.Pb(10,"div",9),s.Pb(11,"div",10),s.Pb(12,"div",11),s.Pb(13,"h4",12),s.Ac(14,"Otp Verification"),s.Ob(),s.Pb(15,"div",13),s.Pb(16,"div",14),s.Lb(17,"img",15),s.Ob(),s.Pb(18,"p",16),s.Lb(19,"i",17),s.Pb(20,"span",18),s.Ac(21,"Please enter the one-time password to verify your account"),s.Ob(),s.Ob(),s.Pb(22,"p",19),s.Ac(23,"A one time password has been send to "),s.Pb(24,"b"),s.Ac(25),s.Ob(),s.Ac(26," and Email "),s.Pb(27,"b"),s.Ac(28),s.Ob(),s.Ob(),s.Pb(29,"form",20),s.ac("ngSubmit",(function(){return i.onSubmit()})),s.Pb(30,"div",21),s.Pb(31,"label",22),s.Ac(32,"OTP For Email"),s.Ob(),s.Lb(33,"input",23),s.yc(34,k,3,2,"div",24),s.Ob(),s.Pb(35,"div",21),s.Pb(36,"label",25),s.Ac(37,"OTP For Mobile"),s.Ob(),s.Lb(38,"input",26),s.yc(39,N,3,2,"div",24),s.Ob(),s.Pb(40,"div",27),s.Pb(41,"button",28),s.yc(42,_,1,0,"span",29),s.Ac(43," Validate "),s.Ob(),s.Pb(44,"a",30),s.ac("click",(function(){return i.resendOtp()})),s.Ac(45,"Resend One-Time-Password"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(46,"div",31),s.Pb(47,"div",32),s.Lb(48,"img",33),s.Pb(49,"p",34),s.Ac(50,"Already have an account?"),s.Ob(),s.Pb(51,"a",35),s.Ac(52,"Login"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.xb(25),s.Bc(i.mobile_otp),s.xb(3),s.Bc(i.email_otp),s.xb(1),s.ic("formGroup",i.form),s.xb(4),s.ic("ngClass",s.mc(9,E,i.submitted&&i.f.otp.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.otp.errors),s.xb(4),s.ic("ngClass",s.mc(11,E,i.submitted&&i.f.otpm.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.otpm.errors),s.xb(2),s.ic("disabled",i.loading),s.xb(1),s.ic("ngIf",i.loading))},directives:[t.r,t.j,t.e,t.b,t.i,t.d,o.j,o.l,n.f],encapsulation:2}),e})();function D(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Email id is required"),s.Ob())}function B(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,D,2,0,"div",45),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.applyas.errors.required)}}function j(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Company Name is required"),s.Ob())}function M(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,j,2,0,"div",45),s.Ob()),2&e){const e=s.cc(2);s.xb(1),s.ic("ngIf",e.f.company_name.errors.required)}}const T=function(e){return{"is-invalid":e}};function U(e,i){if(1&e&&(s.Pb(0,"div",12),s.Pb(1,"label"),s.Ac(2,"Company Name"),s.Ob(),s.Lb(3,"input",55),s.yc(4,M,2,1,"div",19),s.Ob()),2&e){const e=s.cc();s.xb(3),s.ic("ngClass",s.mc(2,T,e.submitted&&e.f.company_name.errors)),s.xb(1),s.ic("ngIf",e.submitted&&e.f.company_name.errors)}}function Y(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Title is required"),s.Ob())}function F(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,Y,2,0,"div",45),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.title.errors.required)}}function G(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Profile Anonymous is required"),s.Ob())}function R(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,G,2,0,"div",45),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.anonymous.errors.required)}}function J(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"First Name is required"),s.Ob())}function V(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,J,2,0,"div",45),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.first_name.errors.required)}}function X(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Last Name is required"),s.Ob())}function $(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,X,2,0,"div",45),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.last_name.errors.required)}}function H(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Alias is required"),s.Ob())}function z(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,H,2,0,"div",45),s.Ob()),2&e){const e=s.cc(2);s.xb(1),s.ic("ngIf",e.f.pseudoName.errors.required)}}function Q(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Date of Birth is required"),s.Ob())}function W(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Date of Birth must be a valid date in the format YYYY-MM-DD"),s.Ob())}function Z(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,Q,2,0,"div",45),s.yc(2,W,2,0,"div",45),s.Ob()),2&e){const e=s.cc(2);s.xb(1),s.ic("ngIf",e.f.dob.errors.required),s.xb(1),s.ic("ngIf",e.f.dob.errors.pattern)}}function ee(e,i){if(1&e&&(s.Pb(0,"div",34),s.Pb(1,"div",56),s.Pb(2,"label"),s.Ac(3,"Alias"),s.Ob(),s.Lb(4,"input",57),s.yc(5,z,2,1,"div",19),s.Ob(),s.Pb(6,"div",56),s.Pb(7,"label"),s.Ac(8,"DOB"),s.Ob(),s.Lb(9,"input",58),s.yc(10,Z,3,2,"div",19),s.Ob(),s.Ob()),2&e){const e=s.cc();s.xb(4),s.ic("ngClass",s.mc(4,T,e.submitted&&e.f.pseudoName.errors)),s.xb(1),s.ic("ngIf",e.submitted&&e.f.pseudoName.errors),s.xb(4),s.ic("ngClass",s.mc(6,T,e.submitted&&e.f.dob.errors)),s.xb(1),s.ic("ngIf",e.submitted&&e.f.dob.errors)}}function ie(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Date of Birth is required"),s.Ob())}function re(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Date of Birth must be a valid date in the format YYYY-MM-DD"),s.Ob())}function te(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,ie,2,0,"div",45),s.yc(2,re,2,0,"div",45),s.Ob()),2&e){const e=s.cc(2);s.xb(1),s.ic("ngIf",e.f.dob.errors.required),s.xb(1),s.ic("ngIf",e.f.dob.errors.pattern)}}function oe(e,i){if(1&e&&(s.Pb(0,"div",12),s.Pb(1,"label"),s.Ac(2,"DOB"),s.Ob(),s.Lb(3,"input",58),s.yc(4,te,3,2,"div",19),s.Ob()),2&e){const e=s.cc();s.xb(3),s.ic("ngClass",s.mc(2,T,e.submitted&&e.f.dob.errors)),s.xb(1),s.ic("ngIf",e.submitted&&e.f.dob.errors)}}function ne(e,i){if(1&e&&(s.Pb(0,"option",59),s.Ac(1),s.Ob()),2&e){const e=i.$implicit;s.jc("value",e.id),s.xb(1),s.Bc(e.name)}}function se(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Country is required"),s.Ob())}function be(e,i){if(1&e&&(s.Pb(0,"div",54),s.yc(1,se,2,0,"div",45),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.country.errors.required)}}function ce(e,i){if(1&e&&(s.Pb(0,"div"),s.Ac(1),s.Ob()),2&e){const e=s.cc();s.xb(1),s.Cc(" Upload progress: ",e.fileUploadProgress," ")}}function ae(e,i){if(1&e&&(s.Pb(0,"div",60),s.Lb(1,"img",61),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("src",e.previewUrl,s.tc)}}function de(e,i){if(1&e&&(s.Pb(0,"div",62),s.Ac(1),s.Ob()),2&e){const e=s.cc();s.xb(1),s.Cc(" ",e.uploadedFilePath," ")}}function le(e,i){1&e&&s.Lb(0,"span",63)}let ue=(()=>{class e{constructor(e,i,r,t,o){this.formBuilder=e,this.route=i,this.router=r,this.accountService=t,this.alertService=o,this.loading=!1,this.submitted=!1,this.step=1,this.userDatas=[],this.fileData=null,this.previewUrl=null,this.fileUploadProgress=null,this.uploadedFilePath=null,this.countries=null,this.anonymousShow=!0,this.companyShow=!1,this.registration_id=localStorage.getItem("reg_id"),this.username=Math.random().toString(36).substring(7),this.password=Math.random().toString(36).substring(7)}ngOnInit(){this.accountService.getAllCountry().subscribe(e=>{this.countries=e}),this.form=this.formBuilder.group({registration_id:this.registration_id,username:this.username,password:this.password,password_confirm:this.password,applyas:["",[t.p.required]],title:["",[t.p.required]],anonymous:["",[t.p.required]],company_name:[null],first_name:["",[t.p.required]],middle_name:[null],last_name:["",[t.p.required]],dob:["",[t.p.required,t.p.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],pseudoName:[null],country:["",[t.p.required]],govtId:[null],idProofNo:[null]})}get f(){return this.form.controls}fileProgress(e){this.fileData=e.target.files[0],this.preview()}preview(){if(null!=this.fileData.type.match(/image\/*/)){var e=new FileReader;e.readAsDataURL(this.fileData),e.onload=i=>{this.previewUrl=e.result}}}onSubmit(){if(this.submitted=!0,this.alertService.clear(),this.form.invalid)return;let e=JSON.parse(JSON.stringify(this.form.value));this.loading=!0,this.accountService.register(e).subscribe(e=>{console.log(e),this.userDatas=e,"0"==this.userDatas.success?(this.alertService.error(this.userDatas.errors),this.loading=!1):(this.alertService.success("Account sucessfully created, Login credentials send to your email!",{keepAfterRouteChange:!0}),localStorage.removeItem("reg_id"),this.router.navigate(["../login"],{relativeTo:this.route}))},e=>{this.alertService.error("General error has occurred"),this.loading=!1})}onReset(){this.submitted=!1,this.form.reset()}changeAnonymus(e){this.publicAnonymus=e.target.value,console.log(this.publicAnonymus),this.anonymousShow="1"==this.publicAnonymus}changeCompnay(e){this.companyShow=2!=e.target.value}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(t.c),s.Kb(n.a),s.Kb(n.c),s.Kb(b.a),s.Kb(b.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-register-basic"]],decls:94,vars:28,consts:[[1,"bg-red"],[1,"px-5","py-2"],[1,"align-items-center"],[1,"border-title"],[1,"fa","fa-bars"],[1,"h5","text-white","ml-2"],[1,"col-md-7","offset-md-20","mt-6","shadow","p-0","registration-basic"],[1,"singup-body","login-body"],[1,"card"],[1,"card-header","text-left"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","applyas"],["formControlName","applyas",1,"form-control",3,"ngClass","change"],["value",""],["value","2"],["value","5"],["value","4"],["class","invalid-feedback",4,"ngIf"],["class","form-group",4,"ngIf"],[1,"form-group","basic-info"],[1,"form-check","form-check-inline","ml-3"],[1,"custom-control","custom-radio"],["type","radio","id","mr","formControlName","title","value","Mr","checked","",1,"custom-control-input"],["for","mr",1,"custom-control-label"],[1,"form-check","form-check-inline"],["type","radio","id","mrs","formControlName","title","value","Mrs",1,"custom-control-input"],["for","mrs",1,"custom-control-label"],[1,"form-check","form-check-inline","mb-3"],["type","radio","id","Yes","formControlName","anonymous","value","1",1,"custom-control-input",3,"change"],["for","Yes",1,"custom-control-label"],["type","radio","id","No","formControlName","anonymous","value","0",1,"custom-control-input",3,"change"],["for","No",1,"custom-control-label"],[1,"form-row"],[1,"form-group","col-6"],["type","text","formControlName","first_name",1,"form-control",3,"ngClass"],["type","text","formControlName","last_name",1,"form-control",3,"ngClass"],[1,"form-group","d-none"],["type","text","formControlName","middle_name",1,"form-control"],["class","form-row",4,"ngIf","ngIfElse"],["elseBlock",""],["for","country"],["formControlName","country",1,"form-control",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["class","image-preview mb-3",4,"ngIf"],["class","mb-3",4,"ngIf"],[1,"form-group","text-right","mt-5"],["role","group",1,"btn-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"fa","fa-angle-right"],["type","reset",1,"btn","btn-outline-primary",3,"click"],[1,"invalid-feedback"],["type","text","formControlName","company_name",1,"form-control",3,"ngClass"],[1,"form-group","col"],["type","text","formControlName","pseudoName",1,"form-control",3,"ngClass"],["type","date","placeholder","DD/MM/YYYY","formControlName","dob",1,"form-control",3,"ngClass"],[3,"value"],[1,"image-preview","mb-3"],["height","300",3,"src"],[1,"mb-3"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,i){if(1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"span",3),s.Lb(4,"i",4),s.Ob(),s.Pb(5,"span",5),s.Ac(6,"Account Registration"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"div",6),s.Pb(8,"div",7),s.Pb(9,"div",8),s.Pb(10,"h4",9),s.Ac(11,"Basic Info"),s.Ob(),s.Pb(12,"div",10),s.Pb(13,"form",11),s.ac("ngSubmit",(function(){return i.onSubmit()})),s.Pb(14,"div",12),s.Pb(15,"label",13),s.Ac(16,"Apply As"),s.Ob(),s.Pb(17,"select",14),s.ac("change",(function(e){return i.changeCompnay(e)})),s.Pb(18,"option",15),s.Ac(19,"--Select--"),s.Ob(),s.Pb(20,"option",16),s.Ac(21,"Individual"),s.Ob(),s.Pb(22,"option",17),s.Ac(23,"Private Limited"),s.Ob(),s.Pb(24,"option",18),s.Ac(25,"LLP"),s.Ob(),s.Ob(),s.yc(26,B,2,1,"div",19),s.Ob(),s.yc(27,U,5,4,"div",20),s.Pb(28,"div",21),s.Pb(29,"label"),s.Ac(30,"Title"),s.Ob(),s.Pb(31,"div",22),s.Pb(32,"div",23),s.Lb(33,"input",24),s.Pb(34,"label",25),s.Ac(35,"Mr."),s.Ob(),s.Ob(),s.Ob(),s.Pb(36,"div",26),s.Pb(37,"div",23),s.Lb(38,"input",27),s.Pb(39,"label",28),s.Ac(40,"Mrs."),s.Ob(),s.Ob(),s.Ob(),s.yc(41,F,2,1,"div",19),s.Ob(),s.Pb(42,"div",21),s.Pb(43,"label"),s.Ac(44,"Do you keep your profile anonymous?"),s.Ob(),s.Lb(45,"br"),s.Pb(46,"div",29),s.Pb(47,"div",23),s.Pb(48,"input",30),s.ac("change",(function(e){return i.changeAnonymus(e)})),s.Ob(),s.Pb(49,"label",31),s.Ac(50,"Yes"),s.Ob(),s.Ob(),s.Ob(),s.Pb(51,"div",26),s.Pb(52,"div",23),s.Pb(53,"input",32),s.ac("change",(function(e){return i.changeAnonymus(e)})),s.Ob(),s.Pb(54,"label",33),s.Ac(55,"No"),s.Ob(),s.Ob(),s.Ob(),s.yc(56,R,2,1,"div",19),s.Ob(),s.Pb(57,"div",34),s.Pb(58,"div",35),s.Pb(59,"label"),s.Ac(60,"First Name"),s.Ob(),s.Lb(61,"input",36),s.yc(62,V,2,1,"div",19),s.Ob(),s.Pb(63,"div",35),s.Pb(64,"label"),s.Ac(65,"Last Name"),s.Ob(),s.Lb(66,"input",37),s.yc(67,$,2,1,"div",19),s.Ob(),s.Ob(),s.Pb(68,"div",38),s.Pb(69,"label"),s.Ac(70,"Middle Name"),s.Ob(),s.Lb(71,"input",39),s.Ob(),s.yc(72,ee,11,8,"div",40),s.yc(73,oe,5,4,"ng-template",null,41,s.zc),s.Pb(75,"div",12),s.Pb(76,"label",42),s.Ac(77,"Country"),s.Ob(),s.Pb(78,"select",43),s.Pb(79,"option",15),s.Ac(80,"--Select--"),s.Ob(),s.yc(81,ne,2,2,"option",44),s.Ob(),s.yc(82,be,2,1,"div",19),s.Ob(),s.yc(83,ce,2,1,"div",45),s.yc(84,ae,2,1,"div",46),s.yc(85,de,2,1,"div",47),s.Pb(86,"div",48),s.Pb(87,"div",49),s.Pb(88,"button",50),s.yc(89,le,1,0,"span",51),s.Ac(90," Next "),s.Lb(91,"i",52),s.Ob(),s.Pb(92,"button",53),s.ac("click",(function(){return i.onReset()})),s.Ac(93,"Discard"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e){const e=s.qc(74);s.xb(13),s.ic("formGroup",i.form),s.xb(4),s.ic("ngClass",s.mc(20,T,i.submitted&&i.f.applyas.errors)),s.xb(9),s.ic("ngIf",i.submitted&&i.f.applyas.errors),s.xb(1),s.ic("ngIf",i.companyShow),s.xb(14),s.ic("ngIf",i.submitted&&i.f.title.errors),s.xb(15),s.ic("ngIf",i.submitted&&i.f.anonymous.errors),s.xb(5),s.ic("ngClass",s.mc(22,T,i.submitted&&i.f.first_name.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.first_name.errors),s.xb(4),s.ic("ngClass",s.mc(24,T,i.submitted&&i.f.last_name.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.last_name.errors),s.xb(5),s.ic("ngIf",i.anonymousShow)("ngIfElse",e),s.xb(6),s.ic("ngClass",s.mc(26,T,i.submitted&&i.f.country.errors)),s.xb(3),s.ic("ngForOf",i.countries),s.xb(1),s.ic("ngIf",i.submitted&&i.f.country.errors),s.xb(1),s.ic("ngIf",i.fileUploadProgress),s.xb(1),s.ic("ngIf",i.previewUrl),s.xb(1),s.ic("ngIf",i.uploadedFilePath),s.xb(3),s.ic("disabled",i.loading),s.xb(1),s.ic("ngIf",i.loading)}},directives:[t.r,t.j,t.e,t.o,t.i,t.d,o.j,t.k,t.q,o.l,t.m,t.b,o.k],encapsulation:2}),e})();var me=r("XgRA");function fe(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Password is required"),s.Ob())}function ge(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Password must be at least 6 characters"),s.Ob())}function pe(e,i){if(1&e&&(s.Pb(0,"div",27),s.yc(1,fe,2,0,"div",28),s.yc(2,ge,2,0,"div",28),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.password.errors.required),s.xb(1),s.ic("ngIf",e.f.password.errors.minlength)}}function he(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Confirm Password is required"),s.Ob())}function ve(e,i){1&e&&(s.Pb(0,"div"),s.Ac(1,"Passwords must match"),s.Ob())}function Pe(e,i){if(1&e&&(s.Pb(0,"div",27),s.yc(1,he,2,0,"div",28),s.yc(2,ve,2,0,"div",28),s.Ob()),2&e){const e=s.cc();s.xb(1),s.ic("ngIf",e.f.confirmPassword.errors.required),s.xb(1),s.ic("ngIf",e.f.confirmPassword.errors.mustMatch)}}function Oe(e,i){1&e&&s.Lb(0,"span",29)}const ye=function(e){return{"is-invalid":e}},xe=[{path:"",component:c,children:[{path:"login",component:g},{path:"register",component:I},{path:"registerotp",component:K},{path:"registerbasic",component:ue},{path:"loginfirst",component:(()=>{class e{constructor(e,i,r,t,o){this.formBuilder=e,this.route=i,this.router=r,this.accountService=t,this.alertService=o,this.loading=!1,this.submitted=!1,this.user_id=localStorage.getItem("user_id")}ngOnInit(){this.form=this.formBuilder.group({user_id:this.user_id,password:["",[t.p.required,t.p.minLength(6)]],confirmPassword:["",t.p.required]},{validator:Object(me.d)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.loginFirst(this.form.value).subscribe(e=>{console.log(e),this.userCheck=e,"0"==this.userCheck.success?(this.alertService.error(this.userCheck.error),this.loading=!1):(this.alertService.success("Password changed sucessfully!",{keepAfterRouteChange:!0}),localStorage.removeItem("reg_id"),this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl||"/"))},e=>{this.alertService.error("General error has occurred"),this.loading=!1}))}}return e.\u0275fac=function(i){return new(i||e)(s.Kb(t.c),s.Kb(n.a),s.Kb(n.c),s.Kb(b.a),s.Kb(b.b))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-login-first"]],decls:39,vars:11,consts:[[1,"bg-red"],[1,"px-5","py-2"],[1,"align-items-center"],[1,"border-title"],[1,"fa","fa-bars"],[1,"h5","text-white","ml-2"],[1,"col-md-8","offset-md-2","mt-6","shadow","p-0"],[1,"singup-body","login-body"],[1,"container"],[1,"row"],[1,"col","p-0"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"form-group","row","justify-content-center","mt-3","mb-5"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"col","p-0","d-flex","align-items-center","justify-content-center","bg-navy","bg-img-hero",2,"background-image","url(assets/img/others/OTP-verification.png)"],[1,"account-second-side","text-center"],["src","assets/img/singin.png","alt","",1,"img-fluid"],[1,"text-white"],["routerLink","../register",1,"btn","btn-light","bt","btn-lg"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,i){1&e&&(s.Pb(0,"div",0),s.Pb(1,"div",1),s.Pb(2,"div",2),s.Pb(3,"span",3),s.Lb(4,"i",4),s.Ob(),s.Pb(5,"span",5),s.Ac(6,"Change Your Password"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(7,"div",6),s.Pb(8,"div",7),s.Pb(9,"div",8),s.Pb(10,"div",9),s.Pb(11,"div",10),s.Pb(12,"div",11),s.Pb(13,"h4",12),s.Ac(14,"Change Your Password"),s.Ob(),s.Pb(15,"div",13),s.Pb(16,"form",14),s.ac("ngSubmit",(function(){return i.onSubmit()})),s.Pb(17,"div",15),s.Pb(18,"label"),s.Ac(19,"Password"),s.Ob(),s.Lb(20,"input",16),s.yc(21,pe,3,2,"div",17),s.Ob(),s.Pb(22,"div",15),s.Pb(23,"label"),s.Ac(24,"Confirm Password"),s.Ob(),s.Lb(25,"input",18),s.yc(26,Pe,3,2,"div",17),s.Ob(),s.Pb(27,"div",19),s.Pb(28,"button",20),s.yc(29,Oe,1,0,"span",21),s.Ac(30," Change Password "),s.Ob(),s.Lb(31,"br"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(32,"div",22),s.Pb(33,"div",23),s.Lb(34,"img",24),s.Pb(35,"p",25),s.Ac(36,"Not a member yet?"),s.Ob(),s.Pb(37,"a",26),s.Ac(38,"SingUp Now"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.xb(16),s.ic("formGroup",i.form),s.xb(4),s.ic("ngClass",s.mc(7,ye,i.submitted&&i.f.password.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.password.errors),s.xb(4),s.ic("ngClass",s.mc(9,ye,i.submitted&&i.f.confirmPassword.errors)),s.xb(1),s.ic("ngIf",i.submitted&&i.f.confirmPassword.errors),s.xb(2),s.ic("disabled",i.loading),s.xb(1),s.ic("ngIf",i.loading))},directives:[t.r,t.j,t.e,t.b,t.i,t.d,o.j,o.l,n.f],styles:[""]}),e})()}]}];let Ae=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(i){return new(i||e)},imports:[[n.g.forChild(xe)],n.g]}),e})(),we=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(i){return new(i||e)},imports:[[o.b,t.n,Ae]]}),e})()}}]);