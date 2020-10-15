import React from 'react';

const BlogCard = (props) =>{
    const style= {
        height:"20%",
        width:"30vh",
        border:"solid black 1px",
        marginBottom:"10vh",
        marginTop:"10vh",
        boxShadow:"5px 5px #aaaaaa",
        
    }
    const pStyles = {
        textAlign:"center",
    }
    const hStyles = {
        ...pStyles,
        margin:"5%",
    }
    
    return(
        <div style={style}>
            <h2 style={hStyles}>{props.content.header}</h2>
            <p style={pStyles}>{props.content.paragraph}</p>
        </div>
    );
}

export default BlogCard;