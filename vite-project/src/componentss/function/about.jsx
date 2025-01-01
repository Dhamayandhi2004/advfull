/* eslint-disable react/prop-types */
const About=(props )=>{
    return(
        <section>
        <h1>This is About page.</h1>
        <h2 style={{textAlign:"center"}}>Learnings props</h2>
        <h2>I am teaching in {props.college} the college</h2>
        <h3>Other Colleges:{props.clg1},{props.clg2}</h3>
        </section>
    );
}
export default About