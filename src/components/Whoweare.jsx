import * as React from 'react'
import NavBar from './NavBar'
import MainSection from './MainSection'
function Whoweare({cart}){
    return (
        <>
        <div className='Background'>
            <NavBar cart={cart}/>
            <MainSection />
    <div className="highlightText">
          <marquee
            width="100%"
            direction="left"
            height="70px"
            className="rotationText"
          >
            <span className='marqueeFont'>HIGH PROTEAN MEAL 🫧</span>
            <span className='marqueeFont'>RICH IN FIBER 🫧</span>
            <span className='marqueeFont'>CLEAN INGREDIENTS 🫧</span>
            <span className='marqueeFont'>RICH IN TASTE 🫧</span>
            <span className='marqueeFont'>NO NONSENSE INGREDIENTS 🫧</span>
          </marquee>
        </div>
        <div className="BoldTextDarkColor">ABOUT US: The vision behind AllRight</div>
        <div className='TextStyle'>
            <p>
            Meet AllRight, the brainchild of two dynamic young entrepreneurs, Dewanshu and Aryan. This innovative startup was born from a simple yet powerful idea: to provide affordable, highly nutritious meals for fitness enthusiasts and health-conscious individuals across India.
            </p>
            <p>
            Dewanshu, a food scientist with a passion for technology, and Aryan, a dedicated fitness buff, found themselves facing a common dilemma. While following their workout routines, they struggled to find meals that ticked all the boxes – healthy, nutritious, and budget-friendly. It was during one of their post-workout discussions that they realized this wasn't just their problem, but a gap in the Indian market as a whole.
            </p>
            <p>
            Inspired by this revelation, they decided to take matters into their own hands. Combining Dewanshu's expertise in food science and Aryan's understanding of fitness nutrition, they set out to create a product that would revolutionize the way Indians approach healthy eating.
            </p>
            <p>
            After months of research, experimentation, and countless taste tests, AllRight's flagship product was born: "More than Oats." This isn't your average oatmeal – it's a carefully crafted, protein-rich, low-calorie meal that packs a serious nutritional punch.
            </p>
            <p>
            What makes "More than Oats" stand out? For starters, it's high in protein, which is essential for muscle recovery and growth. It's also loaded with fiber, promoting digestive health and keeping you feeling full longer. And the best part? Each serving contains less than 270 calories, making it an ideal meal for those watching their calorie intake without compromising on nutrition
            </p>
            <p>
            But Dewanshu and Aryan didn't stop at creating a great product. They understood that for many Indians, the price point is just as important as the nutritional value. That's why they've worked hard to ensure that "More than Oats" is not only nutritious but also affordable, making it accessible to a wide range of consumers.
            </p>
            <p>
            The journey of AllRight is more than just a business success story – it's a testament to the power of identifying a need and having the courage to fill it. We saw beyond our personal struggle to recognize a larger issue affecting millions of Indians. Our commitment to health, nutrition, and affordability is changing the landscape of the Indian health food market.
            </p>
            <p>
            The journey of AllRight is more than just a business success story – it's a testament to the power of identifying a need and having the courage to fill it. We saw beyond our personal struggle to recognize a larger issue affecting millions of Indians. Our commitment to health, nutrition, and affordability is changing the landscape of the Indian health food market.
            </p>
            <p>
            As AllRight continues to grow, we remain committed to their original vision. We're constantly innovating, looking for new ways to bring nutritious, affordable meals to Indian consumers. "More than Oats" is just the beginning – the duo has plans to expand their product line, always keeping their core values of nutrition, affordability, and taste at the forefront.
            </p>
            <p>
            In a country where the awareness of health and fitness is on the rise, AllRight is perfectly positioned to make a significant impact. By providing a solution that bridges the gap between nutrition and affordability, we are not just building a successful business – they're contributing to a healthier India.
            </p>
            <p>
            So, the next time you're looking for a meal that's quick, nutritious, and won't break the bank, remember AllRight's "More than Oats." It's more than just a meal – it's a step towards a healthier you, brought to you by young entrepreneurs who dared to dream of making nutrition accessible to all.
            </p>
 
        </div>
        </div>
        </>
    )
}
export default Whoweare