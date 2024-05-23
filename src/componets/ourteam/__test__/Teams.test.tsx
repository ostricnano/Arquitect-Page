import { screen, render } from '@testing-library/react'
import { Teams } from '../Teams'

const teamData = [
  {
    id: 1,
    image: './images/team1.jpg',
    links: [
      {
        link: 'https://www.facebook.com',
        icon: "fab fa-facebook-f"
      },
      {
        link: 'https://www.twitter.com',
        icon: "fab fa-twitter"
      },
      {
        link: 'https://www.linkedin.com',
        icon: "fab fa-linkedin-in"
      },
    ],
    name: 'Gabriel Hart',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
]

describe('Ourteams', () => {
  it('Should render the componenet Teams', async () => {
    render(
      <Teams teamData={teamData}/>
    )
  })
})