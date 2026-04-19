import { mockEvents } from "@/mocks/events";
import { fakeDelay } from "./client";
import type { CalendarEvent } from "@/types";

export async function getEvents(): Promise<CalendarEvent[]> {
  return fakeDelay(mockEvents);
}
