/** @format */

export default function AudienceCars({
  audience,
}: {
  audience: EventCardProps;
}) {
  return (
    <div className="w-full md:w-w-1/2 flex flex-col items-start justify-center">
      {audience.icon}
      <div className="flex flex-col justify-between items-start mt-4">
        <h3 className="text-2xl font-bold mb-2">{audience.title}</h3>
        <p>{audience.description}</p>
      </div>
    </div>
  );
}