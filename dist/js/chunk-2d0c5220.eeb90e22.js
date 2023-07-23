(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c5220"],{"3e91":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-prevent-closing",modifiers:{"modal-prevent-closing":!0}}]},[e._v("Open Modal")]),n("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",title:"Add your recipe"}},[n("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-group",{attrs:{label:"image","label-for":"image-input"}},[n("label",{staticClass:"custom-file-upload",attrs:{for:"image-input"}},[e._v(" Choose Image: ")]),n("input",{ref:"imageInput",attrs:{type:"file",accept:"image/*"},on:{change:e.handleImageUpload}}),e.imagePreview?n("img",{attrs:{src:e.imagePreview,alt:"Uploaded image"}}):e._e()]),n("b-form-group",{attrs:{label:"Recipe title:","label-for":"title-input"}},[n("b-form-input",{attrs:{id:"title-input",state:e.title,required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("b-form-group",{attrs:{label:"Minute to cook:","label-for":"readyInMinutes-input"}},[n("b-form-input",{attrs:{id:"readyInMinutes-input",state:e.minutes,required:""},model:{value:e.minutes,callback:function(t){e.minutes=t},expression:"minutes"}})],1),n("b-form-group",{attrs:{label:"Does this recipe vegan?","label-for":"vegan-input"}},[n("b-form-input",{attrs:{id:"vegan-input",type:"checkbox",required:""},model:{value:e.vegan,callback:function(t){e.vegan=t},expression:"vegan"}})],1),n("b-form-group",{attrs:{label:"Does this recipe vegetarian?","label-for":"vegetarian-input"}},[n("b-form-checkbox",{attrs:{id:"vegetarian-input",required:""},model:{value:e.vegetarian,callback:function(t){e.vegetarian=t},expression:"vegetarian"}})],1),n("b-form-group",{attrs:{label:"Does this recipe glutenFree?","label-for":"glutenFree-input"}},[n("b-form-checkbox",{attrs:{id:"glutenFree-input",type:"chekbox",required:""},model:{value:e.glutenFree,callback:function(t){e.glutenFree=t},expression:"glutenFree"}})],1),n("b-form-group",{attrs:{label:"ingredients:","label-for":"ingredients-input"}},[e._l(e.ingredients,(function(t,i){return n("div",{key:i},[n("b-form-input",{attrs:{placeholder:"Enter ingredient..."},model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"ingredient.name"}}),n("b-form-input",{attrs:{placeholder:"Enter amount..."},model:{value:t.amount,callback:function(n){e.$set(t,"amount",n)},expression:"ingredient.amount"}})],1)})),n("b-button",{attrs:{variant:"primary"},on:{click:e.addIngredient}},[e._v("Add Ingredient")])],2),n("b-form-group",{attrs:{label:"instructions:","label-for":"instructions-input"}},[e._l(e.instructions,(function(t,i){return n("div",{key:i},[n("b-form-input",{attrs:{placeholder:"Enter instruction..."},model:{value:t.text,callback:function(n){e.$set(t,"text",n)},expression:"instruction.text"}})],1)})),n("b-button",{attrs:{variant:"primary"},on:{click:e.addInstruction}},[e._v("Add Instruction")])],2),n("b-form-group",{attrs:{label:"number of dishes:","label-for":"servings-input"}},[n("b-form-input",{attrs:{id:"servings-input",state:e.number,required:""},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)])],1)},r=[],a=(n("a434"),n("b0c0"),{data:function(){return{name:"",nameState:null,Image:"",imagePreview:"",title:"",minutes:"",vegan:"",vegetarian:"",glutenFree:"",ingredients:[""],instructions:[""]}},methods:{handleImageUpload:function(e){var t=e.target.files[0];t&&this.displayImagePreview(t)},displayImagePreview:function(e){var t=this,n=new FileReader;n.onload=function(e){t.imagePreview=e.target.result},n.readAsDataURL(e)},addIngredient:function(){this.ingredients.push("")},addInstruction:function(){this.instructions.push("")},removeIngredient:function(e){this.ingredients.splice(e,1)},submitForm:function(){console.log("Ingredients:",this.ingredients)},checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.nameState=e,e},resetModal:function(){this.name="",this.nameState=null},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;this.checkFormValidity()&&(this.submittedNames.push(this.name),this.$nextTick((function(){e.$bvModal.hide("modal-prevent-closing")})))}}}),o=a,l=n("2877"),s=Object(l["a"])(o,i,r,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d0c5220.eeb90e22.js.map