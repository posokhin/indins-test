<template>
	<div>
		<h1>{{ title }}</h1>
		<AppFormNumber :fields="fields"></AppFormNumber>
	</div>
</template>

<script>
	import AppFormNumber from '../../components/AppFormNumber'
	export default {
		head: {
			title: 'Step 1'
		},
		components: {
			AppFormNumber
		},
		data() {
			return {
				title: "Step 1",
				fields: {
					first: "",
					last: ""
				}
			}
		}
	}
</script>