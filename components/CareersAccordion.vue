<template>
  <div class="accordion py-5 px-5 jobs" role="tablist">
    <b-card no-body class="mb-3" v-for="(job,i) in jobs" :key="i">
      <b-card-header  class="p-1" role="tab">
        <b-button block v-b-toggle="'accordion-' + i" variant="info" class="text-left">
          {{job.title}}
          <a>Apply Now</a>
        </b-button>
      </b-card-header>
      
      <b-collapse
        :id="`accordion-${i}`"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-icon-card-heading class="heading">{{ Title }}</b-icon-card-heading>
          <b-card-text>{{ Companytext }}</b-card-text>

          <b-icon-card-heading class="heading"
            >Responsibilities:</b-icon-card-heading
          >
          <ul>
            <li v-for="(res, j) in job.responsibilities" :key="j">
              <i class="icon-style icofont-diamond"></i>
              {{res}}
              </li>
          </ul>
          <b-card-text>{{ text }}</b-card-text>

          <b-icon-card-heading class="heading"
            >Requirements:</b-icon-card-heading
          >
                    <ul>
            <li v-for="(req, j) in job.requirements" :key="j"> 
            <i class="icon-style icofont-diamond"></i>
              {{req}}
              </li>
          </ul>
          <b-card-text>{{ text }}</b-card-text>

          <JobForm />
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Title: "Company Overview:",
      Companytext: `
      Meezotech is an end-to-end digital technology services partner helping businesses utilize technology as a competitive advantage. We help our customers digitalize their existing business, build innovative new products, and augment their existing teams with high performance team members. Our broad expertise in product management, user experience/design, cloud architecture, software development, data insights and intelligence, cyber security, emerging tech, and quality assurance ensures that we are delivering solutions that address business needs. Meezotech is proud to have a diverse clientele including large enterprises, SMBs and high growth startups. We work with clients across industries, including healthcare/life sciences, education, energy, communications/media, financial services, and hi-tech. Our many long-term, successful partnerships are built upon trust, integrity and successful delivery and execution.
        `,
        jobs:[
          {title:"Devops architect",responsibilities:[
            "Architect fully automated CI/CD patterns utilizing Kubernetes, Spinnaker, and other cloud technologies Work with the customer to build a backlog of proposed Fast Track work",
            "Perform architecture and security reviews, identify gaps and develop remediation plans.",
            "Define, document, and maintain a strategic DevOps architecture roadmap that includes business, product, and technical considerations.",
            "Be a champion for DevOps, bringing consistency and best practices in our approach, tools, and standards, and ensuring that DevOps strategy is implemented at every stage of the end-to-end development.",
            "Deploying and administering storage hardware or logical storage arrays",
            "Performing security testing such vulnerability assessments or penetration tests to identify security misconfigurations or vulnerable software",
            "Drive AWS transformation process for the set of complex applications",
            "Managing projects through their lifecycle and effectively engaging cross-functional teams to deliver impactful outcomes.",
            "Present technical concepts & solutions to internal and external audiences and upper management Develop and promote best practices for security",
            "Computing cloud cost models, network topology, platform services, and common storage options",
            "Evaluating various cloud platforms as well as the services within those platforms",
            "Dive deep to resolve problems at their root and troubleshoot services related to infra or data stack in our AWS/Azure/Google cloud infrastructure."
          ],requirements:[
            "Degree in Computer Science, Information Systems, or related field.",
            "10+ years’ experience in software development, DevOps, SecOps, Linux system administration, Cloud Platforms (AWS, Azure, and GCP) with minimum 3 years as a DevOps Architect.",
            "Experience with Infrastructure as Code (ARM Templates/Terraform/Cloud Formation)",
            "Experience architecting CI/CD pipelines in cloud environments",
            "Track record of delivering applications and cloud-based infrastructure delivery in an agile environment",
            "Knowledge of high availability, disaster recovery, auto-scaling and auto-healing concepts",
            "Experience architecting monitoring and management systems for enterprise SaaS products",
            "Hands-on experience with cloud architecture and deploying cloud infrastructure",
            "Experience using C/C++, Python, Perl, NodeJS, Java, or Go",
            "Experience with Linux distributions (CentOS, Ubuntu, and Amazon Linux)",
            "Experience with Amazon Web Services (EC2, VPC, ELB, S3, Cloud Formation, etc.)",
            "Experience with configuration management (Chef, Puppet, Ansible, and/or Salt)",
            "Experience with CI/CD tool chain (Jenkins, Kubernetes, Spinnaker)",
            "Solid networking experience (TCP/IP, routing, load balancing, DNS)",
            "Experience with Static & Dynamic application testing.",
            "Certifications in AWS, Azure and GCP would be a plus",
            "Excellent communication skills and client coordination experience and ability to handle pressure of a fast-paced environment."
          ]},
                    {title:"Web Dev",responsibilities:[
            "html","css"
          ],requirements:[
            "one","two"
          ]}
        ]
    };
  },
};
</script>
