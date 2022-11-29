<template>
	<header class="header">
		<div class="header__content _container">
			<div class="header__menu">
				<ul class="menu__body">
					<template class="menu__list" :key="`Navitem${i}`" v-for="(n, i) in nav">
						<li>
							<NuxtLink class="menu__link" to="#">{{ n.text }}</NuxtLink>
						</li>
					</template>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
const nav = [
	{
		text: "Home",
		link: "#",
	},
	{
		text: "About",
		link: "#",
	},
	{
		text: "Contact",
		link: "#",
	},
	{
		text: "Reviews",
		link: "#",
	},
];
</script>

<style lang="scss" scoped>
._container {
	max-width: 1200px;
	margin: 0 auto;
	width: 100%;
}

.menu {
	&__body {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0px;

		li {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 20px;
			color: #262541;
			transition: color 0.3 ease 0s;
			margin-left: 28px;
			@media(min-width: 996px) {
				&:hover {
					color: red
				}
			}
		}
	}
}
</style>