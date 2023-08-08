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
                    await contactStore.submit_form_contact(form);
                } catch(err) {
                    console.log(err);
                }
            };

            return {
                submit_form
            }
        }
    })
</script>

<template>
    <section id="contact">
        <div class="container">
            <div class="row text-center mb-3">
                <div class="col">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="d-none my-alert alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Terima Kasih!</strong>Pesan anda sudah kami terima.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="submit_form" id="contact-submit-form" name="form-contact">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nama Lengkap</label>
                            <input type="text" class="form-control" v-model="nama" name="nama" id="name" aria-describedby="name">

                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" v-model="email" name="email" id="email" aria-describedby="email">
                        </div>
                        <div class="mb-3">
                            <label for="pesan" class="form-label">Pesan</label>
                            <textarea class="form-control" id="pesan" v-model="pesan" name="pesan" rows="3"></textarea>
                        </div>
                        <button type="submit"  class="btn btn-primary btn-kirim">Submit</button>
                        <button class="btn btn-primary btn-loading d-none" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </form>
                </div>
            </div>
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
</style>