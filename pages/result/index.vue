<template>
	<div>
		<h1>{{ title }}</h1>
		<b-table striped Outlined hover :items="items" v-if="items"></b-table>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex'
	export default {
		head: {
			title: 'Result'
		},
		data() {
			return {
				title: "Result",
				items: []
			}
		},
		computed: {
			...mapGetters(['getStore'])	
		},
		mounted() {
			this.items = [this.getStore]
		}
	}
</script>