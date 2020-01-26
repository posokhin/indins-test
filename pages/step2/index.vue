<template>
	<div>
		<h1>{{ title }}</h1>
		<AppFormPerson :fields="fields"></AppFormPerson>
	</div>
</template>

<script>
	import AppFormPerson from '../../components/AppFormPerson'
	export default {
		components: {
			AppFormPerson
		},
		data() {
			return {
				title: "Step 2",
				fields: {
					family: "",
					name: "",
					phone: ""
				}
			}
		}
	}
</script>