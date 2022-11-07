@author Halid Lihovac
<template>
	<div class="footer">
		<footer class="text-center text-lg-start bg-light text-muted">
			<section
				class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
			>
				<div class="me-5 d-none d-md-block">
					<span>Get connected with us on social networks:</span>
				</div>
				<TheSocialIcons></TheSocialIcons>
			</section>
			<section class="">
				<div class="container text-center text-md-start mt-5">
					<div class="row mt-3">
						<div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<RouterLink to="/">
								<img
									src="../assets/svg/logo.svg"
									alt=""
								/>
							</RouterLink>

							<h6 class="text-uppercase fw-bold mb-4"></h6>
							<p class="ms-2">
								Mi ne radimo sa vama!
								<br />
								Mi radimo za vas!
							</p>
						</div>
						<div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
							<RouterLink to="/products">
								<h6 class="text-uppercase fw-bold mb-4">Proizvodi</h6>
							</RouterLink>
							<p>
								<a
									href="#"
									class="text-reset"
								>
									Računovodstvo
								</a>
							</p>
							<p>
								<a
									href="#"
									class="text-reset"
								>
									Kontroling
								</a>
							</p>
							<p>
								<a
									href="#"
									class="text-reset"
								>
									All-in-one ERP rješenje
								</a>
							</p>
							<p>
								<a
									href="#"
									class="text-reset"
								>
									Mobilne aplikacije
								</a>
							</p>
						</div>
						<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<RouterLink to="/contact">
								<h6 class="text-uppercase fw-bold mb-4">Kontakt</h6>
							</RouterLink>
							<p>
								<font-awesome-icon icon="fa-solid fa-home" />
								Bulevar Meše Selimovića 16, 71000 Sarajevo, Bosna i Hercegovina
							</p>
							<p>
								<font-awesome-icon icon="fa-solid fa-envelope" />
								info@forspace.ba
							</p>
							<p>
								<font-awesome-icon icon="fa-solid fa-phone" />
								+387 33 774 873
							</p>
						</div>
					</div>
				</div>
			</section>
			<div
				class="text-center p-1"
				style="background-color: rgba(0, 0, 0, 0.05)"
			>
				© 2022 Forspace - All Rights Reserved
			</div>
		</footer>
	</div>
</template>
<script>
	import TheSocialIcons from './TheSocialIcons.vue';
	export default {
		name: 'TheFooter',
		components: {
			TheSocialIcons,
		},
	};
</script>
<style lang="scss" scoped>
@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
     }
}
	* {
		color: #263b53;
		animation: fadeInAnimation 1s;
	}

	img {
		width: 170px;
	}
</style>
