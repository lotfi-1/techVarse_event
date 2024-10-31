/** @format */

export default function PurpleLight({ className }: { className?: string }) {
  const style = "w-full h-[100px] relative overflow-hidden" + " " + className;
  return (
    <div className={style}>
      <div className="absolute top-1/2 left-1/2 rotate-180 -translate-x-1/2 h-[100px] w-[740px] sm:w-[1162px] lg:w-[1698px] xl:w-[1800px] rounded-[50%] shadow-lg shadow-shadow border-2 border-shadow" />
    </div>
  );
}
