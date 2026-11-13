"use client";

import { useState } from "react";
import { CheckCircleIcon, ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

export function OrderForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [party, setParty] = useState("2 people");
  const [time, setTime] = useState("Breakfast — 6am to 11am");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; date?: string }>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!date) next.date = "Please pick the date you are coming.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  if (done) {
    return (
      <div
        className="rounded-2xl border border-cherry-200 bg-cherry-50 p-6 sm:p-8"
        role="status"
      >
        <CheckCircleIcon
          className="h-10 w-10 text-cherry-700"
          aria-hidden="true"
        />
        <h3 className="mt-3 text-xl font-bold text-cherry-800">
          Thanks, {name.trim()} — your request is noted.
        </h3>
        <p className="mt-2 text-slate-600">
          Please call us at {clinic.phoneDisplay} to confirm your table for{" "}
          {party.toLowerCase()} on{" "}
          {new Date(date + "T12:00:00").toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
          , {time.toLowerCase()}. Walk-ins are always welcome too.
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Preview form — no reservation is sent yet. In the live site, requests go
          straight to the diner.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${clinic.phoneTel}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-cherry-700 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-cherry-800"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call {clinic.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setDone(false)}
            className="min-h-11 rounded-full border-2 border-cherry-800 px-5 py-2 text-sm font-bold text-cherry-800 transition-colors hover:bg-cherry-50"
          >
            Make another request
          </button>
        </div>
      </div>
    );
  }

  const inputCls =
    "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-cherry-700 focus:outline-none focus:ring-2 focus:ring-cherry-700/30";
  const labelCls = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ord-name" className={labelCls}>
            Your name
          </label>
          <input
            id="ord-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "ord-name-err" : undefined}
            className={inputCls}
          />
          {errors.name && (
            <p id="ord-name-err" className="mt-1.5 text-sm font-medium text-cherry-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="ord-date" className={labelCls}>
            Date you are coming
          </label>
          <input
            id="ord-date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "ord-date-err" : undefined}
            className={inputCls}
          />
          {errors.date && (
            <p id="ord-date-err" className="mt-1.5 text-sm font-medium text-cherry-600">
              {errors.date}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="ord-party" className={labelCls}>
            How many people?
          </label>
          <select
            id="ord-party"
            name="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
            className={`${inputCls} bg-white`}
          >
            {["1 person", "2 people", "3 people", "4 people", "5 people", "6+ people — call ahead"].map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ord-time" className={labelCls}>
            Breakfast or lunch?
          </label>
          <select
            id="ord-time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={`${inputCls} bg-white`}
          >
            {["Breakfast — 6am to 11am", "Lunch — 11am to 3pm"].map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="ord-message" className={labelCls}>
          Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="ord-message"
          name="message"
          rows={3}
          placeholder="e.g. Birthday breakfast for 8 people, one vegan, one high chair…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-cherry-700 px-7 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cherry-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-700 focus-visible:ring-offset-2"
        >
          Request my table
        </button>
        <a
          href={`tel:${clinic.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-cherry-800 px-6 py-3 font-bold text-cherry-800 transition-colors hover:bg-cherry-50"
        >
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          Or call {clinic.phoneDisplay}
        </a>
      </div>
      <p className="text-sm text-slate-500">
        No payment needed to request. Walk-ins are always welcome — for a big group, call us at {clinic.phoneDisplay} and we will sort it out. Or message us on Facebook.
      </p>
    </form>
  );
}
