import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import Entry from './Entry';

function EntryList() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('entries')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        setError(error.message);
        console.error('Error fetching entries:', error);
      } else {
        setEntries(data || []);
      }
    } catch (err) {
      setError('Failed to fetch entries');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-8">
        <div className="text-lg">Loading worship team...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-8">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full p-4">
      {/* Container with horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
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
      
      
    </div>
  );
}

export default EntryList;