
import './App.css';
import Service from './Service';
import Header from './Header';

function App() {


  const servicaData=[
    {
      title:"Raina",
      subtitle:"Left-Hand Batsman",
      desc:"Suresh Raina is a former Indian international cricketer. An aggressive left-handed middle-order batsman and an occasional off-spin bowler, he is also regarded as one of the best fielders in world cricket.",
      img:"https://static.toiimg.com/photo/msid-77817723/77817723.jpg"
    },
    {
      title:"Dhoni",
      subtitle:"Right-Hand Batsman",
      desc:"Mahendra Singh Dhoni, is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014.",
      img:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/8/2020_8$largeimg_1307977845.JPG"
    },
    {
      title:"Jadeja",
      subtitle:"Left-Hand Batsman",
      desc:"Ravindrasinh Anirudhsinh Jadeja, commonly known as Ravindra Jadeja, is an Indian international cricketer. He is an all-rounder, who bats left-handed in the middle-order and bowls left-arm orthodox spin.",
      img:"https://c.ndtvimg.com/2018-09/5vh3qhv_ravindra-jadeja-afp_625x300_09_September_18.jpg"
    },
    {
      title:"Deepak",
      subtitle:"Right-Hand Bowler",
      desc:"Deepak Lokendrasingh Chahar is an Indian International cricketer. A bowling all-rounder, Chahar is a right-arm medium-fast bowler and lower-order batsman, who plays for Rajasthan in domestic cricket and Chennai Super Kings in the Indian Premier League.",
      img:"https://images.indianexpress.com/2021/04/Screenshot-2021-04-17T161332.015.png"
    },
    {
      title:"Shardul",
      subtitle:"Right-Hand Bowler",
      desc:"Shardul Narendra Thakur is an Indian international cricketer. He is a bowling all-rounder, who bats right-handed and bowls right-arm medium-fast. He plays first-class cricket for Mumbai and is a member of Chennai Super Kings since 2018.",
      img:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/09/968973-ezgif.com-gif-maker-2021-04-09t162047.693.jpg"
    },
    {
      title:"Jagadeesan",
      subtitle:"Right-Hand Batsman",
      desc:"Narayan Jagadeesan is an Indian cricketer. He made his first-class debut for Tamil Nadu in the 2016–17 Ranji Trophy on 27 October 2016, where he won the man of the match award. He made his Twenty20 debut for Tamil Nadu in the 2016–17 Inter State Twenty-20 Tournament on 30 January 2017.",
      img:"https://www.crictracker.com/wp-content/uploads/2020/10/Narayan-Jagadeesan.jpg"
    }
    
  ]


  return (
    <>
    <Header/>
    <div className="container">
        

            {
              servicaData.map((data,label)=>(
                <Service key={label} title={data.title} subtitle={data.subtitle} img={data.img} desc={data.desc} />
              ))
            }
         
          
      </div>
      </>
  );
}

export default App;
