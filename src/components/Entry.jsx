function Entry({ title, content, location, googleMapsLink, dates, imageUrl }) {
  return (
    <article className="flex-shrink-0 bg-gray-100 text-gray-400 w-3/4 flex justify-center items-center gap-8 p-8">
      <div>
        <img className="rounded-md" src={imageUrl || "https://placehold.co/200x300"} alt="Entry image" />
      </div>
      <div className="flex flex-col gap-4 w-4/5">
        <div className="text-gray-400">
          <span className="pr-2">{location}</span> 
          <span><a className="text-blue-600" href={googleMapsLink} target="_blank" rel="noopener noreferrer">View More</a></span>
        </div>
        
        <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>
        <p>{dates}</p>
        <p>{content}</p>
      </div>
    </article>
  );
}

export default Entry;