import React, { useEffect, useState } from 'react'

function EventsList() {
  const [eventsList, setEventsList] = useState([])
  const [ upcomingShows, setUpcomingShows ] = useState(true)
  const [ artistURL, setArtistURL ] = useState("/")
  const [ error, setError ] = useState(false)
  var currentDate = new Date() 
  var eventData = []
  var datesToDisplay = 5

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
    const events = eventData.slice(0).reverse();
    const lastEvent = events[0];
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

    const eventList = organizeEvents(events)

    setEventsList( eventList.map((event) => {
      
      return <li key={event.id}>
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
    }));
  }

  const organizeEvents = (events) => {
    var newEventList = []

    for (var i = 0; i < events.length-1; i++) {

      if (currentDate < new Date(events[i].datetime)) {
        //Future event. We want as many of these as possible.
        if (newEventList.length < datesToDisplay) {
          //If there are less than we want to display, add to list.
          newEventList.unshift(events[i])
        } else {
          //If there are more, add to list and remove furthest date away.
          newEventList.pop()
          newEventList.unshift(events[i])
        }
      } else {
        //Past event, add it only if there is room to display.
        if (newEventList.length < datesToDisplay) {
          newEventList.unshift(events[i])
        }
      }
    }

    return newEventList
  } 

  return (
      <div className="main">
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