<template>
    <div>
        <div class="form-person">
            <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
                <b-form-group label="Family" v-if="!show">
                    <b-form-input placeholder="Family" v-model="fields.family"></b-form-input>
                </b-form-group>
            </transition>
            
            <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
                <b-form-group label="Name" v-if="show">
                    <b-form-input placeholder="Name" v-model="fields.name"></b-form-input>
                </b-form-group>
            </transition>
        </div>
        
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <b-button class="w-100" variant="primary" v-if="fields.family" @click="checkFields">Next</b-button>
        </transition>

        <b-modal
            centered
            ref="modal"
            title="Your Phone"
            v-model="modal"
            @ok="setPersonalDataAndFinal()"
        >
            <form ref="form">
                <b-form-group label="Phone">
                    <b-form-input class="phone" v-mask="'+#(###)###-##-##'" v-model="fields.phone"></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import {mask} from 'vue-the-mask'
    export default {
        props: {
            fields: Object
        },
        directives: {mask},
        data() {
            return {
                show: false,
                modal: false
            };
        },
        methods: {
            ...mapMutations(['setPersonData']),
            checkFields() {
                this.fields.family ? this.show = true : this.show = false
                this.fields.name ? this.modal = true : this.modal = false
            },
            setPersonalDataAndFinal() {
                if(!this.fields.phone){
                    return
                }
                else{
                    this.setPersonData(this.fields);
                    this.$router.push('/result')
                }
            }
        }
    };
</script>

<style lang="scss">
    .form-person{
        height: 70px;
        margin-bottom: 16px;
        position: relative;
        fieldset{
            position: absolute;
            width: 100%;
        }
    }
</style>
