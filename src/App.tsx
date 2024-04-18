import { Apple, Banana, Cherry, Citrus, Grape } from 'lucide-react';
import Layout from './components/Layout';

// cards data
const cardsData = [
  {
    icon: <Apple />,
    title: 'Apple',
    description:
      'Apples are sweet, crisp fruits that come in a variety of colors, including red, green, and yellow. They are known for their juiciness and versatility in cooking.',
  },
  {
    icon: <Banana />,
    title: 'Banana',
    description:
      'Bananas are soft, sweet fruits with a smooth yellow skin. They are known for their high potassium content and are often eaten as a quick, healthy snack.',
  },
  {
    icon: <Citrus />,
    title: 'Orange',
    description:
      'Oranges are juicy, tangy fruits with a bright orange peel. They are rich in vitamin C and are popular for their refreshing taste and vibrant color.',
  },
  {
    icon: <Grape />,
    title: 'Grapes',
    description:
      'Grapes are small, round fruits that come in various colors, including green, red, and black. They can be eaten fresh, dried as raisins, or used to make wine.',
  },
  {
    icon: <Cherry />,
    title: 'Cherry',
    description:
      'Cherries are small, round fruits with a smooth, shiny skin. They have a sweet or tart taste and are often used in pies, jams, and other desserts.',
  },
];

function App() {
  return (
    <Layout>
      <div className="w-4/5 mx-auto mt-6">
        <h1 className="text-2xl text-center">Display Card</h1>

        {/* cards section */}
        <section className="mt-4">
          {/* isi data ini diganti dengan cardsData */}
          <div className="w-2/5 bg-white rounded-lg text-black p-6">
            <Apple width={50} height={50} />
            <div>
              <h1 className="text-lg">Apple</h1>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas iusto quas ab a accusamus doloribus totam
                exercitationem libero repellat consectetur rem animi fuga
                corporis molestiae necessitatibus, deleniti praesentium dicta
                et!
              </p>
              <button className="bg-orange-400 mt-4 px-4 py-2 text-xl rounded-lg">
                Lihat Detail
              </button>
            </div>
          </div>
        </section>

        {/* buatkan count */}
        {/* kondisi jika click button minus value tidak bisa minus (-1) */}
        {/* kondisi jika click button plus value tidak bisa lebih dari 30 */}
        <div className="w-2/5 mx-auto flex justify-evenly mt-32">
          <button className="bg-slate-100 text-black w-10 h-10 text-3xl rounded-full">
            -
          </button>
          <div className="text-2xl font-semibold">0</div>
          <button className="bg-slate-100 text-black w-10 h-10 text-3xl rounded-full">
            +
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default App;
