   // components/ImageGallery.js
   "use client"; // Add this line to mark the component as a Client Component

   import { useEffect, useState } from 'react';

   const ImageGallery = ({ searchTerm }) => {
     const [images, setImages] = useState([]);

     useEffect(() => {
       const fetchImages = async () => {
         if (searchTerm) {
           const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=uZeLYmIHccNbzVhgn-7j8Zx8N0-0f466IKkZ5naqj1s`);
           const data = await response.json();
           setImages(data.results || []);
         } else {
           // Fetch random images if no search term
           const randomResponse = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=uZeLYmIHccNbzVhgn-7j8Zx8N0-0f466IKkZ5naqj1s');
           const randomData = await randomResponse.json();
           setImages(randomData);
         }
       };

       fetchImages(); // Call the async function
     }, [searchTerm]);

     return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {images.map((image) => (
           <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
             <img src={image.urls.small} alt={image.alt_description} className="w-full h-auto" />
           </div>
         ))}
       </div>
     );
   };

   export default ImageGallery;