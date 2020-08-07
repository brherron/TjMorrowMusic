import React from 'react'
import jsonData from "../aux/testData.json"

function EventsList() {
  var upcomingShows = true
  var artistURL = "/" ;
  const currentDate = new Date()
  const data = [...jsonData]
  const events = data.slice(1).slice(-5);
  const lastEvent = events[4];
  const lastEventDate = new Date(lastEvent.datetime)
  const formatter = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: '2-digit'
              });


  if (currentDate > lastEventDate) {
    upcomingShows = false
  }

  if (data[0].artist) {
    artistURL = data[0].artist.url
  }

  const eventsList = events.map((event) =>
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
  );

  return (
      <div className="main" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <h1>{upcomingShows ? "Upcoming Shows" : "Recent Shows"}</h1>
        <div className="events">
          {eventsList}
        </div>
        <a href={artistURL} target="_blank" rel="noopener noreferrer"className="show-more">VIEW MORE</a>
      </div>
  );
}

export default EventsList