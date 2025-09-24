export default function MapSection() {
    return (
        <section className="bg-container">
            <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.743275916327!2d46.6752965150000!3d24.73581168411995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03262b9b5a8b%3A0x7c8a38b5b5b5b5b5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1628000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}