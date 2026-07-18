import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet-async";
import { Link ,NavLink} from "react-router-dom";

export default function SignIn() {
  return (
    <div >
      <Helmet>
              <title>Sign in page</title>
            </Helmet>
      
            <Header />
            <main >
              <form>
                <input required placeholder = 'email' type = 'email'/>
                <input required placeholder = 'password' type = 'password'/>
                <button>Sign in</button>
                <p className='account'><Link to ="/Signup">Sign up</Link></p>
              </form>
            </main>
            <Footer />
    </div>
  )
}
