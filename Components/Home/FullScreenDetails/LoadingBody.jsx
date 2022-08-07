import Image from "next/image";

export default function LoadingBody() {
  return (
    <div className="w-full h-full flex items-center justify-center saturate-50 animate-pulse">
      <Image src="/imgs/logoDark.svg" width={70} height={70} alt="loading..." />
    </div>
  );
}
