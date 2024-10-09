   // pages/index.js
   import { useState } from 'react';
   import ImageGallery from '../components/ImageGallery';

   const Home = () => {
     const [searchTerm, setSearchTerm] = useState('');

     const handleSearch = (e) => {
       setSearchTerm(e.target.value);
     };

     const handleVoiceSearch = () => {
       const recognition = new window.webkitSpeechRecognition();
       recognition.onresult = (event) => {
         const transcript = event.results[0][0].transcript;
         setSearchTerm(transcript);
       };
       recognition.start();
     };

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
         <div className="mb-4">
           <input
             type="text"
             value={searchTerm}
             onChange={handleSearch}
             placeholder="Search images..."
             className="border p-2 rounded w-full"
           />
           <button onClick={handleVoiceSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
             🎤
           </button>
         </div>
         <ImageGallery />
       </div>
     );
   };

   export default Home;