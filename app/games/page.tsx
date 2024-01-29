import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Games() {
  return (
    <div className="container mt-4 grid grid-cols-12 gap-4">
      <div className="col-span-6 lg:col-span-2 flex flex-col rounded-2xl bg-card border overflow-hidden group hover:bg-[#121B17] hover:border-[#3DD68C] transition-all duration-300">
        <div className="relative p-2 w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover p-2 rounded-2xl"
            alt="far cry"
            fill
          />
          <div className="absolute bottom-4 right-4 border border-[#3DD68C] text-[#3DD68C] bg-[#121B17] z-10 rounded-md text-xs px-2">
            8/10
          </div>
        </div>
        <div className="flex flex-col p-3 pt-0">
          <div className="flex justify-between items-center">
            <p className="text-[11px] font-code uppercase line-clamp-1">
              XBOX SERIES X | 22.01.2024
            </p>
          </div>
          <div className="flex justify-between">
            <h4 className="w-full text-heading rounded-lg font-semibold leading-tight tracking-tighter line-clamp-2">
              Far Cry 6
            </h4>
          </div>
        </div>
      </div>
      <div className="col-span-6 lg:col-span-2 flex flex-col rounded-2xl bg-card border overflow-hidden">
        <div className="relative p-2 w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/avatar.webp"
            className="object-cover p-2 rounded-2xl"
            alt="far cry"
            fill
          />
          <div className="absolute bottom-4 right-4 border border-[#3DD68C] text-[#3DD68C] bg-[#121B17] z-10 rounded-md text-xs px-2">
            8/10
          </div>
        </div>
        <div className="flex flex-col p-3 pt-0">
          <div className="flex justify-between items-center">
            <p className="text-[11px] font-code uppercase line-clamp-1">
              XBOX SERIES X | 22.01.2024
            </p>
          </div>
          <div className="flex justify-between">
            <h4 className="w-full text-heading rounded-lg font-semibold leading-tight tracking-tighter line-clamp-2 mt-1">
              Avatar: Frontiers of Runterra
            </h4>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-2 flex flex-col bg-card rounded-2xl border overflow-hidden">
        <div className="relative bg-card p-2 w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/dead_space.png"
            className="object-cover p-2 rounded-2xl"
            alt="far cry"
            fill
          />
        </div>
        <div className="flex flex-col p-2 pt-0">
          <p className="text-xs font-code uppercase px-2 mt-1 line-clamp-1">
            Xbox Series X | 22.01.2024
          </p>
          <div className="flex justify-between px-2">
            <h4 className="bg-card w-full text-heading rounded-lg mr-2 font-semibold tracking-tighter line-clamp-2">
              Dead Space 2023
            </h4>
            <p className="flex items-center font-code rounded-lg">8/10</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 flex flex-col bg-card rounded-2xl border overflow-hidden">
        <div className="relative bg-card p-2 w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover p-2 rounded-2xl"
            alt="far cry"
            fill
          />
        </div>
        <div className="flex flex-col p-2 pt-0">
          <p className="text-xs font-code uppercase px-2 mt-1 line-clamp-1">
            Xbox Series X | 22.01.2024
          </p>
          <div className="flex justify-between px-2">
            <h4 className="bg-card w-full text-heading rounded-lg mr-2 font-semibold tracking-tighter line-clamp-2">
              Far Cry 6
            </h4>
            <p className="flex items-center font-code rounded-lg">8/10</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col space-y-5">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 flex flex-col bg-card rounded-2xl border overflow-hidden">
        <div className="relative bg-card p-2 w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover p-2 rounded-2xl"
            alt="far cry"
            fill
          />
        </div>
        <div className="flex flex-col p-2 pt-0">
          <p className="text-xs font-code uppercase px-2 mt-1 line-clamp-1">
            Xbox Series X | 22.01.2024
          </p>
          <div className="flex justify-between px-2">
            <h4 className="bg-card w-full text-heading rounded-lg mr-2 font-semibold tracking-tighter line-clamp-2">
              Far Cry 6
            </h4>
            <p className="flex items-center font-code rounded-lg">8/10</p>
          </div>
        </div>
      </div>
      <div className="col-span-4 flex flex-col space-y-5">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
      </div>
      <div className="col-span-4 flex flex-col space-y-5">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
      </div>
      <div className="col-span-4">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
      </div>
      <div className="col-span-4 flex flex-col">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden mb-5">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
        <h4 className="text-lg text-heading font-semibold leading-normal tracking-tighter mb-2.5">
          Far Cry 6
        </h4>
        <p>Politics</p>
      </div>
      <div className="col-span-4 flex flex-col space-y-5">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
      </div>
      <div className="col-span-4">
        <div className="relative w-full h-[222px] rounded-xl overflow-hidden">
          <Image
            src="/images/far_cry.jpeg"
            className="object-cover"
            alt="far cry"
            fill
          />
        </div>
      </div>
    </div>
  );
}
