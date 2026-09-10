import React, { useState, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export default function DoppiPage() {
  const [mounted, setMounted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const title = "Do'ppi";

  const facts = [
    {
      head: "Kelib chiqishi",
      body: "Do'ppi o'zbek erkaklari va ayollari milliy libosining ajralmas qismi bo'lib, asrlar davomida shakllangan. Har bir viloyatning o'z uslubi, o'z naqsh tili bor — Farg'ona vodiysidan Xorazmgacha, do'ppi ko'rinishidan odamning qayerdan ekanini bilib olish mumkin bo'lgan.",
    },
    {
      head: "Chust do'ppisi",
      body: "Eng mashhur turi — qora baxmalga oq ipak bilan tikilgan Chust do'ppisi. Old va orqa tomonida to'rtta yorug' 'ravoq' (gumbaz shakli), atrofida esa 'qalampir' naqshi tikiladi. Naqsh yovuzlikdan asraydigan tumor vazifasini ham bajargan deb hisoblanadi.",
    },
    {
      head: "Naqshning ramziy ma'nosi",
      body: "Har bir chiziq va gul tasodifiy emas: geometrik takrorlanuvchi naqsh — tumor, ravoq shakli — osmon gumbazi va yorug'lik ramzi. Rang tanlovi ham ma'noga ega bo'lgan: naqshning ko'rinishi kiyuvchining yoshi, hududi va mavqeini ham bildirgan.",
    },
    {
      head: "Do'ppichilik san'ati",
      body: "Do'ppi tikish — nozik qo'l hunari: avval qalin karton yoki mato asosida qolip tayyorlanadi, so'ng baxmalga ipak yoki metall ip bilan naqsh qo'lda kashta qilinadi. Bir do'ppini tikish bir necha kundan bir necha haftagacha vaqt talab qiladi, shuning uchun har bir do'ppi — ustaning mehnati va sabr-toqati mahsuli hisoblanadi.",
    },
    {
      head: "Mintaqaviy uslublar",
      body: "Chustdan tashqari Shahrisabz do'ppisi gulli va rang-barang, Samarqand hamda Buxoro do'ppilari zardo'zlik — oltin ip bilan tikilgan boy naqshlari bilan, Xorazm do'ppisi esa tugmachasimon yumaloq shakli bilan ajralib turadi. Surxondaryo va Qashqadaryoda ham o'ziga xos gul va rang uyg'unligi bilan tanilgan do'ppilar tikiladi.",
    },
    {
      head: "Erkaklar va ayollar do'ppisi",
      body: "Erkaklar do'ppisi odatda qat'iy geometrik naqsh va qora-oq ranglar uyg'unligida bo'lsa, ayollar va qizlar do'ppisi ko'proq rang-barang, gulli va murakkab kashtali bo'ladi. To'y marosimlarida kelin-kuyovga alohida bezatilgan, qimmatbaho do'ppilar tikilishi ham an'anaga aylangan.",
    },
    {
      head: "Bugungi kunda",
      body: "2018-yilda ijtimoiy tarmoqlarda boshlangan #doʻppikiyamiz aksiyasi dunyo bo'ylab o'zbeklarni birlashtirdi — hattoki fazogir ham do'ppida surat tushirdi. Bugun do'ppi nafaqat an'ana, balki milliy o'ziga xoslikning yosh avlod tomonidan qayta kashf etilgan ramzidir.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#120f0c] font-[Manrope]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Manrope', sans-serif; }

        @keyframes riseIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes softScale {
          from { opacity: 0; transform: scale(.92) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .letter {
          display: inline-block;
          opacity: 0;
          animation: riseIn 0.7s cubic-bezier(.2,.7,.3,1) forwards;
        }
        .subtitle-in {
          opacity: 0;
          animation: riseIn 0.7s cubic-bezier(.2,.7,.3,1) forwards;
          animation-delay: 0.6s;
        }
        .doppi-in {
          opacity: 0;
          animation: softScale 0.9s cubic-bezier(.2,.7,.3,1) forwards;
          animation-delay: 0.85s;
        }
        .btn-in {
          opacity: 0;
          animation: riseIn 0.7s cubic-bezier(.2,.7,.3,1) forwards;
          animation-delay: 1.25s;
        }
        .panel-in { animation: panelIn 0.5s cubic-bezier(.2,.7,.3,1) forwards; }

        @keyframes waveA {
          0%,100% { transform: translateX(0) skewY(0deg); }
          50% { transform: translateX(-1.2%) skewY(0.6deg); }
        }
        @keyframes waveB {
          0%,100% { transform: translateX(0) skewY(0deg); }
          50% { transform: translateX(1.4%) skewY(-0.7deg); }
        }
        .flag-stripe-1 { animation: waveA 5.5s ease-in-out infinite; transform-origin: left center; }
        .flag-stripe-2 { animation: waveB 5.5s ease-in-out infinite; animation-delay: -1.4s; transform-origin: left center; }
        .flag-stripe-3 { animation: waveA 5.5s ease-in-out infinite; animation-delay: -2.8s; transform-origin: left center; }
        .flag-emblem { animation: waveB 5.5s ease-in-out infinite; animation-delay: -0.7s; transform-origin: left center; }
      `}</style>

      {/* Orqa fon: hilpirayotgan O'zbekiston bayrog'i, xira va loyqa qilingan */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 900 600"
          className="h-[130%] w-[130%] opacity-[0.32] blur-[3px]"
          preserveAspectRatio="xMidYMid slice"
        >
          <g className="flag-stripe-1">
            <rect x="0" y="0" width="900" height="240" fill="#0099B5" />
          </g>
          <g className="flag-stripe-2">
            <rect x="0" y="232" width="900" height="16" fill="#CE1126" />
            <rect x="0" y="248" width="900" height="104" fill="#FDFDFD" />
            <rect x="0" y="352" width="900" height="16" fill="#CE1126" />
          </g>
          <g className="flag-stripe-3">
            <rect x="0" y="368" width="900" height="232" fill="#1EB53A" />
          </g>
          <g className="flag-emblem" fill="#FDFDFD">
            <circle cx="150" cy="90" r="54" fill="#FDFDFD" />
            <circle cx="168" cy="90" r="46" fill="#0099B5" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = -100 + i * 16;
              const rad = (angle * Math.PI) / 180;
              const cx = 150 + 96 * Math.cos(rad);
              const cy = 90 + 96 * Math.sin(rad);
              return <circle key={i} cx={cx} cy={cy} r="4.5" fill="#FDFDFD" />;
            })}
          </g>
        </svg>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0b09]/80 via-[#100d0a]/78 to-[#0d0b09]/88" />

      {/* Asosiy kontent */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center px-6 py-16 text-center sm:py-24">
        <p
          className="subtitle-in font-body text-[11px] tracking-[0.25em] text-[#d7c9a3]/70"
          style={{ animationPlayState: mounted ? "running" : "paused" }}
        >
          TEXNOLOGIYA FANIDAN LOYIHA
        </p>

        <h1 className="font-display mt-5 text-[3.4rem] font-semibold leading-[1.05] text-[#f6efe0] sm:text-[5.2rem]">
          {title.split("").map((ch, i) => (
            <span
              key={i}
              className="letter"
              style={{
                animationDelay: `${0.15 + i * 0.06}s`,
                animationPlayState: mounted ? "running" : "paused",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <p
          className="subtitle-in font-body mt-6 max-w-md text-[15px] leading-relaxed text-[#e9ddc6]/80 sm:text-base"
          style={{ animationPlayState: mounted ? "running" : "paused" }}
        >
          O'zbek milliy bosh kiyimi — naqshida tarix, ipida hurmat, shaklida
          esa asrlar osha yashab kelayotgan o'ziga xoslik yashiringan.
        </p>

        {/* Qo'lda chizilgan do'ppi tasviri */}
        <div
          className="doppi-in mt-14 sm:mt-16"
          style={{ animationPlayState: mounted ? "running" : "paused" }}
        >
          <svg width="240" height="210" viewBox="0 0 240 210" fill="none">
            {/* Soya */}
            <ellipse cx="120" cy="184" rx="102" ry="13" fill="#000" opacity="0.35" />

            {/* Do'ppining tanasi (qora baxmal) */}
            <path
              d="M20 156 C20 88 62 26 120 26 C178 26 220 88 220 156 L220 164 C220 176 178 184 120 184 C62 184 20 176 20 164 Z"
              fill="#15110e"
              stroke="#3a332c"
              strokeWidth="1.5"
            />

            {/* Pastki oq ip haoshiyasi (quloqcha) */}
            <path
              d="M20 164 C20 176 62 184 120 184 C178 184 220 176 220 164"
              fill="none"
              stroke="#f3ead4"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M24 168 C24 176 64 181 120 181 C176 181 216 176 216 168"
              fill="none"
              stroke="#efe6d2"
              strokeWidth="1"
              strokeDasharray="1 5"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Yuqori bo'ylama qirra */}
            <path
              d="M20 156 C20 88 62 26 120 26 C178 26 220 88 220 156"
              fill="none"
              stroke="#f3ead4"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.55"
            />

            {/* To'rtta "ravoq" (gumbaz) naqshi + ichida qalampir naqshi */}
            {[0, 1, 2, 3].map((i) => {
              const cx = 62 + i * 39;
              return (
                <g key={i}>
                  {/* Ravoq (gumbaz shakli) chizig'i */}
                  <path
                    d={`M${cx - 17} 156 Q${cx} 92 ${cx + 17} 156`}
                    fill="none"
                    stroke="#f3ead4"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M${cx - 11} 156 Q${cx} 108 ${cx + 11} 156`}
                    fill="none"
                    stroke="#e7dcc0"
                    strokeWidth="1"
                    opacity="0.6"
                  />
                  {/* Qalampir (chili) naqshi */}
                  <path
                    d={`M${cx} 118 C${cx + 8} 122 ${cx + 7} 134 ${cx} 140 C${cx - 7} 134 ${cx - 8} 122 ${cx} 118 Z`}
                    fill="#f3ead4"
                  />
                  <path
                    d={`M${cx} 116 q4 4 0 8 q-4 -4 0 -8`}
                    fill="#15110e"
                  />
                  <circle cx={cx} cy="146" r="2.4" fill="#f3ead4" />
                  <circle cx={cx - 6} cy="150" r="1.6" fill="#e7dcc0" opacity="0.85" />
                  <circle cx={cx + 6} cy="150" r="1.6" fill="#e7dcc0" opacity="0.85" />
                </g>
              );
            })}

            {/* Tepadagi markaziy naqsh nuqtasi */}
            <circle cx="120" cy="40" r="3" fill="#f3ead4" />
            <path d="M108 46 Q120 36 132 46" stroke="#f3ead4" strokeWidth="1.4" fill="none" opacity="0.7" />
          </svg>
        </div>

        <button
          onClick={() => setShowInfo(true)}
          className="btn-in font-body mt-14 rounded-full border border-[#e9ddc6]/30 bg-[#efe6d2]/[0.06] px-8 py-3 text-[13px] font-semibold tracking-wide text-[#f6efe0] backdrop-blur-sm transition-colors duration-200 hover:bg-[#efe6d2]/[0.14]"
          style={{ animationPlayState: mounted ? "running" : "paused" }}
        >
          Do'ppi haqida batafsil
        </button>
      </div>

      {/* Ma'lumot paneli */}
      {showInfo && (
        <div className="fixed inset-0 z-20 flex items-end justify-center bg-black/55 backdrop-blur-sm sm:items-center">
          <div className="panel-in font-body relative max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-[#e9ddc6]/15 bg-[#1a1613] p-7 shadow-2xl sm:rounded-3xl sm:p-9">
            <button
              onClick={() => setShowInfo(false)}
              className="absolute right-5 top-5 rounded-full p-1.5 text-[#e9ddc6]/60 transition-colors hover:bg-white/10 hover:text-[#f6efe0]"
              aria-label="Yopish"
            >
              <X size={18} />
            </button>

            <p className="text-[11px] tracking-[0.25em] text-[#d7c9a3]/60">
              MILLIY MEROS
            </p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-[#f6efe0]">
              Do'ppi
            </h2>

            <div className="mt-6 space-y-6">
              {facts.map((f, i) => (
                <div
                  key={i}
                  className="border-t border-[#e9ddc6]/10 pt-5 first:border-none first:pt-0"
                >
                  <h3 className="font-display text-lg font-medium text-[#e7d9b8]">
                    {f.head}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#e9ddc6]/75">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowInfo(false)}
              className="mt-8 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#efe6d2]/10 py-3 text-[13px] font-semibold text-[#f6efe0] transition-colors hover:bg-[#efe6d2]/[0.18]"
            >
              Yopish <ChevronDown size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
