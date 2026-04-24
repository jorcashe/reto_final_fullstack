import ProductGallery from '../components/organisms/ProductGallery';

const Home = () => {
  return (
    <main className="container mx-auto">
      {/* Aquí podrías agregar un Banner o Hero más adelante */}
      <h1 className="text-3xl font-bold text-center my-8">Bienvenido a nuestra Tienda</h1>
      <ProductGallery />
    </main>
  );
};

export default Home;

