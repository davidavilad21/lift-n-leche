// App.jsx
// React + Tailwind Landing Page for Lift N Leche
import blueberryimg from "./assets/Blueberry.png"
import raimbowcrunchImg from "./assets/rainbowcrunch.png"
import logoImg from "./assets/liftnlechelogo.png";
import cookiesImg from "./assets/CookiesImg.png";
import strawberryImg from "./assets/strawberryimg.png";
import horchataImg from "./assets/horchataimg.png";
import blueberryLemonImg from "./assets/Blueberry-lemon.png";

export default function App() {
const flavors = [
  {
    name: "Cookies N' Cream",
    image: cookiesImg,
    macros5: "200 CAL • 10P • 38C • 5F",
    macros10: "315 CAL • 16P • 62C • 6F",
    desc: "Rich vanilla cake topped with a creamy cookies-and-cream finish.",
  },
  {
    name: "Strawberry",
    image: strawberryImg,
    macros5: "165 CAL • 9P • 31C • 4F",
    macros10: "280 CAL • 15P • 55C • 5F",
    desc: "Fresh strawberry flavor layered into a protein packed classic.",
  },
  {
    name: "Horchata  🔥 BEST SELLER!",
    image: horchataImg,
    macros5: "190 CAL • 9P • 35C • 4F",
    macros10: "305 CAL • 15P • 59C • 5F",
    desc: "Cinnamon, vanilla, and nostalgic horchata flavor in every single bite.",
  },
  {
    name: "Blueberry",
    image: blueberryimg,
    macros5: "165 CAL • 9P • 31C • 4F",
    macros10: "280 CAL • 15P • 55C • 5F",
    desc: "Sweet blueberry flavor balanced with a light, creamy finish.",
  },
  {
    name: "Blueberry Lemon Zest",
    image: blueberryLemonImg,
    macros5: "165 CAL • 9P • 31C • 4F",
    macros10: "280 CAL • 15P • 55C • 5F",
    desc: "Bright citrus and blueberry flavor with a refreshing twist.",
  },
  {
    name: "Rainbow Crunch",
    image: raimbowcrunchImg,
    macros5: "200 CAL • 9P • 39C • 4F",
    macros10: "310 CAL • 15P • 63C • 5F",
    desc: "Colorful, crunchy, and surprisingly macro-friendly.",
  },
];

  return (
    <div className="bg-[#F6E9D7] text-[#2B1C18] min-h-screen">
      {/* HERO */}
      <section className="bg-[#2B1C18] text-[#F6E9D7]">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Lift N' Leche
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-[#C78E62] mb-6">
              Macros con Sabor. No Excuses.
            </h2>

            <p className="text-lg md:text-xl mb-8 text-[#e8d9c8]">
              High-protein cakes inspired by culture, crafted for balance,
              and built to satisfy cravings. Same indulgence. Smarter macros.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://ig.me/m/liftnleche"
                target="_blank"
                rel="noreferrer"
                className="bg-[#C78E62] text-[#2B1C18] px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Order Now!
              </a>

              <a
                href="#flavors"
                className="border border-[#F6E9D7] px-6 py-3 rounded-full hover:bg-white hover:text-[#2B1C18] transition"
              >
                Explore Flavors
              </a>
            </div>
         </div>

<div className="flex justify-center items-center">  <img
    src={logoImg}
    alt="Lift N Leche Logo"
    className="w-[350px] h-[350px] object-contain"
  />
</div>

</div>
</section>

      {/* WHAT IS THIS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">
          The Cake You Loved as a kid, Reimagined.
        </h2>

        <p className="text-lg leading-relaxed">
          Tres Leches is a traditional Mexican cake soaked in three milks it is
          rich, dense, and full of flavor.
          <br />
          <br />
          We took that same cake and reinvented it into a higher protein,
          lower sugar dessert with the same texture, the same taste, and
          roughly half the calories.
          <br />
          <br />
          This isn't just a healthier alternative it's a better one.
        </p>
      </section>

      {/* HOW */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold mb-6">
            Built for Goals. Made for Cravings.
          </h2>

          <p className="text-lg leading-relaxed">
            Lift N Leche cakes are baked with high protein ingredients,
            lower sugar formulations, and craveworthy flavors.
            <br />
            <br />
            Our desserts bridge the gap between fitness and indulgence 
            because hitting your goals shouldn't mean having to give up cake.
          </p>
        </div>
      </section>

      {/* FLAVORS */}
      <section id="flavors" className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Flavors
        </h2>

        <p className="text-center text-lg mb-14">
          Flavor first. Macros second. No compromises.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor) => (
            <div
              key={flavor.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
            >
<img
  src={flavor.image}
  alt={flavor.name}
  className="h-72 w-full object-cover"
/>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {flavor.name}
                </h3>

<div className="bg-[#F6E9D7] rounded-xl p-4 mb-4">
  <div className="flex justify-between items-center mb-3">
    <div>
      <p className="font-bold text-sm uppercase tracking-wide">
        5 oz Cake
      </p>
      <p className="font-semibold">
        {flavor.macros5}
      </p>
    </div>

    <div className="bg-[#2B1C18] text-white px-3 py-1 rounded-full font-bold">
      $5
    </div>
  </div>

  <div className="border-t border-[#d9c9b5] pt-3 flex justify-between items-center">
    <div>
      <p className="font-bold text-sm uppercase tracking-wide">
        10 oz Cake
      </p>
      <p className="font-semibold">
        {flavor.macros10}
      </p>
    </div>

    <div className="bg-[#C78E62] text-[#2B1C18] px-3 py-1 rounded-full font-bold">
      $10
    </div>
  </div>
</div>

                <p className="mb-6 text-gray-700">
                  {flavor.desc}
                </p>

                <a
                  href="https://ig.me/m/liftnleche"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-[#4A3128] text-white px-5 py-3 rounded-full"
                >
                  Order Now!
                </a>
              </div>
            </div>
          ))}

          {/* Weekly Special */}
          <div className="bg-[#4A3128] text-white rounded-3xl overflow-hidden shadow-xl">
            <div className="h-56 bg-[#A14E5A] flex items-center justify-center">
              <span className="font-bold text-2xl">
                Weekly Special ⭐
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                Limited Time Flavor
              </h3>

              <div className="bg-white text-[#2B1C18] rounded-xl p-3 text-center font-semibold mb-4">
                CAL • P • C • F
              </div>

              <p>
                A rotating flavor drop available for a limited time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#4A3128] text-[#F6E9D7]">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-8">
           Our Mission
          </h2>

          <p className="text-lg leading-relaxed">
            At Lift N Leche, our mission is to redefine dessert by creating higher protein, flavor packed cakes that bring together indulgence, balance, and culture.

We believe you shouldn't have to choose between your goals and the foods you love. That's why every cake is crafted to deliver the taste and experience of a true dessert while still supporting a healthier lifestyle.

Because great flavor should never be a compromise. We believe you shouldn't have to choose between your goals and
            the foods you love..
        <div className="mt-10">
  <p className="text-3xl md:text-5xl font-bold text-[#C78E62]">
    Macros Con Sabor.
  </p>

  <p className="text-4xl md:text-6xl font-black uppercase tracking-wide mt-2 text-white">
    No Excuses.
  </p>
</div>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F6E9D7]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Try Lift N Leche?
          </h2>

          <p className="text-xl mb-8">
            Protein-packed. Flavor-loaded. Built with sabor.
          </p>

          <a
            href="https://ig.me/m/liftnleche"
            target="_blank"
            rel="noreferrer"
            className="bg-[#2B1C18] text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            DM @liftnleche on Instagram to Order
          </a>
        </div>
      </section>
    </div>
  );
}