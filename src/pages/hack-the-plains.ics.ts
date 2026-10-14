// Calendar file for "Add to calendar", built from event.yaml.
import event from '../data/event.yaml';

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
// Commas and semicolons are separators in iCalendar text values.
const esc = (s: string) => s.replace(/([,;\\])/g, '\\$1');

export function GET() {
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Hack the Plains//EN',
    'BEGIN:VEVENT',
    `UID:hack-the-plains-${event.year}@hacktheplains`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(new Date(event.start))}`,
    `DTEND:${stamp(new Date(event.end))}`,
    `SUMMARY:${esc(`${event.name} ${event.year}`)}`,
    `LOCATION:${esc(`${event.venue}, ${event.city}`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  return new Response(body, { headers: { 'Content-Type': 'text/calendar; charset=utf-8' } });
}
