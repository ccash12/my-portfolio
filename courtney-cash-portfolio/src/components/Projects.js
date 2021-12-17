function Projects() {
    return(
        <div className='ProjectsContainer'> 
            <div className="CooksImage">
                <img src='https://i.pinimg.com/736x/39/13/b5/3913b57c85eef9291def53ed1dcaa339.jpg' alt="cooks"/>
            </div>
            <div className="CooksLink">
                <a href="https://a-couple-of-cooks.herokuapp.com/">A Couple of Cooks</a>
            </div>
            <div className="CooksBio">
                <p>This is an interactive website that allows you to browse recipes that other users have added and add ones yourself! </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="FoodshipifyImage">
                <img src="https://cdn-icons-png.flaticon.com/512/135/135763.png"  alt="foodshipify"/>
            </div>
            <div className="FoodshipifyLink">
                <a href="https://foodshipify.herokuapp.com/">FoodShipify</a>
            </div>
            <div className="FoodshipifyBio">
                <p>This application allows you to browse groceries that you need and have them delivered straight to your door! </p>
            </div>
            {/* <h1>Ambient Art Gallery </h1> */}

        </div>
    )
}

export default Projects;