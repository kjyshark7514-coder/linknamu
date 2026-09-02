import Image from "next/image";
import LinkCards from "@/components/LinkCards";
import { links } from "@/lib/links";

// TODO: 더미 데이터 — 나중에 실제 프로필/링크 데이터로 교체
const profile = {
  name: "김상어",
  bio: "풀스택 개발자 ¦ 요즘에는 AI 개발에 관심이 많아요",
  avatarSrc: "/증명상어.png",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center bg-gradient-to-b from-emerald-200 via-teal-100 to-cyan-50 px-6 py-20 sm:px-10 dark:from-emerald-950 dark:via-teal-950 dark:to-slate-950">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-full shadow-[0_12px_30px_-8px_rgba(6,95,70,0.35)] ring-4 ring-white/70 dark:ring-white/10">
            <Image
              src={profile.avatarSrc}
              alt={`${profile.name} 프로필 사진`}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-emerald-950 dark:text-emerald-50">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-emerald-950/70 dark:text-emerald-100/70">
              {profile.bio}
            </p>
          </div>
        </div>

        <LinkCards links={links} />
      </div>
    </div>
  );
}
