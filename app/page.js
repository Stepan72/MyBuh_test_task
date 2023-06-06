import FirmCard from "@/components/FirmCard";
const data = [1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="m-10 mt-20">
        <h1 className="text-center">Мои организации</h1>
      </header>
      <div id="container" className="mx-80 flex flex-wrap gap-2">
        {data.map((el) => {
          return <FirmCard />;
        })}
      </div>
    </div>
  );
}
