import Header from './Components/Header';
import Footer from './Components/Footer';
import LeftContainer from './layouts/LeftContainer';
import Visualisation from './layouts/Visualisation/Visualisation';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-wrap jutify-center items-center flex-grow bg-gray-100 px-10 md:justify-around">
        <LeftContainer />
        <Visualisation />
      </main>
      <Footer />
    </div>
  );
}

export default App;