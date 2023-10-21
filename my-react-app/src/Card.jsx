import Smooth from './assets/Smooth.jpg'

function Card(){
    return(
        <div className="card">
            <img src={Smooth}
             alt="PROFILE PICTURE" />
            <h2>
                Itsmepresslygaming
            </h2>
            <p>I'm a youtuber and programmer</p>
        </div>
    )
}

export default Card