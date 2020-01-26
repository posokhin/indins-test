<template>
    <div>
        <b-form>
            <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
                <b-form-group label="First number">
                    <b-form-input placeholder="First number" v-model="fields.first"></b-form-input>
                </b-form-group>
            </transition>
            
            <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
                <b-form-group label="Last number" v-if="fields.first">
                    <b-form-input placeholder="Last number" v-model="fields.last"></b-form-input>
                </b-form-group>
            </transition>

            <transition
                enter-active-class="animated fadeIn"
                leave-active-class="animated fadeOut"
            >
                <b-col v-if="getResult">
                    <b-row align-h="between" align-v="center">
                        <b-button 
                            class="w-50" 
                            to="/step2" 
                            variant="primary" 
                            v-if="getResult" 
                            @click="setAmount(getResult)"
                        >
                            Next
                        </b-button>
                        <h4 class="result m-0">Total: {{ getResult }}</h4>
                    </b-row>
                </b-col>
            </transition>
        </b-form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        fields: Object
    },
	data() {
		return {
            
		};
	},
	methods: {
        ...mapMutations(['setAmount']),
		parseStr(str){
			let string = String(str)
			let regexp = /(-?\d+(?:\.\d+)?)\s*([\/])\s*(-?\d+(?:\.\d+)?)/
			let res = string.match(regexp);
			if(res !== null){
				let total = res[1]/res[3]
				return parseFloat(total)
			}
			else{
				return parseFloat(string);
			}
		},
	},
	computed: {
		getResult(){
			let first = this.parseStr(this.fields.first)
			let last = this.parseStr(this.fields.last)
			return first + last
		}
    }
};
</script>
