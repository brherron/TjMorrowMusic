import React, { useEffect, useState } from 'react'

function EventsList() {
  const [eventsList, setEventsList] = useState([])
  const [ upcomingShows, setUpcomingShows ] = useState(true)
  const [ artistURL, setArtistURL ] = useState("/")
  const [ error, setError ] = useState(false)
  var currentDate = new Date()
  var eventData = []

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetch(process.env.GATSBY_API_URL+process.env.GATSBY_API_KEY+"&date=all")
      .then(response => {
        return response.json()
      })
      .then(events => {
        eventData = events
      })
      .then(() => {
        buildEventsList()
      })
      .catch(err => {
        setError(true)
        console.log(err)
      });
  }

  const buildEventsList = () => {
    const events = eventData.slice(1).slice(-5);
    const lastEvent = events[events.length - 1];
    const lastEventDate = new Date(lastEvent.datetime)
    const formatter = new Intl.DateTimeFormat('en-US', {  
                  month: 'short',
                  day: '2-digit'
                });

    if (currentDate > lastEventDate) {
      setUpcomingShows(false)
    }

    if (eventData[0].artist) {
      setArtistURL(eventData[0].artist.url)
    }

    setEventsList( events.map((event) =>
      <li key={event.id}>
        <span className="date">
          {formatter.format(new Date(event.datetime)).toUpperCase()}
        </span>
        <span className="venue">{event.venue.name}</span>
        <span className="city">{event.venue.city + ", " + event.venue.region}</span>
        <span className="rsvp">
          {currentDate < new Date(event.datetime) ? 
            <a href={event.url} target="_blank" rel="noopener noreferrer">RSVP</a>
            : <a href={event.url} target="_blank" rel="noopener noreferrer" className="past-show">ENDED</a>
          }
        </span>
      </li>
    ));
  }

  return (
      <div className="main" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <h1>{upcomingShows ? "Upcoming Shows" : "Recent Shows"}</h1>
        <div className="events">
          <span className="error-text" style={{visibility: error ? "visible" : "hidden"}}>There was an error loading event data.</span>
          {eventsList}
        </div>
        <a href={artistURL} target="_blank" rel="noopener noreferrer"className="show-more">VIEW MORE</a>
      </div>
  );
}

export default EventsList