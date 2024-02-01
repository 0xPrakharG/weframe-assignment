export default function SubHeading({ name }) {
  return (
    <div className="flex items-center justify-between my-5">
      <h4 className="text-[#212121] text-xl font-semibold">{name}</h4>
      <button className="text-[#9058FF] text-base">See all</button>
    </div>
  );
}