<template>
    <div class="">

        <Header />

        <OffCanvasMobileMenu />

        <PageTitle :title="getCareer()['title']" breadcrumbTitle="Careers Details" />   

        

        <div class="container py-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                        <form>
                            <div class="form-group">
                            <input type="text" class="form-control" id="name" placeholder="Enter your Name">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control" id="phone" placeholder="Enter your Mobile Number">
                        </div>
                        <div class="form-group">
                            <select class="form-control-sm">
                                <option>Position 1</option>
                                <option>Position 2</option>
                                <option>Position 3</option>
                                <option>Position 4</option>

                                </select>
                        </div>
                            <div class="form-group">
                            <label for="exampleFormControlFile1">Example file input</label>
                            <input type="file" class="form-control-file" id="exampleFormControlFile1">
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                </div>
            </div>
        </div>

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            PageTitle: () => import('@/components/PageTitle'),
            CareersItems: () => import('@/components/CareersItems'),
            Footer: () => import('@/components/Footer'),
        },
            data() {
            return {
                careers: [
                    {
                        id:1,
                        title: "Web Developer",
                        role:"Ideal candidate must have more than 12+ years of experience in leading Software Development teams with 5+ years in the capacity of Project/Development/Tech Lead Manager.",
                        responsibilities:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        qualification_experience:"",
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
        
        methods:{
            getCareer(){
                console.log(this.$route.params.id);
                return this.careers.find(ca=>ca.id==this.$route.params.id)
            }
        },

 
        head() {
            return {
                title: 'Careers Details'
            }

        },
    };
</script>


