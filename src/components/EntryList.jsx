import Entry from './Entry'
function EntryList() {
  // Test data matching your Entry component structure
  const entries = [
    { 
      id: 1, 
      title: "Sarah Mitchell", 
      content: "Experienced worship leader with over 8 years leading congregational singing. Passionate about creating an atmosphere of authentic worship and helping others connect with God through music. Available for Sunday services and special events.",
      location: "Lead Vocals",
      googleMapsLink: "mailto:sarah.mitchell@church.org",
      dates: "Available Sundays",
      imageUrl: "https://placehold.co/200x300/4F46E5/FFFFFF?text=Vocals"
    },
    { 
      id: 2, 
      title: "Marcus Johnson", 
      content: "Skilled acoustic and electric guitarist with a heart for worship ministry. Experienced in contemporary Christian music and traditional hymns. Committed to supporting the worship experience through skillful and Spirit-led playing.",
      location: "Guitar",
      googleMapsLink: "mailto:marcus.johnson@church.org",
      dates: "Available Weekends",
      imageUrl: "https://placehold.co/200x300/EC4899/FFFFFF?text=Guitar"
    },
    { 
      id: 3, 
      title: "David Chen", 
      content: "Professional drummer with 10+ years of worship ministry experience. Specializes in contemporary worship styles while maintaining sensitivity to the flow of worship. Dedicated to serving the church through rhythm and excellence.",
      location: "Drums",
      googleMapsLink: "mailto:david.chen@church.org",
      dates: "Available Most Sundays",
      imageUrl: "https://placehold.co/200x300/10B981/FFFFFF?text=Drums"
    },
    { 
      id: 4, 
      title: "Rachel Thompson", 
      content: "Classically trained pianist with a passion for worship ministry. Experienced in both contemporary and traditional church music styles. Loves supporting congregational singing and creating beautiful musical moments in worship.",
      location: "Piano/Keys",
      googleMapsLink: "mailto:rachel.thompson@church.org",
      dates: "Available Bi-weekly",
      imageUrl: "https://placehold.co/200x300/F59E0B/FFFFFF?text=Piano"
    },
    { 
      id: 5, 
      title: "Emmanuel Rodriguez", 
      content: "Versatile bass player with experience in worship, gospel, and contemporary Christian music. Committed to providing a solid foundation for the worship team while maintaining a heart of service and excellence in ministry.",
      location: "Bass Guitar",
      googleMapsLink: "mailto:emmanuel.rodriguez@church.org",
      dates: "Available Most Weekends",
      imageUrl: "https://placehold.co/200x300/EF4444/FFFFFF?text=Bass"
    }
  ];


  return (
    <div className="w-full">
      {/* Container with horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-col gap-4 pb-4">
          {entries.map(({id, title, content, location, googleMapsLink, dates, imageUrl}) => (
            <Entry 
              key={id}
              title={title}
              content={content}
              location={location}
              googleMapsLink={googleMapsLink}
              dates={dates}
              imageUrl={imageUrl}
            />
          ))}
        </div>
      </div>
      
      {/* Optional: Add custom scrollbar styling */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default EntryList;