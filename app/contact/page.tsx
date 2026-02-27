import { cvProfile } from "@/content/cv";

export default function ContactPage() {
  return (
    <main>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <div className="mt-6 space-y-4 text-neutral-700">
        <p>
          <a
            href={`mailto:${cvProfile.email}`}
            className="underline underline-offset-4 hover:opacity-80"
          >
            {cvProfile.email}
          </a>
        </p>
        {cvProfile.linkedinUrl && (
          <p>
            <a
              href={cvProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              LinkedIn
            </a>
          </p>
        )}
      </div>
    </main>
  );
}