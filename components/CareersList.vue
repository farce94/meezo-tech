<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-md-12" v-for="(career,index) in careers" :key="index">
                <div class="border-bottom p-3">
                <h4>
              <CareersItems :career="career"/>
                </h4>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import CareersItems from './CareersItems.vue';
    export default {
  components: { CareersItems },
        data() {
            return {
                careers: [
                    {
                        id:1,
                        title: "Web Developer",
                    },
                    {
                        id:2,
                        title: ".Net Developer",
                    },
                    {
                        id:3,
                        title: "UX/UI Developer",
                    },
                    {
                        id:4,
                        title: "QA Engineer",
                    },
                    {
                        id:5,
                        title: "Data & Analytics Engineer",
                    },
                    {
                        id:6,
                        title: "Content Writer",
                    },
                ]
            }
        },
    };
</script>