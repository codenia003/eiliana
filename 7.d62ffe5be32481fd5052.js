(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zrcO:function(e,r,i){"use strict";i.r(r),i.d(r,"UsersModule",(function(){return J}));var t=i("3Pt+"),s=i("ofXK"),o=i("tyNb"),n=i("fXoL"),c=i("J9tS");let b=(()=>{class e{constructor(e){this.accountService=e,this.user=this.accountService.userValue,console.log(this.user)}}return e.\u0275fac=function(r){return new(r||e)(n.Kb(c.a))},e.\u0275cmp=n.Eb({type:e,selectors:[["ng-component"]],decls:61,vars:7,consts:[[1,"bg-light","profile-setting"],[1,"bg-navy"],[1,"container","p-4"],[1,"align-items-center"],[1,"border-title"],[1,"h3","text-white","ml-2"],[1,"container","space-1","space-top-lg-0","mt-lg-n10"],[1,"row"],[1,"col-lg-3"],["id","sidebarNav",1,"navbar-collapse","navbar-vertical"],[1,"card","mb-5","shadow"],[1,"card-body"],[1,"basic-padding"],[1,"form-group","basic-info","mb-5","text-center"],[1,"form-check","form-check-inline","ml-4"],[1,"custom-control","custom-radio"],["type","radio","id","mr","name","anonymus","value","1","checked","",1,"custom-control-input"],["for","mr",1,"custom-control-label"],[1,"form-check","form-check-inline"],["type","radio","id","mrs","name","anonymus","value","2",1,"custom-control-input"],["for","mrs",1,"custom-control-label"],[1,"d-none","d-lg-block","text-center","mb-5"],[1,"avatar","avatar-xxl","avatar-circle","mb-3"],["src","assets/img/profile/avatar_icon.png","alt","Image Description",1,"avatar-img"],[1,"border-circle-green"],[1,"mb-2"],[1,"card-title"],[1,"btn","btn-white","float-right"],["aria-hidden","true",1,"fa","fa-pencil"],[1,"card-text","font-size-1"],[1,"basic-list"],[1,"list-group"],["routerLink","/profile",1,"list-group-item","list-group-item-action","active"],["routerLink","/profile",1,"list-group-item","list-group-item-action"],[1,"col-lg-9"]],template:function(e,r){1&e&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.Pb(3,"div",3),n.Lb(4,"span",4),n.Pb(5,"span",5),n.Pb(6,"b"),n.zc(7,"Profile"),n.Ob(),n.zc(8," Setting"),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(9,"div",6),n.Pb(10,"div",7),n.Pb(11,"div",8),n.Pb(12,"div",9),n.Pb(13,"div",10),n.Pb(14,"div",11),n.Pb(15,"div",12),n.Pb(16,"div",13),n.Pb(17,"div",14),n.Pb(18,"div",15),n.Lb(19,"input",16),n.Pb(20,"label",17),n.zc(21,"Avatar"),n.Ob(),n.Ob(),n.Ob(),n.Pb(22,"div",18),n.Pb(23,"div",15),n.Lb(24,"input",19),n.Pb(25,"label",20),n.zc(26,"Anonymus"),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(27,"div",21),n.Pb(28,"div",22),n.Lb(29,"img",23),n.Lb(30,"span",24),n.Ob(),n.Ob(),n.Pb(31,"div",25),n.Pb(32,"h5",26),n.zc(33),n.Pb(34,"button",27),n.Lb(35,"i",28),n.Ob(),n.Ob(),n.Pb(36,"p",29),n.zc(37),n.dc(38,"date"),n.Ob(),n.Ob(),n.Ob(),n.Pb(39,"div",30),n.Pb(40,"div",31),n.Pb(41,"a",32),n.zc(42,"Basic Information"),n.Ob(),n.Pb(43,"a",33),n.zc(44,"Billing and Payment"),n.Ob(),n.Pb(45,"a",33),n.zc(46,"Tax Information"),n.Ob(),n.Pb(47,"a",33),n.zc(48,"Financial Accounts"),n.Ob(),n.Pb(49,"a",33),n.zc(50,"Membership & Credits"),n.Ob(),n.Pb(51,"a",33),n.zc(52,"Members (Connections), Teams and Permissions"),n.Ob(),n.Pb(53,"a",33),n.zc(54,"Membership & Credits"),n.Ob(),n.Pb(55,"a",33),n.zc(56,"Tax Information"),n.Ob(),n.Pb(57,"a",33),n.zc(58,"Company Settings"),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(59,"div",34),n.Lb(60,"router-outlet"),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.xb(33),n.Bc("",r.user.full_name," "),n.xb(4),n.Dc("",r.user.city," ",r.user.country," - ",n.fc(38,4,r.user.created_at,"MMMM d, y, h:mm a"),""))},directives:[o.e,o.g],pipes:[s.d],encapsulation:2}),e})();var a=i("SxV6");function d(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Title is required"),n.Ob())}function l(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,d,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.title.errors.required)}}function u(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"First Name is required"),n.Ob())}function f(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,u,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.first_name.errors.required)}}function m(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Last Name is required"),n.Ob())}function p(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,m,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.last_name.errors.required)}}function v(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Date of Birth is required"),n.Ob())}function g(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Date of Birth must be a valid date in the format YYYY-MM-DD"),n.Ob())}function h(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,v,2,0,"div",34),n.xc(2,g,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.dob.errors.required),n.xb(1),n.ic("ngIf",e.f.dob.errors.pattern)}}function P(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Pseudo Name is required"),n.Ob())}function O(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,P,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.pseudoName.errors.required)}}function x(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Govt. ID Proof id is required"),n.Ob())}function I(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,x,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.govtId.errors.required)}}function z(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"ID Number Name is required"),n.Ob())}function N(e,r){if(1&e&&(n.Pb(0,"div",33),n.xc(1,z,2,0,"div",34),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.idProofNo.errors.required)}}function y(e,r){1&e&&n.Lb(0,"span",35)}const C=function(e){return{"is-invalid":e}};let S=(()=>{class e{constructor(e,r,i,t,s){this.formBuilder=e,this.route=r,this.router=i,this.accountService=t,this.alertService=s,this.users=null,this.loading=!1,this.submitted=!1,this.step=1,this.userDatas=[],this.fileData=null,this.previewUrl=null,this.fileUploadProgress=null,this.uploadedFilePath=null,this.user=this.accountService.userValue}ngOnInit(){this.form=this.formBuilder.group({applyas:["2"],title:["",[t.p.required]],first_name:["",[t.p.required]],middle_name:[""],last_name:["",[t.p.required]],dob:["",[t.p.required,t.p.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],pseudoName:["",[t.p.required]],govtId:["",[t.p.required]],idProofNo:["",[t.p.required]]})}deleteUser(e){this.users.find(r=>r.id===e).isDeleting=!0,this.accountService.delete(e).pipe(Object(a.a)()).subscribe(()=>this.users=this.users.filter(r=>r.id!==e))}get f(){return this.form.controls}fileProgress(e){this.fileData=e.target.files[0],this.preview()}preview(){if(null!=this.fileData.type.match(/image\/*/)){var e=new FileReader;e.readAsDataURL(this.fileData),e.onload=r=>{this.previewUrl=e.result}}}onSubmit(){if(this.submitted=!0,this.alertService.clear(),this.form.invalid)return;let e=JSON.parse(JSON.stringify(this.form.value));this.loading=!0,this.accountService.register(e).subscribe(e=>{console.log(e),this.userDatas=e,"0"==this.userDatas.success?(this.alertService.error(this.userDatas.errors),this.loading=!1):(this.alertService.success("Account sucessfully created, Login credentials send to your email!",{keepAfterRouteChange:!0}),localStorage.removeItem("reg_id"),this.router.navigate(["../login"],{relativeTo:this.route}))},e=>{this.alertService.error("General error has occurred"),this.loading=!1})}onReset(){this.submitted=!1,this.form.reset()}}return e.\u0275fac=function(r){return new(r||e)(n.Kb(t.c),n.Kb(o.a),n.Kb(o.c),n.Kb(c.a),n.Kb(c.b))},e.\u0275cmp=n.Eb({type:e,selectors:[["ng-component"]],decls:70,vars:28,consts:[[1,"singup-body","login-body"],[1,"card"],[1,"card-header","text-left"],[1,"card-body","p-4"],[3,"formGroup","ngSubmit"],[1,"form-group","basic-info"],[1,"form-check","form-check-inline","ml-3"],[1,"custom-control","custom-radio"],["type","radio","id","mr","formControlName","title","value","Mr","checked","",1,"custom-control-input"],["for","mr",1,"custom-control-label"],[1,"form-check","form-check-inline"],["type","radio","id","mrs","formControlName","title","value","Mrs",1,"custom-control-input"],["for","mrs",1,"custom-control-label"],["class","invalid-feedback",4,"ngIf"],[1,"form-group"],["type","text","formControlName","first_name",1,"form-control",3,"ngClass"],["type","text","formControlName","middle_name",1,"form-control"],["type","text","formControlName","last_name",1,"form-control",3,"ngClass"],["type","date","placeholder","DD/MM/YYYY","formControlName","dob",1,"form-control",3,"ngClass"],["type","text","formControlName","pseudoName",1,"form-control",3,"ngClass"],["for","govtID"],["formControlName","govtId",1,"form-control",3,"ngClass"],["value",""],["value","1"],["value","2"],["value","3"],["type","text","formControlName","idProofNo",1,"form-control",3,"ngClass"],[1,"form-group","text-right","mt-5"],["role","group",1,"btn-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],[1,"fa","fa-angle-right"],["type","reset",1,"btn","btn-outline-primary"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,r){1&e&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"h4",2),n.zc(3,"Basic Info"),n.Ob(),n.Pb(4,"div",3),n.Pb(5,"form",4),n.ac("ngSubmit",(function(){return r.onSubmit()})),n.Pb(6,"div",5),n.Pb(7,"label"),n.zc(8,"Title"),n.Ob(),n.Pb(9,"div",6),n.Pb(10,"div",7),n.Lb(11,"input",8),n.Pb(12,"label",9),n.zc(13,"Mr."),n.Ob(),n.Ob(),n.Ob(),n.Pb(14,"div",10),n.Pb(15,"div",7),n.Lb(16,"input",11),n.Pb(17,"label",12),n.zc(18,"Mrs."),n.Ob(),n.Ob(),n.Ob(),n.xc(19,l,2,1,"div",13),n.Ob(),n.Pb(20,"div",14),n.Pb(21,"label"),n.zc(22,"First Name"),n.Ob(),n.Lb(23,"input",15),n.xc(24,f,2,1,"div",13),n.Ob(),n.Pb(25,"div",14),n.Pb(26,"label"),n.zc(27,"Middle Name"),n.Ob(),n.Lb(28,"input",16),n.Ob(),n.Pb(29,"div",14),n.Pb(30,"label"),n.zc(31,"Last Name"),n.Ob(),n.Lb(32,"input",17),n.xc(33,p,2,1,"div",13),n.Ob(),n.Pb(34,"div",14),n.Pb(35,"label"),n.zc(36,"DOB"),n.Ob(),n.Lb(37,"input",18),n.xc(38,h,3,2,"div",13),n.Ob(),n.Pb(39,"div",14),n.Pb(40,"label"),n.zc(41,"Pseudo Name / Alias Name"),n.Ob(),n.Lb(42,"input",19),n.xc(43,O,2,1,"div",13),n.Ob(),n.Pb(44,"div",14),n.Pb(45,"label",20),n.zc(46,"Govt. ID Proof"),n.Ob(),n.Pb(47,"select",21),n.Pb(48,"option",22),n.zc(49,"--Select--"),n.Ob(),n.Pb(50,"option",23),n.zc(51,"Driving Licence"),n.Ob(),n.Pb(52,"option",24),n.zc(53,"Aadhar Card"),n.Ob(),n.Pb(54,"option",25),n.zc(55,"Voter Id Card"),n.Ob(),n.Ob(),n.xc(56,I,2,1,"div",13),n.Ob(),n.Pb(57,"div",14),n.Pb(58,"label"),n.zc(59,"Govt. ID Number"),n.Ob(),n.Lb(60,"input",26),n.xc(61,N,2,1,"div",13),n.Ob(),n.Pb(62,"div",27),n.Pb(63,"div",28),n.Pb(64,"button",29),n.xc(65,y,1,0,"span",30),n.zc(66," Next "),n.Lb(67,"i",31),n.Ob(),n.Pb(68,"button",32),n.zc(69,"Discard"),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.xb(5),n.ic("formGroup",r.form),n.xb(14),n.ic("ngIf",r.submitted&&r.f.title.errors),n.xb(4),n.ic("ngClass",n.lc(16,C,r.submitted&&r.f.first_name.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.first_name.errors),n.xb(8),n.ic("ngClass",n.lc(18,C,r.submitted&&r.f.last_name.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.last_name.errors),n.xb(4),n.ic("ngClass",n.lc(20,C,r.submitted&&r.f.dob.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.dob.errors),n.xb(4),n.ic("ngClass",n.lc(22,C,r.submitted&&r.f.pseudoName.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.pseudoName.errors),n.xb(4),n.ic("ngClass",n.lc(24,C,r.submitted&&r.f.govtId.errors)),n.xb(9),n.ic("ngIf",r.submitted&&r.f.govtId.errors),n.xb(4),n.ic("ngClass",n.lc(26,C,r.submitted&&r.f.idProofNo.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.idProofNo.errors),n.xb(3),n.ic("disabled",r.loading),n.xb(1),n.ic("ngIf",r.loading))},directives:[t.r,t.j,t.e,t.m,t.b,t.i,t.d,s.l,s.j,t.o,t.k,t.q],encapsulation:2}),e})();function L(e,r){1&e&&(n.Pb(0,"h1"),n.zc(1,"Add User"),n.Ob())}function q(e,r){1&e&&(n.Pb(0,"h1"),n.zc(1,"Edit User"),n.Ob())}function w(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"First Name is required"),n.Ob())}function k(e,r){if(1&e&&(n.Pb(0,"div",17),n.xc(1,w,2,0,"div",0),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.firstName.errors.required)}}function D(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Last Name is required"),n.Ob())}function M(e,r){if(1&e&&(n.Pb(0,"div",17),n.xc(1,D,2,0,"div",0),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.lastName.errors.required)}}function A(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Username is required"),n.Ob())}function U(e,r){if(1&e&&(n.Pb(0,"div",17),n.xc(1,A,2,0,"div",0),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.username.errors.required)}}function _(e,r){1&e&&(n.Pb(0,"em"),n.zc(1,"(Leave blank to keep the same password)"),n.Ob())}function B(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Password is required"),n.Ob())}function K(e,r){1&e&&(n.Pb(0,"div"),n.zc(1,"Password must be at least 6 characters"),n.Ob())}function j(e,r){if(1&e&&(n.Pb(0,"div",17),n.xc(1,B,2,0,"div",0),n.xc(2,K,2,0,"div",0),n.Ob()),2&e){const e=n.cc();n.xb(1),n.ic("ngIf",e.f.password.errors.required),n.xb(1),n.ic("ngIf",e.f.password.errors.minlength)}}function G(e,r){1&e&&n.Lb(0,"span",18)}const T=function(e){return{"is-invalid":e}};let Y=(()=>{class e{constructor(e,r,i,t,s){this.formBuilder=e,this.route=r,this.router=i,this.accountService=t,this.alertService=s,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[t.p.minLength(6)];this.isAddMode&&e.push(t.p.required),this.form=this.formBuilder.group({firstName:["",t.p.required],lastName:["",t.p.required],username:["",t.p.required],password:["",e]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(a.a)()).subscribe(e=>this.form.patchValue(e))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.register(this.form.value).pipe(Object(a.a)()).subscribe({next:()=>{this.alertService.success("User added successfully",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}})}updateUser(){this.accountService.update(this.id,this.form.value).pipe(Object(a.a)()).subscribe({next:()=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}})}}return e.\u0275fac=function(r){return new(r||e)(n.Kb(t.c),n.Kb(o.a),n.Kb(o.c),n.Kb(c.a),n.Kb(c.b))},e.\u0275cmp=n.Eb({type:e,selectors:[["ng-component"]],decls:32,vars:22,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,r){1&e&&(n.xc(0,L,2,0,"h1",0),n.xc(1,q,2,0,"h1",0),n.Pb(2,"form",1),n.ac("ngSubmit",(function(){return r.onSubmit()})),n.Pb(3,"div",2),n.Pb(4,"div",3),n.Pb(5,"label",4),n.zc(6,"First Name"),n.Ob(),n.Lb(7,"input",5),n.xc(8,k,2,1,"div",6),n.Ob(),n.Pb(9,"div",3),n.Pb(10,"label",7),n.zc(11,"Last Name"),n.Ob(),n.Lb(12,"input",8),n.xc(13,M,2,1,"div",6),n.Ob(),n.Ob(),n.Pb(14,"div",2),n.Pb(15,"div",3),n.Pb(16,"label",9),n.zc(17,"Username"),n.Ob(),n.Lb(18,"input",10),n.xc(19,U,2,1,"div",6),n.Ob(),n.Pb(20,"div",3),n.Pb(21,"label",11),n.zc(22," Password "),n.xc(23,_,2,0,"em",0),n.Ob(),n.Lb(24,"input",12),n.xc(25,j,3,2,"div",6),n.Ob(),n.Ob(),n.Pb(26,"div",13),n.Pb(27,"button",14),n.xc(28,G,1,0,"span",15),n.zc(29," Save "),n.Ob(),n.Pb(30,"a",16),n.zc(31,"Cancel"),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.ic("ngIf",r.isAddMode),n.xb(1),n.ic("ngIf",!r.isAddMode),n.xb(1),n.ic("formGroup",r.form),n.xb(5),n.ic("ngClass",n.lc(14,T,r.submitted&&r.f.firstName.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.firstName.errors),n.xb(4),n.ic("ngClass",n.lc(16,T,r.submitted&&r.f.lastName.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.lastName.errors),n.xb(5),n.ic("ngClass",n.lc(18,T,r.submitted&&r.f.username.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.username.errors),n.xb(4),n.ic("ngIf",!r.isAddMode),n.xb(1),n.ic("ngClass",n.lc(20,T,r.submitted&&r.f.password.errors)),n.xb(1),n.ic("ngIf",r.submitted&&r.f.password.errors),n.xb(2),n.ic("disabled",r.loading),n.xb(1),n.ic("ngIf",r.loading))},directives:[s.l,t.r,t.j,t.e,t.b,t.i,t.d,s.j,o.e],encapsulation:2}),e})();const F=[{path:"",component:b,children:[{path:"",component:S},{path:"add",component:Y},{path:"edit/:id",component:Y}]}];let R=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(r){return new(r||e)},imports:[[o.f.forChild(F)],o.f]}),e})(),J=(()=>{class e{}return e.\u0275mod=n.Ib({type:e}),e.\u0275inj=n.Hb({factory:function(r){return new(r||e)},imports:[[s.b,t.n,R]]}),e})()}}]);