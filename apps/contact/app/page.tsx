import ContactForm from "@/components/contact-form";

export default function Page() {
  return (
    <div className="flex min-h-svh items-stretch">
      <div className="flex flex-1 flex-col gap-4 bg-blue-700"></div>
      <main className="flex flex-1 flex-col items-center justify-center gap-4">
        <ContactForm />
      </main>
    </div>
  );
}
