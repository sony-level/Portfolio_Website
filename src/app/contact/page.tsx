import ContactForm from "@/components/ContactForm";

export default function Contact() {

    return (
        <div className="min-h-screen">
        <main className="container mx-auto px-4 py-16">
            <h1 className="text-5xl font-bold mb-24 text-center">
            📬 Contact
            </h1>
            <ContactForm />
        </main>
        </div>
    )
    }