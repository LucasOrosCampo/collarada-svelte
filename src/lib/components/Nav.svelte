<script>
	import { page } from '$app/stores';
</script>

<nav class="bg-white shadow-lg fixed w-full z-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<!-- Logo -->
			<div class="flex-shrink-0 flex items-center">
				<a href="/" class="text-2xl font-playfair font-bold text-primary-500">
					Collarada
				</a>
			</div>

			<!-- Enlaces de navegación -->
			<div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
				<a
					href="/contact"
					class="px-3 py-2 rounded-md text-sm font-medium text-secondary-800 hover:text-primary-500 transition-colors"
				>Contacto</a
				>
			</div>
		</div>
	</div>
</nav>

<style>
    nav {
        background: rgba(255, 255, 255, 0.97);
        backdrop-filter: blur(10px);
    }
</style>