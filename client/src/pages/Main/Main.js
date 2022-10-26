import { AsideNav } from "../../components/AsideNav";

export const Main = () => {
  return (
    //justify-content: center;
    <div className="flex h-screen w-screen pt-20 ">
      <AsideNav />
      <div className=" bg-gray-400">
        <div>contents</div>
        <aside>aside</aside>
      </div>
    </div>
  );
};
