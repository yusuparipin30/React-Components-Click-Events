import Header from "./components/Header";
 
function App() {
  //dinamic value
  const title = "welcome to my app";
  const age = 20;
  const link = "https://github.com/yusuparipin30/";

  /*membuat ero function event untuk memanggil function ini bisa dari button  dengan cara 
  nenambahkan onclick dan menggunakan dinamic value clickme*/
  //cara nengkap parameter yusuf yang ada di button yaitu hanya perlu menambahkan name di function 
  //dan memberikan pesan pada console.log yaitu hello name
  const Clickme = (name) => {
    console.log('Hello:'+ name);
  }
   //"penting" membuat EVENT di buttont yaitu onclick dan memanggil methot dengan ero function 
  return (
    <div>
      <Header />
     <h1>{title}</h1>
     <h1>{age * 3}</h1>
     <a href={link}>Go To Github Yusuf</a>
     <button onClick={() => Clickme('Yusuf')}>Click me</button>
    </div>
  );
}
 
export default App;
