import React from 'react'

function BecomeMember() {
  return (
    <div className='b-member' style={{
        backgroundImage:'url(/images/cool-website-background-13.jpg)',
        backgroundSize: 'cover',
        backgroundPosition:'center'}
    }>
        <div id='b-member'>
      <h2>Why pay 20000UGX</h2>
        <p>Covering Administrative Costs: The initial membership fee helps cover administrative expenses associated with managing the investment club, such as setting up accounts, maintaining records, legal compliance, and possibly organizing meetings or events.</p>
        <p>Commitment and Seriousness: Charging a fee can deter individuals who are not serious about participating in the club. It demonstrates a level of commitment from the member and ensures that those joining are genuinely interested in the investment opportunities the club offers.</p> 
        <p>Sense of Ownership: Members who pay a fee to join the club may feel a sense of ownership and responsibility towards the club's success. They are more likely to actively participate in club activities, contribute ideas, and help grow the club's investments.</p>
        </div>
        <div className='pay'>

        </div>
    </div>
  )
}

export default BecomeMember
