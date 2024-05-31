import { Image } from 'react-bootstrap'
import { TeamsProps } from './Teams'
import './TeamsList.css'
import { useState } from 'react'

export const TeamList = ({
  teamData
}: TeamsProps) => {
  const [showInput, setShowInput] = useState(false)
  const [items, setItems] = useState(3)
  const [query, setQuery] = useState('')

  const filteredData = teamData.filter(team => team.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className='team-list-block'>
      <article className='team-list-header'>
        <h2>Our members list</h2>
        <div className='input-container'>
          <input 
            className={`search-input ${showInput ? 'input-visible' : ''}`} 
            placeholder='Search members...'
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className='btn' onClick={() => setShowInput(!showInput)}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
          <i className='fa-solid fa-star'></i>
        </div>
      </article>
      {
        filteredData.slice(0,items).map(team => (
          <article className='team-list-card' key={team.id}>
            <div className='card-img'>
              <Image src={team.image} roundedCircle />
            </div>
            <div className='text'>
              <p>{team.name}</p>
              <p>{team.designation}</p>
            </div>
            <span className='menu'>
              <i className='fa-solid fa-ellipsis-vertical'></i>
            </span>
          </article>
        ))
      }
      {
        items < filteredData.length ? (
          <div className='btn-wrapper'>
            <button   
              className='btn-more'
              onClick={() => setItems(items + 3)}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        ) :(
          <div className='btn-wrapper'>
            <button   
              className='btn-less'
              onClick={() => setItems(3)}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        )
      }
    </section>
  )
}
