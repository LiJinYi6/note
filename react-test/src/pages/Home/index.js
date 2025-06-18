import { Link, useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate(); 
    return (
        <div>
            is Home Page
            <button onClick={() => {navigate('/article/1001/ljy')}}>Go to Article</button>
        </div>
    )
}

export default Home;