/**
 * Centralized date utilities for TeamSync.
 *
 * All dates coming from the API / mocks are ISO 8601 UTC strings.
 * This module converts them to local time for display and back to UTC for persistence.
 */
import {
  format,
  parseISO,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  addDays,
  subDays,
  differenceInMinutes,
  setHours,
  setMinutes,
  getHours,
  getMinutes,
} from "date-fns";

export {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  addMonths,
  subMonths,
  addWeeks,
  subWeeks,
  addDays,
  subDays,
  differenceInMinutes,
  setHours,
  setMinutes,
  getHours,
  getMinutes,
};

/** Parse an ISO 8601 UTC string into a local Date object. */
export function parseUTC(iso: string): Date {
  return parseISO(iso);
}

/** Convert a local Date back to an ISO 8601 UTC string for API/persistence. */
export function toUTCString(date: Date): string {
  return date.toISOString();
}

/** "Mon, Apr 21" */
export function formatDayShort(date: Date): string {
  return format(date, "EEE, MMM d");
}

/** "April 2026" */
export function formatMonthYear(date: Date): string {
  return format(date, "MMMM yyyy");
}

/** "Apr 21 – Apr 27, 2026" */
export function formatWeekRange(start: Date, end: Date): string {
  return `${format(start, "MMM d")} – ${format(end, "MMM d, yyyy")}`;
}

/** "Monday, April 21, 2026" */
export function formatDayFull(date: Date): string {
  return format(date, "EEEE, MMMM d, yyyy");
}

/** "09:00" (24-hour, local) */
export function formatTime(date: Date): string {
  return format(date, "HH:mm");
}

/** "09:00 – 10:30" */
export function formatTimeRange(start: Date, end: Date): string {
  return `${formatTime(start)} – ${formatTime(end)}`;
}

/** "Apr 21, 09:00" – compact for badges/lists */
export function formatDateTimeShort(iso: string): string {
  const d = parseUTC(iso);
  return format(d, "MMM d, HH:mm");
}

/** Build the 6-row (42 cell) calendar grid dates for a given month. */
export function getMonthGrid(date: Date): Date[] {
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  return eachDayOfInterval({ start: gridStart, end: gridEnd });
}

/** Build hour slots (0–23) for day/week views. */
export function getHourSlots(): number[] {
  return Array.from({ length: 24 }, (_, i) => i);
}

/** Format hour label: "09:00", "14:00" */
export function formatHourLabel(hour: number): string {
  return `${String(hour).padStart(2, "0")}:00`;
}
