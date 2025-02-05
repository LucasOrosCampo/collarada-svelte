<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />

<main class="pt-20"> <!-- Añade padding para compensar la navbar fija -->
	<div class="bg-primary-100 py-20 text-center"><h1 class="text-4xl font-bold text-secondary-800 mb-6"> Gestión Fiscal
		Integral para Empresas y Autónomos </h1>
		<p class="text-xl text-warm-700 max-w-2xl mx-auto mb-8"> Simplificamos tu relación con Hacienda y Seguridad Social
			con
			soluciones 100% adaptadas </p>
		<button class="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition"> Solicitar
			Diagnóstico
			Gratuito
		</button>
	</div>

	<div class="grid md:grid-cols-3 gap-8 py-16 px-4"> <!-- Servicio 1 -->
		<div class="bg-white p-6 rounded-xl shadow-lg">
			<div class="w-12 h-12 bg-primary-100 rounded-full mb-4"></div>
			<h3 class="text-2xl font-bold text-secondary-800 mb-3">Asesoría Fiscal Integral</h3>
			<ul class="text-warm-700 space-y-2">
				<li>• Declaraciones de Renta (Personas Físicas y Jurídicas)</li>
				<li>• Liquidaciones IVA Trimestrales (Modelos 303, 390)</li>
				<li>• Gestión de Retenciones IRPF (Modelos 111, 115)</li>
				<li>• Planificación Fiscal Optimizada</li>
			</ul>
		</div> <!-- Servicio 2 -->
		<div class="bg-white p-6 rounded-xl shadow-lg">
			<div class="w-12 h-12 bg-primary-100 rounded-full mb-4"></div>
			<h3 class="text-2xl font-bold text-secondary-800 mb-3">Gestión Laboral y Nóminas</h3>
			<ul class="text-warm-700 space-y-2">
				<li>• Elaboración de Nóminas y Seguros Sociales</li>
				<li>• Contratos Laborales y Cotizaciones</li>
				<li>• Tramitación de ERTES y Despidos</li>
				<li>• Prevención de Riesgos Laborales</li>
			</ul>
		</div> <!-- Servicio 3 -->
		<div class="bg-white p-6 rounded-xl shadow-lg">
			<div class="w-12 h-12 bg-primary-100 rounded-full mb-4"></div>
			<h3 class="text-2xl font-bold text-secondary-800 mb-3">Creación de Empresas</h3>
			<ul class="text-warm-700 space-y-2">
				<li>• Constitución de Sociedades (SL, SA)</li>
				<li>• Asesoramiento en Modelos Contables</li>
				<li>• Tramitación Documento Único Electrónico</li>
				<li>• Registro Mercantil y Notarial</li>
			</ul>
		</div>
	</div>

	<div class="bg-secondary-800 text-white py-16 px-4">
		<div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
			<div><h3 class="text-3xl font-playfair mb-6">20+ Años Transformando la Gestión Fiscal</h3>
				<p class="text-warm-100"> Más de 86 empresas confían en nuestra metodología probada para: </p>
				<ul class="mt-4 space-y-3">
					<li>✓ Reducción de hasta 12.000€ en multas fiscales</li>
					<li>✓ Optimización legal de cargas sociales</li>
					<li>✓ Preparación para inspecciones de Hacienda</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="py-16 bg-warm-50">
		<div class="max-w-5xl mx-auto text-center"><h3 class="text-3xl font-bold text-secondary-800 mb-8">Tecnología en la
			Nube</h3>
			<div class="grid md:grid-cols-3 gap-6">
				<div class="p-6 bg-white rounded-xl"><h4 class="font-bold mb-3">Monitorización Fiscal 24/7</h4>
					<p>Acceso remoto a tu contabilidad con alertas automáticas</p></div>
				<div class="p-6 bg-white rounded-xl"><h4 class="font-bold mb-3">Generación Automatizada</h4>
					<p>Modelos oficiales pre-validados (347, 184, 193)</p></div>
				<div class="p-6 bg-white rounded-xl"><h4 class="font-bold mb-3">Seguimiento Proactivo</h4>
					<p>Calendario fiscal interactivo con recordatorios</p></div>
			</div>
		</div>
	</div>

	<blockquote class="bg-primary-50 p-8 rounded-xl max-w-3xl mx-auto my-16"><p class="text-xl italic mb-4"> "Gracias a
		Collarada recuperamos 15.000€ en retenciones mal aplicadas y evitamos una sanción de Hacienda" </p>
		<div class="flex items-center gap-4">
			<div class="w-12 h-12 bg-gray-300 rounded-full"></div>
			<div><p class="font-bold">Laura Méndez</p>
				<p class="text-sm">CEO de TechCorp Zaragoza</p></div>
		</div>
	</blockquote>


	<div class="bg-secondary-900 text-white py-8 px-4">
		<div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
			<div><h4 class="font-bold mb-4">Contacto</h4>
				<p>Glorieta Mercedes Cartiel Marín, 2</p>
				<p>50002 Zaragoza</p>
				<p>✉️ info@collarada.com</p></div>
		</div>
	</div>
	<section class="bg-warm-50 py-20 px-4">
	</section>
</main>

