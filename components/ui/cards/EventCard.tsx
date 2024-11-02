/** @format */

export default function EventCard({ event }: { event: EventCardProps }) {
  return (
    <div className="w-full max-w-xs md:w-[320px] flex flex-col items-center justify-center border border-foreground p-6">
      <div className="w-10 h-10 overflow-hidden">{event.icon}</div>
      <div className="flex flex-col justify-between items-center mt-4">
        <h3 className="text-2xl font-bold text-center mb-2">{event.title}</h3>
        <p className="text-center">{event.description}</p>
      </div>
    </div>
  );
}
