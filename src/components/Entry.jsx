function Entry({ title, content, location, googleMapsLink, dates, imageUrl }) {
  return (
    <article className="flex-shrink-0 bg-gray-100 text-gray-400 w-full flex justify-center items-center gap-8 p-8">
      <div>
        <img className="rounded-md" src={imageUrl || "https://placehold.co/200x300"} alt="Entry image" />
      </div>
      <div className="flex flex-col gap-4 w-4/5">
        <div className="text-gray-400">
          <span className="pr-2">{location}</span> 
          
        </div>
        
        <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
        <p>{dates}</p>
        <p>{content}</p>
        <div className="pt-4">
          <a className="text-white px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-900" href={googleMapsLink} target="_blank" rel="noopener noreferrer">Contact Me</a>
        </div>
      </div>
    </article>
  );
}

export default Entry;