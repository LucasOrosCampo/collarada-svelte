<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="pt-20 min-h-screen">
	<div class="max-w-3xl mx-auto px-4 py-16">
		<!-- Encabezado -->
		<div class="text-center mb-12 space-y-2">
			<h2 class="text-4xl font-playfair font-bold text-secondary-800">Contacto</h2>
			<p class="text-lg text-warm-600">Complete el siguiente formulario y le responderemos en menos de 24h</p>
			<p class="text-sm text-primary-500">* Campos obligatorios</p>
		</div>

		<!-- Formulario -->
		<form class="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
			<!-- Fila Superior -->
			<div class="grid md:grid-cols-2 gap-8">
				<!-- Nombre -->
				<div class="relative">
					<input
						id="nombre"
						type="text"
						class="w-full px-4 py-3 bg-warm-50 rounded-lg border-2 border-warm-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all peer"
						placeholder=" "
						required
					/>
					<label
						for="nombre"
						class="absolute left-4 top-3 text-warm-500 pointer-events-none transition-all transform origin-left
                 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-500
                 bg-transparent z-10 px-1"
					>
						Nombre *
					</label>
				</div>

				<!-- Email -->
				<div class="relative">
					<input
						id="email"
						type="email"
						class="w-full px-4 py-3 bg-warm-50 rounded-lg border-2 border-warm-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all peer"
						placeholder=" "
						required
					/>
					<label
						for="email"
						class="absolute left-4 top-3 text-warm-500 pointer-events-none transition-all transform origin-left
                 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-500
                 bg-transparent z-10 px-1"
					>
						Email *
					</label>
				</div>
			</div>

			<!-- Teléfono -->
			<div class="grid md:grid-cols-2 gap-8">
				<div class="relative">
					<div class="flex gap-2 items-center">
						<select class="w-1/3 px-4 py-3 bg-warm-50 rounded-lg border-2 border-warm-100 text-warm-600">
							<option>+34</option>
							<option>+33</option>
							<option>+39</option>
						</select>
						<div class="relative flex-1">
							<input
								type="tel"
								class="w-full px-4 py-3 bg-warm-50 rounded-lg border-2 border-warm-100 outline-none peer"
								placeholder=" "
							/>
							<label class="absolute left-4 top-3 text-warm-500 pointer-events-none transition-all transform origin-left
                          peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                          peer-focus:-translate-y-7 peer-focus:scale-75 bg-transparent z-10 px-1">
								Teléfono (opcional)
							</label>
						</div>
					</div>
				</div>
			</div>

			<!-- Asunto -->
			<div class="relative">
				<input
					id="asunto"
					type="text"
					class="w-full px-4 py-3 bg-warm-50 rounded-lg border-2 border-warm-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all peer"
					placeholder=" "
					required
				/>
				<label
					for="asunto"
					class="absolute left-4 top-3 text-warm-500 pointer-events-none transition-all transform origin-left
               peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
               peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-500
               bg-transparent z-10 px-1"
				>
					Asunto *
				</label>
			</div>

			<!-- Mensaje -->
			<div class="relative">
      <textarea
				id="mensaje"
				class="w-full px-4 py-3 bg-warm-50 rounded-lg border-2 border-warm-100 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none h-40 resize-none transition-all peer"
				placeholder=" "
				required
			></textarea>
				<label
					for="mensaje"
					class="absolute left-4 top-3 text-warm-500 pointer-events-none transition-all transform origin-left
               peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
               peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:text-primary-500
               bg-transparent z-10 px-1"
				>
					Mensaje *
				</label>
			</div>

			<!-- Botón de Envío -->
			<div class="pt-6">
				<button
					type="submit"
					class="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
				>
					Enviar Formulario
				</button>

				<p class="text-center text-sm text-warm-500 mt-4">
					<span class="text-primary-500">✔</span> Leo todos los mensajes personalmente en menos de 24h
				</p>
			</div>
		</form>
	</div>
</main>


<style global>
    .peer:focus + label,
    .peer:not(:placeholder-shown) + label {
        transform: translateY(-30px) scale(0.75);
        color: #3B5E55;
    }

    label {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        backface-visibility: hidden;
        transform-origin: left center;
    }
</style>