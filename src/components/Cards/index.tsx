interface DataProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface CardsProps {
  data: DataProps[];
}

const Cards = ({ data }: CardsProps): JSX.Element => {
  return (
    <section className="mt-4 flex flex-wrap justify-center items-center gap-4">
      {data.map((item, index) => {
        console.log({ item });
        return (
          <div key={index} className="w-2/5 bg-white rounded-lg text-black p-6">
            {item.icon}
            <div>
              <h1 className="text-lg">{item.title}</h1>
              <p className="text-base">{item.description}</p>
              <button className="bg-orange-400 mt-4 px-4 py-2 text-xl rounded-lg">
                Lihat Detail
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
