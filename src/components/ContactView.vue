<script>    
    import { defineComponent } from 'vue';
    import { useContactFormStore } from '../stores/contact_module';
    export default defineComponent ({
        name: 'ContactView',
        setup() {

            const contactStore = useContactFormStore();

            const submit_form = async () => {
                try { 
                    const form = document.forms['form-contact']  
                    console.log(form, 'Form');                               
                    await contactStore.submit_form_contact(form);
                    form.reset();
                } catch(err) {
                    console.log(err);
                }
            };

            return {
                submit_form,
                contactStore
            }
        }
    })
</script>

<template>
    <section id="contact" >
        <div class="container" data-aos="fade-up">
            <div class="row text-center mb-3">
                <div class="col">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div v-if="contactStore.isSuccess" class="my-alert alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Thank You! </strong>.We have received your message
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div v-if="contactStore.isError" class="my-alert alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>Ooops! </strong>Your message has a problem, please check again.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="submit_form" id="contact-submit-form" name="form-contact">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="email">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="3"></textarea>
                        </div>
                        <button v-if="!contactStore.isLoading" type="submit"  class="btn btn-primary btn-kirim">Submit</button>
                        <button v-if="contactStore.isLoading" class="btn btn-primary btn-loading" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div style="display: flex; justify-content: center; margin-top: 11rem; margin-bottom: 2rem;" data-aos="fade-up">
            <span >
                <i class="bi bi-telephone" style="font-size: 40px; padding-right: 20px;"></i> +62 8997558188
                <br>
                <i class="bi bi-google" style="font-size: 40px; padding-right: 20px;"></i> abdulmajid08180881@gmail.com
            </span>
        </div>

        <div class="style-sosmed" >
            
            <a data-aos="fade-right" href="https://www.instagram.com/abdul_majid352/"><i class="bi bi-instagram" style="font-size: 60px; color: black; padding: 0 10px;"></i></a>
            <a data-aos="fade-down" href="https://www.facebook.com/profile.php?id=100027871082836"><i class="bi bi-facebook" style="font-size: 60px; color: black; padding: 0 10px;"></i></a>
            <a data-aos="fade-left" href="https://www.linkedin.com/in/abdul-majid-05b3ab195/" class=""><i class="bi bi-linkedin" style="font-size: 60px; color: black; padding: 0 10px;"></i></a>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0d6efd" fill-opacity="1"
                d="M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,186.7C672,181,768,139,864,154.7C960,171,1056,245,1152,234.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </section>
</template>

<style scoped>
    #contact {
        padding-top: 5rem;
    }

    .style-sosmed {
        display: flex;
        justify-content: center;
        
    }
</style>