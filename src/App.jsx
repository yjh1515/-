export default function ArtGallerySite() {
  // ======================================================
  // 수정 가능한 공간
  // 여기만 바꾸면 사이트 내용 전체가 수정됨
  // ======================================================

  const gallery = {
    title: "海生",
    subtitle: "SEA AND LIFE",
    description:
      "바다와 삶의 흐름을 한국화적 시선으로 풀어낸 디지털 전시 공간.",
  };

  const artist = {
    name: "양지현",
    intro:
      "바다를 중심으로 흐름과 순환, 생명의 움직임을 탐구하는 작업을 이어가고 있다.",
  };

  const works = [
    {
      title: "생명력",
      year: "2026",
      material: "섬유, 혼합재료",
      description:
        "천의 흐름과 유기적인 형태를 통해 바다 생명체의 움직임과 생명력을 표현한 작품.",
      image: "/20251120_230852.png",
    },

    {
      title: "숨",
      year: "2026",
      material: "라면스프, 혼합재료",
      description:
        "거친 질감과 번짐을 통해 살아 있는 금붕어의 생명성과 호흡을 담아낸 작업.",
      image: "/20260317_120957.jpg",
    },

    {
      title: "일상",
      year: "2025",
      material: "채색, 드로잉",
      description:
        "일상의 언어와 금붕어의 이미지를 결합해 현대적인 감각으로 재해석한 작품.",
      image: "/20251024_154452.jpg",
    },
  ];

  return (
    <div className="bg-[#ebe7df] text-[#151515] min-h-screen overflow-x-hidden">
      {/* ======================================================
          메인 인트로
      ====================================================== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 한지 질감 느낌 */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2200&auto=format&fit=crop"
          alt="sea"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#d8d2c5]/40 via-[#ebe7df]/80 to-[#ebe7df]" />

        {/* 먹 번짐 느낌 */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1a1a1a]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8ca3ad]/25 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-6">
          <p className="tracking-[0.5em] text-xs md:text-sm text-[#2d2a26]/45 mb-8">
            DIGITAL KOREAN ART EXHIBITION
          </p>

          <h1 className="text-7xl md:text-[10rem] font-extralight mb-6 tracking-tight text-[#1a1a1a]">
            {gallery.title}
          </h1>

          <p className="text-lg md:text-2xl text-[#3a3631]/65 mb-6 tracking-[0.2em]">
            {gallery.subtitle}
          </p>

          <p className="max-w-2xl mx-auto text-[#3a3631]/65 leading-relaxed text-lg md:text-xl">
            {gallery.description}
          </p>
        </div>
      </section>

      {/* ======================================================
          작가 소개
      ====================================================== */}
      <section className="py-32 border-t border-[#2f2b27]/10">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#2d2a26]/45 tracking-[0.3em] text-sm mb-6">
              ARTIST
            </p>

            <h2 className="text-5xl md:text-6xl font-extralight leading-tight">
              {artist.name}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-black/65">
              {artist.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          작품 전시
      ====================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-44">
        {works.map((work, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-14 items-center ${
              index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="overflow-hidden rounded-[2.5rem] border border-[#2f2b27]/10 shadow-xl bg-[#f6f1e8]/40 backdrop-blur-md group">
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-[600px] object-cover transition duration-1000 group-hover:scale-105"
              />
            </div>

            <div>
              <p className="text-sm tracking-[0.3em] text-black/35 mb-5">
                WORK {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-4xl md:text-5xl font-extralight mb-8">
                {work.title}
              </h3>

              <div className="space-y-2 text-sm text-black/45 mb-8 tracking-wide">
                <p>{work.year}</p>
                <p>{work.material}</p>
              </div>

              <p className="text-lg leading-relaxed text-black/65">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ======================================================
          엔딩 문구
      ====================================================== */}
      <section className="py-40 mt-20 border-t border-[#2f2b27]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-10 w-96 h-96 bg-[#94a8b0] rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-10 w-96 h-96 bg-[#1b1b1b]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="tracking-[0.3em] text-sm text-black/35 mb-10">
            SEA AND LIFE
          </p>

          <p className="text-2xl md:text-4xl leading-relaxed font-extralight text-black/70">
            “먹처럼 번지고,
            <br />
            파도처럼 흐른다.”
          </p>
        </div>
      </section>
    </div>
  );
}
