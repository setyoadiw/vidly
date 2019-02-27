import React, { Component } from 'react';

//Input: liked:boolean
//Output: onLiked

const Like = (props) => {

    const { liked, onLike} = props
    let classes = "fa fa-heart"
    if(!liked) classes += "-o"

    return ( 
        <React.Fragment>
            <i onClick={onLike} style={{ cursor:"pointer"}} className={classes} aria-hidden="true"></i>
        </React.Fragment> );
    
} 

 
export default Like;