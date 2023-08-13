import { Link } from 'react-router-dom';
import Gen from '../items/Gen.png'

const Title = () => (
    <div className="">
      <Link to="/">
      <img 
      data-testid="logo"
      className="w-28 px-4 pt-2 ml-6"
      alt="logo"
    src={Gen}
   
    
      />
       </Link>
    </div>

    
)



export default Title;