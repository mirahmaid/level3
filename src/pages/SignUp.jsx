import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link ,NavLink} from "react-router-dom";

export default function SignUp() {
  return (
  <div>
        <Helmet>
                <title>Sign up page</title>
              </Helmet>
        
              <Header />
<main >
              <form>
                <input required placeholder = 'email' type = 'email'/>
                <input required placeholder = 'password' type = 'password'/>
                <button>Sign up</button>
                <p className='account'><Link to ="/Signin">Sign in</Link></p>
              </form>
            </main>              <Footer />
      </div>
  )
}
