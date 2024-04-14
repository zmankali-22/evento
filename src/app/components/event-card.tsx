import { EventoEvent } from "../lib/types";

type EventCardProps = {
  event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
  return <section>{event.name}</section>;
}
