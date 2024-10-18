// import styled from "styled-components"

//  css modules in react 
import styled from "styled-components"
import styles from "../components/Card.module.css"
export const Card = () =>{

return <H2>hello guys</H2>
//     return <div className={styles.card}>
//        <div className={styles[`card-content`]}>
//        <h2>helo world</h2>
//        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae laudantium voluptatum consequatur sed provident aperiam totam, distinctio perspiciatis, voluptates modi similique corrupti eaque ipsam! Ea magnam libero quae eaque. Nobis!</p></div> 
//     </div>
}
// end 
// style component in react 

// export const Card = () => {
    // with style object 
    // let Button= styled.button({
    //     color:"black",
    //     fontSize:"16px",
    //     background:"green"
    // })
    // end 
    // with template literal 
    // const Button = styled.button`
    // background-color:aqua;
    // padding:1.2rem;
    // border-radius:12px;
    // color:${(props) => (props.rating >= 8.5 ? "white" : "red" )};
    // font-size:17px;
    // cursor:pointer;
    // border:none;
    // `
    // end 
    // let rating = 8.5;
    // return <div>
    //     <h2>hello wordl</h2>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae quidem iste reiciendis asperiores! Facere delectus illo nemo non ex ipsam sunt iure beatae! Quam cupiditate similique repudiandae est odit!</p>
    //     <Button rating={rating}>click me</Button>

    // </div>
    // css module 
//    return <div className={styles.card}>
//    <div className={styles[`card-content`]}>
//    <h2>hello world</h2>
//    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quaerat optio natus eos quis voluptas autem tenetur illo id repellat!</p></div> 
//     <button className={styles.btn}>click me</button>
//    </div>
//    end 
// styled componetn in react 
// styled component using style object 
// const Button = styled.button({
//     color:"black",
//     background:"green",
//     padding:"1rem",
//     border:"none",
//     borderRadius:"12px",
//     fontSize:"19px",


// })
// end 
// styled component using template literals 
// const Button = styled.button`
// font-size:1.3rem;
// background-color:${(props) =>(props.rating >8? "green" :"yellow")};
// padding:0.7rem 1.2rem;
// border:none;
// border-radius:12px;
// cursor:pointer;
// `
// // end 
// let rating = 8.4;

// return <Button rating = {rating}>click me</Button>
// // end 
// }
// end
const H2 = styled.h2({
    color:"red",
    background:"blanchedalmond"
})

