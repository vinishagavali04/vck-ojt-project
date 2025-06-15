import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <img src="https://vivekanandcollege.ac.in/images/header-new.png" alt="image"/>
            <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.<br/>
                At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            <ul>
             <li>Legacy of Excellence: Decades of commitment to quality education.</li>   
             <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>   
             <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>   
             <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li> 
             <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>  
            </ul>  
            <h2>Campus Life & Facilities</h2>
            <img  src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg" alt="image" height={"10px"}/>
            <img  src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" alt="image"/>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p>Ready to explore our courses?</p>
            <a class="btn" href="/courses" data-discover="true">Explore courses</a>
        </div>)
}

export default HomePage;