"use client"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready for Your Fresh Croco Cut?</h2>
        <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto text-balance">
          Connect with Croco Shop on WhatsApp to book your appointment. We keep our wait times short and our quality
          high.
        </p>

        <a
          href="https://wa.me/1234567890?text=I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg hover-scale gap-2"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.909 1.251c-1.428.797-2.674 1.9-3.617 3.206-1.852 2.554-2.376 5.532-1.48 8.306.591 1.694 1.889 3.242 3.623 4.15 2.523 1.378 5.653 1.226 8.196-.39 1.402-.904 2.512-2.24 3.237-3.783.467-1.02.542-2.11.3-3.135-.121-.564-.313-1.104-.768-1.715-.787-.984-1.849-1.618-2.991-1.878-1.335-.311-2.619-.078-3.725.884-.717.604-1.278 1.595-1.412 2.388-.205 1.222.186 2.749 1.564 3.348 1.132.472 2.479.142 3.121-.758.491-.651.44-1.759-.213-2.476-.436-.467-1.009-.487-1.618-.278z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </section>
  )
}
