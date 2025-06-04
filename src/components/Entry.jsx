function Entry({ title, content, location, googleMapsLink, dates, imageUrl }) {
  return (
    <article className="flex-shrink-0 bg-gray-100 text-gray-400 w-full flex flex-wrap justify-center items-center gap-8 p-8 rounded-lg">
      
      <div>
        <img className="rounded-md aspect-video" src={imageUrl || "https://placehold.co/400x400"} alt="Entry image" />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="text-gray-400">
          <span className="pr-2">{location}</span> 
          
        </div>
        
        <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
        <p>{dates}</p>
        <p>{content}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <a className="text-center font-semibold text-white w-full text-xl px-4 py-2 bg-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-900 hover:border-blue-900" href={googleMapsLink} target="_blank" rel="noopener noreferrer">Send Request</a>
          <a className="text-center font-semibold text-blue-600 w-full text-xl px-4 py-2 border-2 border-blue-600 rounded-full hover:bg-blue-900 hover:border-blue-900 hover:text-white" href={googleMapsLink} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
        
        
        
      </div>
    </article>
  );
}

export default Entry;