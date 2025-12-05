<script lang="ts">
	import { Send, Loader2 } from 'lucide-svelte';
	import { SectionHeader, Card, FormInput, Button } from '$lib/components/ui';
	import { contactInfo } from '$lib/data';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let submitted = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1500));
		
		isSubmitting = false;
		submitted = true;
		name = '';
		email = '';
		message = '';

		// Reset success message after 5 seconds
		setTimeout(() => {
			submitted = false;
		}, 5000);
	}
</script>

<section id="contact" class="py-24 relative">
	<!-- Background decoration -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Section Header -->
		<SectionHeader 
			subtitle="Get In Touch"
			title="Let's Work Together"
			highlightedWord="Work Together"
			description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together."
		/>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Info -->
			<div class="space-y-8">
				<Card padding="lg" hover={false}>
					<h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Contact Information</h3>
					<div class="space-y-6">
						{#each contactInfo as info}
							<div class="flex items-center gap-4 group">
								<div class="p-3 rounded-lg bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 group-hover:from-[var(--color-primary)]/30 group-hover:to-[var(--color-accent)]/30 transition-all duration-300">
									<info.icon class="w-6 h-6 text-[var(--color-accent)]" />
								</div>
								<div>
									<p class="text-sm text-[var(--color-text-secondary)]">{info.label}</p>
									{#if info.href}
										<a href={info.href} class="text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300">
											{info.value}
										</a>
									{:else}
										<p class="text-[var(--color-text-primary)]">{info.value}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</Card>

				<!-- Availability Card -->
				<Card padding="lg" hover={false}>
					<div class="flex items-center gap-3 mb-4">
						<div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
						<span class="text-[var(--color-text-primary)] font-semibold">Currently Available</span>
					</div>
					<p class="text-[var(--color-text-secondary)] leading-relaxed">
						I'm currently open to new freelance projects and full-time opportunities. 
						Let's discuss how I can help bring your ideas to life.
					</p>
				</Card>
			</div>

			<!-- Contact Form -->
			<Card padding="lg" hover={false}>
				{#if submitted}
					<div class="text-center py-12">
						<div class="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
							<svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
							</svg>
						</div>
						<h3 class="text-2xl font-bold text-[var(--color-text-primary)] mb-2">Message Sent!</h3>
						<p class="text-[var(--color-text-secondary)]">Thank you for reaching out. I'll get back to you soon.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<FormInput 
							id="name"
							label="Your Name"
							placeholder="John Doe"
							required
							bind:value={name}
						/>

						<FormInput 
							id="email"
							label="Email Address"
							type="email"
							placeholder="john@example.com"
							required
							bind:value={email}
						/>

						<FormInput 
							id="message"
							label="Your Message"
							placeholder="Tell me about your project..."
							required
							rows={5}
							bind:value={message}
						/>

						<Button 
							type="submit" 
							disabled={isSubmitting}
							class="w-full"
							size="lg"
						>
							{#if isSubmitting}
								<Loader2 class="w-5 h-5 animate-spin" />
								<span>Sending...</span>
							{:else}
								<Send class="w-5 h-5" />
								<span>Send Message</span>
							{/if}
						</Button>
					</form>
				{/if}
			</Card>
		</div>
	</div>
</section>
