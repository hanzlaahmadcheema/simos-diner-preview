import Link from "next/link";
import { ChatBubbleLeftRightIcon, MapPinIcon, CakeIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-cherry-900 text-cherry-100">
      <div className="container-responsive grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">
            {clinic.name}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            American comfort food with a Greek twist — breakfast, lunch
            and homemade cobbler, served in Garden Oaks since 1981.
          </p>
          <p className="mt-4 flex items-center gap-2 text-[0.95rem] font-semibold text-white">
            <CakeIcon className="h-5 w-5 text-honey" aria-hidden="true" />
            Family-owned diner since 1981 · {clinic.area}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Visit
          </p>
          <p className="mt-3 flex items-start gap-2 text-[0.95rem] leading-relaxed">
            <MapPinIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
            5004 N Shepherd Dr, Houston, TX 77018 — walk in, sit down, order. Mon–Fri 6am–3pm, Sat 6am–2pm, closed Sundays.
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.95rem]">
            <ChatBubbleLeftRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {clinic.facebookText}
            </a>
          </p>
          <p className="mt-3 text-[0.95rem]">
            Call us at{" "}
            <a href={`tel:${clinic.phoneTel}`} className="font-semibold text-white underline-offset-2 hover:underline">
              {clinic.phoneDisplay}
            </a>{" "}
            — no email listed; call or message us on Facebook.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Reserve
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed">
            Walk in any morning from 6am — no reservation needed. For a big
            group, call us at (713) 697-5553 or message us on Facebook.
          </p>
          <Link
            href="#book"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-cherry-900 transition-colors hover:bg-cherry-50"
          >
            Request a table
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-responsive flex flex-col gap-2 py-5 text-sm text-cherry-200 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {clinic.name} · Houston, TX
          </p>
          <p>
            Preview website built from public information — details can be
            corrected on request. Photography: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
