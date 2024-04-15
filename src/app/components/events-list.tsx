import { EventoEvent } from "../lib/types";
import EventCard from "./event-card";


type EventsListProps = {
  events: EventoEvent[]
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <section className="max-w-[1100px] px-[20px] flex flex-wrap gap-10 justify-center" >
      {events.map((event) => (
       <EventCard key = {event.id} event ={event}/>
      ))}
    </section>
  );
}
