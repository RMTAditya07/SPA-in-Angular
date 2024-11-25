import './polyfills.server.mjs';
import{$ as Ue,A as ge,B as a,C as l,D as I,E as Pe,F as m,G as ye,H as u,I as ve,J as $,K as g,M as ke,Q as Re,T as O,U as y,V as Ge,W as _e,Y as je,Z as Te,_ as Be,a as we,b as U,c as Se,ca as He,d as xe,e as Ie,f as H,g as L,ga as Le,h as le,ha as $e,i as ue,j as b,ja as W,k as p,ka as We,l as de,la as qe,m as f,n as ce,o as he,p as fe,q as Oe,r as w,s as pe,t as D,u as s,v as me,w as S,x as V,y as Ne,z as x}from"./chunk-JGTSRONM.mjs";import{a as d,b as h}from"./chunk-5XUXGTUW.mjs";var et=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(s(me),s(pe))}}static{this.\u0275dir=f({type:i})}}return i})(),St=(()=>{class i extends et{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Oe(i)))(r||i)}})()}static{this.\u0275dir=f({type:i,features:[V]})}}return i})(),tt=new b("");var xt={provide:tt,useExisting:L(()=>te),multi:!0};function It(){let i=_e()?_e().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Ot=new b(""),te=(()=>{class i extends et{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!It())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(s(me),s(pe),s(Ot,8))}}static{this.\u0275dir=f({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&m("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},features:[$([xt]),V]})}}return i})();function v(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function it(i){return i!=null&&typeof i.length=="number"}var nt=new b(""),rt=new b(""),Nt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,G=class{static min(e){return Pt(e)}static max(e){return kt(e)}static required(e){return Rt(e)}static requiredTrue(e){return Gt(e)}static email(e){return jt(e)}static minLength(e){return Tt(e)}static maxLength(e){return Bt(e)}static pattern(e){return Ut(e)}static nullValidator(e){return ot(e)}static compose(e){return ct(e)}static composeAsync(e){return ft(e)}};function Pt(i){return e=>{if(v(e.value)||v(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function kt(i){return e=>{if(v(e.value)||v(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function Rt(i){return v(i.value)?{required:!0}:null}function Gt(i){return i.value===!0?null:{required:!0}}function jt(i){return v(i.value)||Nt.test(i.value)?null:{email:!0}}function Tt(i){return e=>v(e.value)||!it(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Bt(i){return e=>it(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Ut(i){if(!i)return ot;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(v(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function ot(i){return null}function st(i){return i!=null}function at(i){return ke(i)?Se(i):i}function lt(i){let e={};return i.forEach(t=>{e=t!=null?d(d({},e),t):e}),Object.keys(e).length===0?null:e}function ut(i,e){return e.map(t=>t(i))}function Ht(i){return!i.validate}function dt(i){return i.map(e=>Ht(e)?e:t=>e.validate(t))}function ct(i){if(!i)return null;let e=i.filter(st);return e.length==0?null:function(t){return lt(ut(t,e))}}function ht(i){return i!=null?ct(dt(i)):null}function ft(i){if(!i)return null;let e=i.filter(st);return e.length==0?null:function(t){let n=ut(t,e).map(at);return Ie(n).pipe(xe(lt))}}function pt(i){return i!=null?ft(dt(i)):null}function ze(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function mt(i){return i._rawValidators}function gt(i){return i._rawAsyncValidators}function Ce(i){return i?Array.isArray(i)?i:[i]:[]}function z(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ze(i,e){let t=Ce(e);return Ce(i).forEach(r=>{z(t,r)||t.push(r)}),t}function Je(i,e){return Ce(e).filter(t=>!z(i,t))}var Z=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ht(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},A=class extends Z{get formDirective(){return null}get path(){return null}},j=class extends Z{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ri=h(d({},Lt),{"[class.ng-submitted]":"isSubmitted"}),yt=(()=>{class i extends J{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(j,2))}}static{this.\u0275dir=f({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ge("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[V]})}}return i})(),vt=(()=>{class i extends J{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(s(A,10))}}static{this.\u0275dir=f({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&ge("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[V]})}}return i})();var N="VALID",q="INVALID",M="PENDING",P="DISABLED",_=class{},X=class extends _{constructor(e,t){super(),this.value=e,this.source=t}},k=class extends _{constructor(e,t){super(),this.pristine=e,this.source=t}},R=class extends _{constructor(e,t){super(),this.touched=e,this.source=t}},E=class extends _{constructor(e,t){super(),this.status=e,this.source=t}},be=class extends _{constructor(e){super(),this.source=e}},De=class extends _{constructor(e){super(),this.source=e}};function _t(i){return(ie(i)?i.validators:i)||null}function $t(i){return Array.isArray(i)?ht(i):i||null}function Ct(i,e){return(ie(e)?e.asyncValidators:i)||null}function Wt(i){return Array.isArray(i)?pt(i):i||null}function ie(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function qt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new H(1e3,"");if(!n[t])throw new H(1001,"")}function zt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new H(1002,"")})}var Y=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=O(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=O(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=O(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new U,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return y(this.statusReactive)}set status(e){y(()=>this.statusReactive.set(e))}get valid(){return this.status===N}get invalid(){return this.status===q}get pending(){return this.status==M}get disabled(){return this.status===P}get enabled(){return this.status!==P}get pristine(){return y(this.pristineReactive)}set pristine(e){y(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return y(this.touchedReactive)}set touched(e){y(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ze(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ze(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Je(e,this._rawAsyncValidators))}hasValidator(e){return z(this._rawValidators,e)}hasAsyncValidator(e){return z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(d({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new R(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new R(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(d({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new k(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new k(!0,n))}markAsPending(e={}){this.status=M;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new E(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(d({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(r=>{r.disable(h(d({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new X(this.value,n)),this._events.next(new E(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(n=>{n.enable(h(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(d({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===M)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new X(this.value,t)),this._events.next(new E(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(d({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=at(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new E(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new w,this.statusChanges=new w}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?q:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(q)?q:N}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new k(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new R(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ie(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=$t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Wt(this._rawAsyncValidators)}},K=class extends Y{constructor(e,t,n){super(_t(t),Ct(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){zt(this,!0,e),Object.keys(e).forEach(n=>{qt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,o)=>{n=t(n,r,o)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var bt=new b("CallSetDisabledState",{providedIn:"root",factory:()=>Ve}),Ve="always";function Zt(i,e){return[...e.path,i]}function Xe(i,e,t=Ve){Me(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Xt(i,e),Kt(i,e),Yt(i,e),Jt(i,e)}function Ye(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),ee(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Q(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Jt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Me(i,e){let t=mt(i);e.validator!==null?i.setValidators(ze(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=gt(i);e.asyncValidator!==null?i.setAsyncValidators(ze(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Q(e._rawValidators,r),Q(e._rawAsyncValidators,r)}function ee(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=mt(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(t=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=gt(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(t=!0,i.setAsyncValidators(o))}}}let n=()=>{};return Q(e._rawValidators,n),Q(e._rawAsyncValidators,n),t}function Xt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Dt(i,e)})}function Yt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Dt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Dt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Kt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Qt(i,e){i==null,Me(i,e)}function ei(i,e){return ee(i,e)}function ti(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ii(i){return Object.getPrototypeOf(i.constructor)===St}function ni(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ri(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(o=>{o.constructor===te?t=o:ii(o)?n=o:r=o}),r||n||t||null}function oi(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ke(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Qe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var ne=class extends Y{constructor(e=null,t,n){super(_t(t),Ct(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ie(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Qe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ke(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ke(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Qe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var si=i=>i instanceof ne;var Vt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=f({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Mt=new b("");var ai={provide:A,useExisting:L(()=>Ee)},Ee=(()=>{class i extends A{get submitted(){return y(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=O(()=>this._submittedReactive()),this._submittedReactive=S(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new w,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ee(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Xe(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){Ye(t.control||null,t,!1),oi(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),ni(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new be(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new De(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(Ye(n||null,t),si(r)&&(Xe(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Qt(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&ei(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){Me(this.form,this),this._oldForm&&ee(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(s(nt,10),s(rt,10),s(bt,8))}}static{this.\u0275dir=f({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&m("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[$([ai]),V,ce]})}}return i})();var li={provide:j,useExisting:L(()=>Ae)},Ae=(()=>{class i extends j{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,o,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new w,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ri(this,o)}ngOnChanges(t){this._added||this._setUpControl(),ti(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Zt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(s(A,13),s(nt,10),s(rt,10),s(tt,10),s(Mt,8))}}static{this.\u0275dir=f({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[$([li]),V,ce]})}}return i})();var ui=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=de({type:i})}static{this.\u0275inj=ue({})}}return i})();var re=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Mt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:bt,useValue:t.callSetDisabledState??Ve}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=de({type:i})}static{this.\u0275inj=ue({imports:[ui]})}}return i})();var oe=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-header"]],standalone:!0,features:[g],decls:11,vars:0,consts:[[1,"navbar","navbar-default"],[1,"navbar-header"],["routerLink","",1,"navbar-brand"],[1,"nav","navbar-nav"],["routerLink",""],["routerLink","data-entry"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"a",2),u(3,"My Diary"),l()(),a(4,"ul",3)(5,"li")(6,"a",4),u(7,"Home"),l()(),a(8,"li")(9,"a",5),u(10,"Diary Entry "),l()()()())},dependencies:[We],styles:[".navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none}.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#0056b3;text-decoration:underline}"]})};var se=class i{title="my-diary";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=p({type:i,selectors:[["app-root"]],standalone:!0,features:[g],decls:3,vars:0,consts:[[1,"header"]],template:function(t,n){t&1&&(a(0,"div",0),I(1,"app-header")(2,"router-outlet"),l())},dependencies:[oe,$e,re]})};var C=class{constructor(e,t){this.date=e;this.entry=t}};var F=class i{diarySubject=new U;diaryEntries=[new C("Jan 1st","Entry 1"),new C("Jan 2nd","Entry 2"),new C("Jan 3rd","Entry 3")];onDelete(e){this.diaryEntries.splice(e,1),this.diarySubject.next(this.diaryEntries)}onAddDiaryEntry(e){this.diaryEntries.push(e),this.diarySubject.next(this.diaryEntries)}getDiaryEntry(e){return d({},this.diaryEntries[e])}onUpdateEntry(e,t){this.diaryEntries[e]=t,this.diarySubject.next(this.diaryEntries)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=le({token:i,factory:i.\u0275fac,providedIn:"root"})};var B=class i{constructor(e,t,n){this.diaryDataService=e;this.router=t;this.activatedRoute=n}diaryForm;editMode=!1;diaryEntry;paramId;ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{e.has("id")?(this.editMode=!0,this.paramId=+e.get("id"),this.diaryEntry=this.diaryDataService.getDiaryEntry(this.paramId)):this.editMode=!1}),this.diaryForm=new K({date:new ne(this.editMode?this.diaryEntry.date:null,[G.required]),entry:new ne(this.editMode?this.diaryEntry.entry:null,[G.required])})}onSubmit(){let e=new C(this.diaryForm.value.date,this.diaryForm.value.entry);this.editMode?this.diaryDataService.onUpdateEntry(this.paramId,e):this.diaryDataService.onAddDiaryEntry(e),this.router.navigateByUrl("")}static \u0275fac=function(t){return new(t||i)(s(F),s(W),s(Le))};static \u0275cmp=p({type:i,selectors:[["app-diary-form"]],standalone:!0,features:[g],decls:12,vars:2,consts:[[1,"row"],[1,"col","form-container"],[3,"ngSubmit","formGroup"],[1,"form-group"],["for","date",1,"form-label"],["type","text","id","date","formControlName","date",1,"form-control","form-input"],["for","entry",1,"form-label"],["type","text","id","entry","formControlName","entry",1,"form-control","form-input"],[1,"btn","btn-success","form-button",3,"disabled"]],template:function(t,n){t&1&&(a(0,"div",0)(1,"div",1)(2,"form",2),m("ngSubmit",function(){return n.onSubmit()}),a(3,"div",3)(4,"label",4),u(5,"Date:"),l(),I(6,"input",5),a(7,"label",6),u(8,"Entry:"),l(),I(9,"input",7),l(),a(10,"button",8),u(11,"Submit"),l()()()()),t&2&&(D(2),x("formGroup",n.diaryForm),D(8),x("disabled",!n.diaryForm.valid))},dependencies:[re,Vt,te,yt,vt,Ee,Ae],styles:[".form-container[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;background-color:#f9f9f9;padding:20px;border-radius:8px;box-shadow:0 4px 8px #0000001a}.form-label[_ngcontent-%COMP%]{font-weight:700;color:#333;display:block;margin-bottom:8px}.form-input[_ngcontent-%COMP%]{margin-bottom:15px;border:1px solid #ccc;border-radius:4px;padding:8px;width:100%;box-sizing:border-box}.form-button[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;padding:10px 15px;border-radius:4px;cursor:pointer;font-size:16px;transition:background-color .3s ease}.form-button[_ngcontent-%COMP%]:hover{background-color:#218838}@media (max-width: 768px){.form-container[_ngcontent-%COMP%]{margin:10px;padding:15px}.form-button[_ngcontent-%COMP%]{width:100%;padding:12px}}"]})};function hi(i,e){if(i&1){let t=Pe();a(0,"tr")(1,"td"),u(2),l(),a(3,"td"),u(4),l(),a(5,"td")(6,"button",2),m("click",function(){let r=he(t).index,o=ye();return fe(o.onEdit(r))}),u(7,"Edit"),l(),a(8,"button",3),m("click",function(){let r=he(t).index,o=ye();return fe(o.onDelete(r))}),u(9,"Delete"),l()()()}if(i&2){let t=e.$implicit;D(2),ve(t.date),D(2),ve(t.entry)}}var ae=class i{constructor(e,t){this.diaryDataService=e;this.router=t}diaryEntries;diarySubscription=new we;ngOnInit(){this.diarySubscription=this.diaryDataService.diarySubject.subscribe(e=>{this.diaryEntries=e}),this.diaryEntries=this.diaryDataService.diaryEntries}ngOnDestroy(){this.diarySubscription.unsubscribe()}onDelete(e){this.diaryDataService.onDelete(e)}onEdit(e){this.router.navigate(["/edit",e])}getDiaryEntry(e){return d({},this.diaryEntries[e])}static \u0275fac=function(t){return new(t||i)(s(F),s(W))};static \u0275cmp=p({type:i,selectors:[["app-diary"]],standalone:!0,features:[g],decls:13,vars:1,consts:[[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"btn","btn-light",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(t,n){t&1&&(a(0,"h2"),u(1,"Welcome to the Diary"),l(),a(2,"table",0)(3,"thead")(4,"tr")(5,"th"),u(6,"Date"),l(),a(7,"th"),u(8,"Entry"),l(),a(9,"th"),u(10,"Action"),l()()(),a(11,"tbody"),Ne(12,hi,10,2,"tr",1),l()()),t&2&&(D(12),x("ngForOf",n.diaryEntries))},dependencies:[Te,je],styles:["table[_ngcontent-%COMP%]{margin:30px auto;width:80%;border-collapse:collapse;box-shadow:0 4px 6px #0000001a;font-family:Arial,sans-serif}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#2c3e50;color:#fff;font-size:1.5rem;font-weight:700}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:16px 24px;text-align:center;border:1px solid #ddd}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#f7f7f7}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#fff}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e1f5fe;transition:background-color .3s ease}button[_ngcontent-%COMP%]{padding:10px 20px;font-size:2rem;border:none;border-radius:5px;cursor:pointer;margin:5px;font-family:Arial,sans-serif}.btn-light[_ngcontent-%COMP%]{background-color:#e7e7e7;color:#000}.btn-light[_ngcontent-%COMP%]:hover{background-color:#cfcfcf}.btn-danger[_ngcontent-%COMP%]{background-color:#e74c3c;color:#fff}.btn-danger[_ngcontent-%COMP%]:hover{background-color:#c0392b}h2[_ngcontent-%COMP%]{text-align:center;font-size:2.5rem;color:#34495e;margin-bottom:20px;font-family:Georgia,serif}@media screen and (max-width: 768px){table[_ngcontent-%COMP%]{width:95%}h2[_ngcontent-%COMP%]{font-size:2rem}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{font-size:.9rem;padding:12px 10px}button[_ngcontent-%COMP%]{font-size:.9rem}}"]})};var At=[{path:"",component:ae},{path:"data-entry",component:B},{path:"edit/:id",component:B}];var Ft={providers:[Re({eventCoalescing:!0}),qe(At),Ue()]};var fi={providers:[He()]},wt=Ge(Ft,fi);var pi=()=>Be(se,wt),bn=pi;export{bn as a};