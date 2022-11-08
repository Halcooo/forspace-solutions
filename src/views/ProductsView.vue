<template lang="">
	<div class="wrapper">
		<div class="container items">
			<div class="row">
				<div class="col-sm">
					<div class="card nabava">nabava</div>
				</div>
				<div class="col-sm">
					<div class="card prodaja">prodaja</div>
				</div>
				<div class="col-sm">
					<div class="card proizvodnja">proizvodnja</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm">
					<div class="card skladište">skladište</div>
				</div>
				<div class="col-sm">
					<div class="card dms">dms</div>
				</div>
				<div class="col-sm">
					<div class="card finansije">finansije</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {};
</script>
<style lang="scss" scoped>
	.wrapper {
		background: url('@/assets/images/productscover.jpg') no-repeat center
			center/cover;
		height: 100vh;
		z-index: 0;
		background-attachment: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.row {
		.col-sm {
			z-index: 0;
		}
	}
</style>
