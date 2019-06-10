import React, { Component } from "react";

export  class MovingWord extends Component {


    constructor(props, context) {
        super(props, context);
        this.speed = 50;

        this.state={
            x: 0,
            y: 0,
        }
    }

    animateWord(sens) {
        switch (sens) {
            case 0:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale0 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x++;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y++;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 1:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale1 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x++;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y--;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 2:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale2 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x--;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y++;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 6:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale3 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x--;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y--;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 4:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale4 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x=x;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y++;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 5:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale5 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x=x;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y--;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 3:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale6 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x++;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y=y;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            case 7:
                clearInterval(this.intervale0);
                clearInterval(this.intervale1);
                clearInterval(this.intervale2);
                clearInterval(this.intervale3);
                clearInterval(this.intervale4);
                clearInterval(this.intervale5);
                clearInterval(this.intervale6);
                clearInterval(this.intervale7);
                this.intervale7 = setInterval(()=>{
                    let x=this.state.x;
                    let y=this.state.y;
                    x--;
                    if(x==-1) x=0;
                    if(x>=85) x=85;
                    y=y;
                    if(y==-1) y=0;
                    if(y>=85) y=85;
                    this.setState({
                        x:x,
                        y:y,
                    })
                },this.speed,);
                break;
            default:
                break;
        }

    }

    componentDidMount() {
        this.animateWord(Math.floor(Math.random() * 5));
        this.firstIntervale = setInterval(()=>{
            let sens =Math.floor(Math.random() * 8);
            this.animateWord(sens);
        },42*this.speed)
    }

    render() {
        let {title,color} = this.props ;
        if(title === undefined) title="hello" ;
        if(color === undefined) color="white" ;
        console.log(title);
        return (
            <div>
                <h2 style={{position: "absolute", left: this.state.x+'%', top: this.state.y+'%', color: color}}>{title}</h2>
            </div>
        );
    }
}
