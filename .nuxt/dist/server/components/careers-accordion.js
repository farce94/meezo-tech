exports.ids = [13,23];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/JobForm.vue?vue&type=template&id=55398846&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"resume"},[_vm._ssrNode("<div class=\"form-row\"><div class=\"form-group col-md-6\"><label for=\"name\">Name</label> <input type=\"text\" id=\"name\" placeholder=\"Enter Your Name\" class=\"form-control\"></div> <div class=\"form-group col-md-6\"><label for=\"email\">Email</label> <input type=\"email\" id=\"email\" placeholder=\"Enter Your Email\" class=\"form-control\"></div></div> <div class=\"form-row\"><div class=\"form-group col-md-6\"><label for=\"job\">Application For Job</label> <select id=\"job\" class=\"form-control\"><option selected=\"selected\">Choose...</option> <option>Web Developer</option> <option>Backend Develoepr</option> <option>IOS Engineer</option></select></div> <div class=\"form-group col-md-6\"><label for=\"resume\">Upload your Resume</label> <input type=\"file\" id=\"resume\" accept=\".doc, .pdf, image/jpeg\" class=\"form-control-file\"> <p class=\"text-muted\"><small>Allowed JPG, JPEG, PDF or DOC</small></p></div> <div class=\"form-group offset-md-10 col-md-2 p-0\"><button type=\"submit\" class=\"btn btn-primary\">Apply Now</button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/JobForm.vue?vue&type=template&id=55398846&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/JobForm.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "38eab02b"
  
)

/* harmony default export */ var JobForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CareersAccordion.vue?vue&type=template&id=9d9095f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion py-5 px-5 jobs",attrs:{"role":"tablist"}},_vm._l((_vm.jobs),function(job,i){return _c('b-card',{key:i,staticClass:"mb-3",attrs:{"no-body":""}},[_c('b-card-header',{staticClass:"p-1",attrs:{"role":"tab"}},[_c('b-button',{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:('accordion-' + i),expression:"'accordion-' + i"}],staticClass:"text-left",attrs:{"block":"","variant":"info"}},[_vm._v("\n        "+_vm._s(job.title)+"\n        "),_c('a',[_vm._v("Apply Now")])])],1),_vm._v(" "),_c('b-collapse',{attrs:{"id":("accordion-" + i),"visible":"","accordion":"my-accordion","role":"tabpanel"}},[_c('b-card-body',[_c('b-icon-card-heading',{staticClass:"heading"},[_vm._v(_vm._s(_vm.Title))]),_vm._v(" "),_c('b-card-text',[_vm._v(_vm._s(_vm.Companytext))]),_vm._v(" "),_c('b-icon-card-heading',{staticClass:"heading"},[_vm._v("Responsibilities:")]),_vm._v(" "),_c('ul',_vm._l((job.responsibilities),function(res,j){return _c('li',{key:j},[_c('i',{staticClass:"icon-style icofont-diamond"}),_vm._v("\n            "+_vm._s(res)+"\n            ")])}),0),_vm._v(" "),_c('b-card-text',[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),_c('b-icon-card-heading',{staticClass:"heading"},[_vm._v("Requirements:")]),_vm._v(" "),_c('ul',_vm._l((job.requirements),function(req,j){return _c('li',{key:j},[_c('i',{staticClass:"icon-style icofont-diamond"}),_vm._v("\n            "+_vm._s(req)+"\n            ")])}),0),_vm._v(" "),_c('b-card-text',[_vm._v(_vm._s(_vm.text))]),_vm._v(" "),_c('JobForm')],1)],1)],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CareersAccordion.vue?vue&type=template&id=9d9095f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CareersAccordion.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CareersAccordionvue_type_script_lang_js_ = ({data(){return{Title:"Company Overview:",Companytext:`
      Meezotech is an end-to-end digital technology services partner helping businesses utilize technology as a competitive advantage. We help our customers digitalize their existing business, build innovative new products, and augment their existing teams with high performance team members. Our broad expertise in product management, user experience/design, cloud architecture, software development, data insights and intelligence, cyber security, emerging tech, and quality assurance ensures that we are delivering solutions that address business needs. Meezotech is proud to have a diverse clientele including large enterprises, SMBs and high growth startups. We work with clients across industries, including healthcare/life sciences, education, energy, communications/media, financial services, and hi-tech. Our many long-term, successful partnerships are built upon trust, integrity and successful delivery and execution.
        `,jobs:[{title:"Devops architect",responsibilities:["Architect fully automated CI/CD patterns utilizing Kubernetes, Spinnaker, and other cloud technologies Work with the customer to build a backlog of proposed Fast Track work","Perform architecture and security reviews, identify gaps and develop remediation plans.","Define, document, and maintain a strategic DevOps architecture roadmap that includes business, product, and technical considerations.","Be a champion for DevOps, bringing consistency and best practices in our approach, tools, and standards, and ensuring that DevOps strategy is implemented at every stage of the end-to-end development.","Deploying and administering storage hardware or logical storage arrays","Performing security testing such vulnerability assessments or penetration tests to identify security misconfigurations or vulnerable software","Drive AWS transformation process for the set of complex applications","Managing projects through their lifecycle and effectively engaging cross-functional teams to deliver impactful outcomes.","Present technical concepts & solutions to internal and external audiences and upper management Develop and promote best practices for security","Computing cloud cost models, network topology, platform services, and common storage options","Evaluating various cloud platforms as well as the services within those platforms","Dive deep to resolve problems at their root and troubleshoot services related to infra or data stack in our AWS/Azure/Google cloud infrastructure."],requirements:["Degree in Computer Science, Information Systems, or related field.","10+ years’ experience in software development, DevOps, SecOps, Linux system administration, Cloud Platforms (AWS, Azure, and GCP) with minimum 3 years as a DevOps Architect.","Experience with Infrastructure as Code (ARM Templates/Terraform/Cloud Formation)","Experience architecting CI/CD pipelines in cloud environments","Track record of delivering applications and cloud-based infrastructure delivery in an agile environment","Knowledge of high availability, disaster recovery, auto-scaling and auto-healing concepts","Experience architecting monitoring and management systems for enterprise SaaS products","Hands-on experience with cloud architecture and deploying cloud infrastructure","Experience using C/C++, Python, Perl, NodeJS, Java, or Go","Experience with Linux distributions (CentOS, Ubuntu, and Amazon Linux)","Experience with Amazon Web Services (EC2, VPC, ELB, S3, Cloud Formation, etc.)","Experience with configuration management (Chef, Puppet, Ansible, and/or Salt)","Experience with CI/CD tool chain (Jenkins, Kubernetes, Spinnaker)","Solid networking experience (TCP/IP, routing, load balancing, DNS)","Experience with Static & Dynamic application testing.","Certifications in AWS, Azure and GCP would be a plus","Excellent communication skills and client coordination experience and ability to handle pressure of a fast-paced environment."]},{title:"Web Dev",responsibilities:["html","css"],requirements:["one","two"]}]};}});
// CONCATENATED MODULE: ./components/CareersAccordion.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CareersAccordionvue_type_script_lang_js_ = (CareersAccordionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CareersAccordion.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CareersAccordionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "24b98d0e"
  
)

/* harmony default export */ var CareersAccordion = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {JobForm: __webpack_require__(41).default})


/***/ })

};;
//# sourceMappingURL=careers-accordion.js.map